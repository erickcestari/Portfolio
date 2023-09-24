"use client"

import useGitHubProfile from "@/hooks/useGithubProfile"
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/20/solid";

const username = 'erickcestari';

const DisplayProfile = () => {
  const { profileData, loading, error } = useGitHubProfile(username);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {profileData && (
        <div>
          <div className="w-64 h-64 rounded-full shadow-2xl">
            <Image className="rounded-full" src={profileData.avatar_url} width={1200} height={1200} alt={`Github ${profileData.name} icon`} />
          </div>
          <h1 className="text-lg">{profileData.name}</h1>
          <h2 className="text-sm text-neutral-400">{profileData.login}</h2>
          <p>{profileData.bio}</p>
          <div className="flex items-center text-neutral-500">
            <MapPinIcon className="w-4 h-4" />
            <p>{profileData.location}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DisplayProfile