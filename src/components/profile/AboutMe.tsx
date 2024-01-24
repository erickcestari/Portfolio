import Link from "next/link"
import Contacts from "./Contacts"
import MySkills from "./MySkills"
import GameDisplay from "./GameDisplay"
import HandAnimate from "./HandAnimate"

interface AboutMeProps {
  dic: DictionaryType
}

const AboutMe = (aboutMeProps: AboutMeProps) => {
  const { dic: { aboutMe } } = aboutMeProps;

  return (
    <div className="md:p-4 lg:px-6 space-y-2 text-base font-normal">
      <div className=" flex justify-between md:flex-row flex-col">
        <h1 className="text-2xl font-black flex gap-2"><HandAnimate /> {aboutMe.hiIam} Erick Cestari</h1>
        <GameDisplay />
      </div>
      <h1 className="text-xl font-black border-b-2 border-b-zinc-600">* {aboutMe.aboutMe}</h1>
      <div className="space-y-2 font-normal">
        {aboutMe.aboutMeContent}
      </div>
      <h1 className="text-xl font-black  border-b-2 border-b-zinc-600">* {aboutMe.mySkills}</h1>
      <MySkills dic={aboutMeProps.dic}/>
      <h1 className="text-xl font-black border-b-2 border-b-zinc-600">* {aboutMe.experience}</h1>
      <div className="space-y-2">
        <p>
          {aboutMe.experienceContent}
        </p>
        <p>
          {aboutMe.youCanView}
          <Link href="/projects" className="text-blue-600 font-bold hover:underline"> {aboutMe.here}</Link> {aboutMe.orAt} <Link href="https://github.com/erickcestari" target="_blank" className="text-blue-600 font-bold hover:underline">github</Link>.
        </p>
      </div>
      <h1 className="text-xl font-black border-b-2 border-b-zinc-600">* {aboutMe.contacts}</h1>
      <div className="flex space-x-4">
        <Contacts title="Github" url="https://github.com/erickcestari" src="github.svg" />
        <Contacts title="Linkedin" url="https://www.linkedin.com/in/erick-cestari" src="linkedin.svg" />
      </div>
    </div>
  )
}

export default AboutMe