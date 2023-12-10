"use client"

import Link from "next/link"
import Contacts from "./Contacts"
import MySkills from "./MySkills"
import { useTranslation } from "react-i18next"
import LifeGame from "../game/LifeGame";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/20/solid";

const AboutMe = () => {
  const { t } = useTranslation()
  const [stopGame, setStopGame] = useState(false)
  return (
    <div className="md:p-4 lg:px-6 space-y-3 text-base">
      <h1 className="text-2xl flex justify-between md:flex-row flex-col">
        <div>
          <div className="font-bold">👋 {t('hiIm')} Erick Cestari</div>
        </div>
        <LifeGame stopGame={stopGame} />
        <div className="text-lg flex justify-center items-center cursor-pointer" onClick={() => setStopGame(!stopGame)}>
          {stopGame ? (
            <>
              <PlayIcon className="h-6 w-6" /> {t('playConway')}
            </>
          ) : (
            <>
              <PauseIcon className="h-6 w-6" /> {t('pauseConway')}
            </>
          )}
        </div>
      </h1>
      <h1 className="text-xl font-black border-b-2 border-b-zinc-600">* {t('aboutMe')}</h1>
      <div className="space-y-2">
        {t('aboutMeContent')}
      </div>
      <h1 className="text-xl font-black  border-b-2 border-b-zinc-600">* {t('mySkills')}</h1>
      <MySkills />
      <h1 className="text-xl font-black border-b-2 border-b-zinc-600">* {t('experience')}</h1>
      <div className="space-y-2">
        <p>
          {t('experienceContent2')}
        </p>
        <p>
          {t('youCanView')} <Link href="/projects" className="text-blue-700 hover:underline">{t('here')}</Link> {t('orAt')} <Link href="https://github.com/erickcestari" target="_blank" className="text-blue-700 hover:underline">github</Link> {t('pageGithub')}.
        </p>
      </div>
      <h1 className="text-xl font-black border-b-2 border-b-zinc-600">* {t('contacts')}</h1>
      <div className="flex space-x-4">
        <Contacts title="Github" url="https://github.com/erickcestari" src="github.svg" />
        <Contacts title="Linkedin" url="https://www.linkedin.com/in/erick-cestari" src="linkedin.svg" />
      </div>
    </div>
  )
}

export default AboutMe