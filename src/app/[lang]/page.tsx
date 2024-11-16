import AboutMe from "@/components/profile/AboutMe";
import DisplayProfile from "@/components/profile/DisplayProfile";
import { getDictionary } from "@/dictionaries/getDictionary";
import { LangParamsType } from "@/types/params/Language";
import { GithubProfileType } from "@/types/GithubProfileType";
import { githubAuthorization } from "@/api/github";

const username = "erickcestari"

export default async function Home({ params }: { params: LangParamsType }) {
  const { lang } = await params
  const dic = await getDictionary(lang)
  const response = await fetch(`https://api.github.com/users/${username}`, { ...githubAuthorization, next: { revalidate: 3600 } })
  const dataProfile: GithubProfileType = await response.json()

  return (
    <div className='flex flex-col md:flex-row h-full space-x-2 space-y-2 mt-5'>
      <DisplayProfile profile={dataProfile} dic={dic} />
      <div className='flex md:h-full border-t-2 border-l-0 border-stone-600 md:border-t-0 md:border-l-2 '>
        <AboutMe dic={dic} />
      </div>
    </div>
  )
}
