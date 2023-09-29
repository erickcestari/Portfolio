
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GithubRepository } from '@/types/githubRepositories';

const useGithubRepositories = (username: string) => {
  const [repositoriesData, setRepositoriesData] = useState<null| GithubRepository[]>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const url = response.data.repos_url;
        const responseRepos = await axios.get(url);
        setRepositoriesData(responseRepos.data);
        setError(null);
      } catch (err) {
        setRepositoriesData(null);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubProfile();
    }
  }, [username]);

  return { repositoriesData, loading, error };
};

export default useGithubRepositories;