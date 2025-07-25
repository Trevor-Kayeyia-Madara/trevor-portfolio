// src/404.tsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-center px-6">
      <h1 className="text-6xl font-bold text-cyan-600 mb-4">404</h1>
      <p className="text-xl text-gray-800 dark:text-gray-200 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="text-cyan-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
