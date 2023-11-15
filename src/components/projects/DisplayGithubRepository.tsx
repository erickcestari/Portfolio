import { GithubRepository } from "@/types"
import { StarIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

interface DisplayGithubRepositoryProps {
  githubRepository: GithubRepository
}

const DisplayGithubRepository = (props: DisplayGithubRepositoryProps) => {
  const { githubRepository } = props
  return (
    <div className="bg-white shadow-md rounded-lg p-4 dark:bg-zinc-950 flex flex-col justify-between max-h-60">
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-semibold">{githubRepository.name}</h2>
          <div className="text-gray-700 dark:text-zinc-200 flex justify-center items-center space-x-1">
            <StarIcon height={17}/> 
            <p>{githubRepository.stargazers_count}</p>
          </div>
        </div>
        <p className="text-gray-600 mt-2 dark:text-zinc-300">
          {`${githubRepository.description && githubRepository.description.length > 100 ? githubRepository.description.slice(0, 80).concat("...") : githubRepository.description}`}
        </p>
        <div className="mt-4">
          <span className="text-gray-700 dark:text-zinc-200">Language: {githubRepository.language}</span>
          
        </div>
      </div>
      <div className="mt-2">
        <Link
          href={githubRepository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  )
}

export default DisplayGithubRepository