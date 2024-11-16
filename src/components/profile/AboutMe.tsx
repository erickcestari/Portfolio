import React from "react";
import GameDisplay from "./GameDisplay";
import HandAnimate from "./HandAnimate";
import StyledLink from "../ui/StyledLink";
import MySkills from "./MySkills";
import ExperienceTimer from "./ExperienceTimer";

interface AboutMeProps {
  dic: DictionaryType;
}

const AboutMe = (aboutMeProps: AboutMeProps) => {
  const { dic: { aboutMe } } = aboutMeProps;
  const startedWorking = new Date("2023-05-01");

  return (
    <div className="md:p-4 lg:px-6 space-y-2 text-base font-normal">
      <div className="flex justify-between md:flex-row flex-col">
        <h1 className="text-2xl font-black flex gap-2"><HandAnimate /> {aboutMe.hiIam} Erick Cestari</h1>
        <GameDisplay />
      </div>
      <h1 className="text-xl font-black border-b-2 border-stone-600">* {aboutMe.aboutMe}</h1>
      <div className="space-y-2 font-normal">
        {aboutMe.aboutMeContent}
      </div>
      <h1 className="text-xl font-black border-b-2 border-stone-600">* {aboutMe.mySkills}</h1>
      <MySkills dic={aboutMeProps.dic} />
      <h1 className="text-xl font-black border-b-2 border-stone-600">* {aboutMe.experience}</h1>
      <div className="space-y-2">
        <p>
          <ExperienceTimer startDate={startedWorking} locale={aboutMeProps.dic.locale} valueToReplace={aboutMe.experienceContent} />)
        </p>
        <p>
          {aboutMe.youCanView}
          <StyledLink href="/projects"> {aboutMe.here}</StyledLink> {aboutMe.orAt} <StyledLink href="https://github.com/erickcestari" blank>github</StyledLink>.
        </p>
      </div>
      <h1 className="text-xl font-black border-b-2 border-stone-600">* {aboutMe.contacts}</h1>
    </div>
  );
};

export default AboutMe;