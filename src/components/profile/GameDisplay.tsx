"use client"

import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid'
import { t } from 'i18next'
import React, { useState } from 'react'
import LifeGame from '../game/LifeGame'
import { motion } from 'framer-motion'

const GameDisplay = () => {
  const [stopGame, setStopGame] = useState(false)

  return (
    <>
      <LifeGame stopGame={stopGame} />
      <motion.div
        className="text-lg justify-center items-center cursor-pointer md:flex hidden"
        onClick={() => setStopGame(!stopGame)}
        whileHover={{
          scale: 1.1,
        }}
      >
        {stopGame ? (
          <>
            <PlayIcon className="h-6 w-6" /> {t('playConway')}
          </>
        ) : (
          <>
            <PauseIcon className="h-6 w-6" /> {t('pauseConway')}
          </>
        )}
      </motion.div>
    </>
  )
}

export default GameDisplay