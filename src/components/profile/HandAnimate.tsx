"use client"

import { motion } from 'framer-motion'

const HandAnimate = () => {
  return (
    <motion.div
    className='cursor-default'
      initial={{ rotate: 0 }}
      whileHover={{
        rotate: [0, -15, 15, -15, 15, 0],
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      }}
      animate={{
        rotate: [0, -15, 15, -15, 15, 0],
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      }}
    >
      👋
    </motion.div>
  )
}

export default HandAnimate