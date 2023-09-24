import { useState, useEffect } from 'react';
import axios from 'axios';
import { GithubProfileData } from '@/types/githubProfileData';

const useGitHubProfile = (username: string) => {
  const [profileData, setProfileData] = useState<GithubProfileData | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setProfileData(response.data);
        setError(null);
      } catch (err) {
        setProfileData(null);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHubProfile();
    }
  }, [username]);

  return { profileData, loading, error };
};

export default useGitHubProfile;