"use client"

import useGitHubProfile from "@/hooks/useGithubProfile"
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/20/solid";
import SkeletonDisplayProfile from "./SkeletonDisplayProfile";

const username = 'erickcestari';

const DisplayProfile = () => {
  const { profileData, loading } = useGitHubProfile(username);

  return (
    <div>
      {loading && <SkeletonDisplayProfile />}
      {profileData && (
        <div className="select-none flex justify-center items-center flex-col md:items-start md:justify-normal">
          <div className="w-72 h-72 md:h-64 md:w-64 rounded-full shadow-2xl">
            <Image priority className="rounded-full" src={profileData.avatar_url} width={1000} height={1000} alt={`Github ${profileData.name} icon`} />
          </div>
          <h1 className="text-lg">{profileData.name}</h1>
          <h2 className="text-sm text-neutral-400">{profileData.login}</h2>
          <p>{profileData.bio}</p>
          <div className="flex items-center text-sm text-neutral-500">
            <MapPinIcon className="w-4 h-4" />
            <p>{profileData.location}</p>
          </div>
          <div className="flex text-xs space-x-16 mt-2">
            <p>Followers: {profileData.followers}</p>
            <p>Following: {profileData.following}</p>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default DisplayProfile