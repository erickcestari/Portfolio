"use client"

import useGitHubProfile from "@/hooks/useGithubProfile"
import Image from "next/image";

const username = 'erickcestari';

const DisplayProfile = () => {
  const { profileData, loading, error } = useGitHubProfile(username);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {profileData && (
        <>
          <div className="w-64 h-64 rounded-full shadow-2xl">
            <Image className="rounded-full" src={profileData.avatar_url} width={1200} height={1200} alt={`Github ${profileData.name} icon`} />
          </div>
          <h1>{profileData.name}</h1>
          <p>{profileData.bio}</p>
          <p>{profileData.location}</p>
        </>
      )}
    </div>
  )
}

export default DisplayProfile