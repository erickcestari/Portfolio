"use client"

import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid'
import { t } from 'i18next'
import React, { useState } from 'react'
import LifeGame from '../game/LifeGame'

const GameDisplay = () => {
  const [stopGame, setStopGame] = useState(false)
  
  return (
    <>
      <LifeGame stopGame={stopGame} />
      <div className="text-lg justify-center items-center cursor-pointer md:flex hidden" onClick={() => setStopGame(!stopGame)}>
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
    </>
  )
}

export default GameDisplay