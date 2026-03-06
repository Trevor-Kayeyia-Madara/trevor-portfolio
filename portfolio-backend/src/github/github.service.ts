/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// src/github/github.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

export interface Repo {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  updatedAt: string;
}

@Injectable()
export class GithubService {
  private readonly username = process.env.GITHUB_USERNAME;
  private readonly token = process.env.GITHUB_TOKEN;

  private cache: { data: Repo[] | null; timestamp: number } = {
    data: null,
    timestamp: 0,
  };

  async getRepos(): Promise<Repo[]> {
    const now = Date.now();

    // Return cached data if less than 1 hour old
    if (this.cache.data && now - this.cache.timestamp < 3600_000) {
      return this.cache.data;
    }

    const response = await axios.get(
      `https://api.github.com/users/${this.username}/repos`,
      {
        headers: this.token
          ? { Authorization: `token ${this.token}` }
          : undefined,
      },
    );

    const repos: Repo[] = response.data.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      updatedAt: repo.updated_at,
    }));

    this.cache = { data: repos, timestamp: now };

    return repos;
  }
}
