"use client"

import { motion, MotionProps } from "framer-motion"
import React from "react"

interface FadeProps {
  children: React.ReactNode
  props?: MotionProps
}

const FadeInMotion = ({ children, props }: FadeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
      >
      {children}
    </motion.div>
  )
}

export default FadeInMotion