"use client"

import DisplayProfile from '@/components/DisplayProfile';
import useGitHubProfile from '@/hooks/useGithubProfile';

export default function Home() {
  return (
    <div>
      <DisplayProfile />
    </div>
  )
}
