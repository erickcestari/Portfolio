import Link from "next/link"
import Contacts from "./Contacts"
import MySkills from "./MySkills"
import GameDisplay from "./GameDisplay"
import HandAnimate from "./HandAnimate"
import StyledLink from "../ui/StyledLink"

interface AboutMeProps {
  dic: DictionaryType
}

const AboutMe = (aboutMeProps: AboutMeProps) => {
  const { dic: { aboutMe } } = aboutMeProps;
  const startedWorking = new Date("2023-05-01")
  const now = new Date();

  const diffTime = Math.abs(now.getTime() - startedWorking.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor((diffDays % 365) / 30);

  const experience = aboutMeProps.dic.currentLanguage == "English" ? `${diffYears} years, and ${diffMonths} months` : `${diffYears} anos e ${diffMonths} meses`;

  return (
    <div className="md:p-4 lg:px-6 space-y-2 text-base font-normal">
      <div className=" flex justify-between md:flex-row flex-col">
        <h1 className="text-2xl font-black flex gap-2"><HandAnimate /> {aboutMe.hiIam} Erick Cestari</h1>
        <GameDisplay />
      </div>
      <h1 className="text-xl font-black border-b-2 border-stone-600">* {aboutMe.aboutMe}</h1>
      <div className="space-y-2 font-normal">
        {aboutMe.aboutMeContent}
      </div>
      <h1 className="text-xl font-black  border-b-2 border-stone-600">* {aboutMe.mySkills}</h1>
      <MySkills dic={aboutMeProps.dic} />
      <h1 className="text-xl font-black border-b-2 border-stone-600">* {aboutMe.experience}</h1>
      <div className="space-y-2">
        <p>
          {aboutMe.experienceContent.replace("{experience}", experience)}
        </p>
        <p>
          {aboutMe.youCanView}
          <StyledLink href="/projects"> {aboutMe.here}</StyledLink> {aboutMe.orAt} <StyledLink href="https://github.com/erickcestari" blank>github</StyledLink>.
        </p>
      </div>
      <h1 className="text-xl font-black border-b-2 border-stone-600">* {aboutMe.contacts}</h1>
      <div className="flex space-x-4">
        <Contacts title="Github" url="https://github.com/erickcestari" src="/github.svg" />
        <Contacts title="Linkedin" url="https://www.linkedin.com/in/erick-cestari" src="/linkedin.svg" />
      </div>
    </div>
  )
}

export default AboutMe