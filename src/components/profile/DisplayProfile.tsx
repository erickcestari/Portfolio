import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/20/solid";
import { GithubProfileType } from "@/types/GithubProfileType";

interface DisplayProfileProps {
  profile: GithubProfileType
  dic: DictionaryType
}

const DisplayProfile = ({profile, dic}:DisplayProfileProps) => {

  return (
    <div>
      <div className="select-none flex justify-center items-center flex-col md:items-start md:justify-normal">
        <div className="w-72 h-72 md:h-64 md:w-64 rounded-lg shadow-2xl">
          <Image
            priority
            className="rounded-lg"
            src={profile.avatar_url} width={300} height={300}
            alt={`Github ${profile.name} icon`} />
        </div>
        <h1 className="text-lg">{profile.name}</h1>
        <h2 className="text-sm text-neutral-400">{profile.login}</h2>
        <p>{profile.bio}</p>
        <div className="flex items-center text-sm text-neutral-500">
          <MapPinIcon className="w-4 h-4" />
          <p>{profile.location}</p>
        </div>
        <div className="flex text-xs space-x-16 mt-2">
          <p>{dic.displayProfile.followers}: {profile.followers}</p>
          <p>{dic.displayProfile.following}: {profile.following}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayProfile