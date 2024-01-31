import DisplayGithubRepository from '@/components/projects/DisplayGithubRepository'
import { getDictionary } from '@/dictionaries/getDictionary'
import { GithubProfileType } from '@/types/GithubProfileType'
import { GithubRepository } from '@/types/GithubRepositories'
import { LangType } from '@/types/params/Language'
import { githubAuthorization } from '@/api/github'

const username = 'erickcestari'

const Projects = async ({ params: { lang } }: LangType) => {
  const dic = await getDictionary(lang)
  const response = await fetch(`https://api.github.com/users/${username}`, githubAuthorization)
  const dataProfile: GithubProfileType = await response.json()
  const url = dataProfile.repos_url + "?per_page=100";
  const responseRepos = await fetch(url, githubAuthorization);
  const githubRepository = await responseRepos.json() as GithubRepository[]

  return (
    <div className='space-y-2 mt-5'>
      <h1 className='text-3xl font-bold'>λ {dic.menu.projects}</h1>
      <div className='space-y-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 min-h-[700px]'>
          {githubRepository.map((rep) => (
            <DisplayGithubRepository key={rep.id} githubRepository={rep} dic={dic} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects