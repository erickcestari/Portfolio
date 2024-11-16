import { githubAuthorization } from '@/api/github'
import DisplayGithubRepository from '@/components/projects/DisplayGithubRepository'
import { getDictionary } from '@/dictionaries/getDictionary'
import { GithubRepository } from '@/types/GithubRepositories'
import { LangParamsType } from '@/types/params/Language'

const Projects = async ({ params }: { params: LangParamsType }) => {
  const { lang } = await params
  const dic = await getDictionary(lang)
  const url = "https://api.github.com/users/erickcestari/repos?per_page=100";
  const responseRepos = await fetch(url, { ...githubAuthorization, next: { revalidate: 3600 } });
  const githubRepository = await responseRepos.json() as GithubRepository[]

  const sortedRepositories = githubRepository.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return (
    <div className='space-y-2 mt-5'>
      <h1 className='text-3xl font-bold'>λ {dic.menu.projects}</h1>
      <div className='space-y-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 min-h-[700px]'>
          {sortedRepositories.map((rep) => (
            <DisplayGithubRepository key={rep.id} githubRepository={rep} dic={dic} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects