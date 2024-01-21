import { GithubRepository } from "@/types/GithubRepositories"
import { StarIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

interface DisplayGithubRepositoryProps {
  githubRepository: GithubRepository
  dic: DictionaryType
}

const DisplayGithubRepository = (props: DisplayGithubRepositoryProps) => {
  const { githubRepository, dic } = props
  return (
    <div className="bg-white shadow-md rounded-lg p-4 dark:bg-zinc-950 flex flex-col justify-between max-h-60 overflow-hidden">
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold">{githubRepository.name}</h2>
          <div className="text-gray-700 dark:text-zinc-200 flex justify-center items-center space-x-1">
            <StarIcon height={17}/> 
            <p>{githubRepository.stargazers_count}</p>
          </div>
        </div>
        <p className="text-gray-600 text-md mt-2 dark:text-zinc-300">
          {`${githubRepository.description && githubRepository.description.length > 50 ? githubRepository.description.slice(0, 50).concat("...") : githubRepository.description}`}
        </p>
        <div className="mt-4">
          <span className="text-gray-700 dark:text-zinc-200 text-md">{dic.projects.language}: {githubRepository.language}</span>
        </div>
      </div>
      <div className="mt-2">
        <Link
          href={githubRepository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-bold hover:underline"
        >
          {dic.projects.viewOnGithub}
        </Link>
      </div>
    </div>
  )
}

export default DisplayGithubRepository
