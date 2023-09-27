
import { useState, useEffect } from 'react';
import axios from 'axios';

const useGithubRepositories = (username: string) => {
  const [RepositoriesData, setRepositoriesData] = useState<null | any[]>(null);
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

  return { RepositoriesData, loading, error };
};

export default useGithubRepositories;