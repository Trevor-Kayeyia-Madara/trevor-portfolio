// src/github/github.controller.ts
import { Controller, Get } from '@nestjs/common';
import { GithubService, Repo } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('repos')
  async getRepos(): Promise<Repo[]> {
    return this.githubService.getRepos();
  }
}
