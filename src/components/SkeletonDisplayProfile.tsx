import { Skeleton } from '@mui/material'
import React from 'react'

const SkeletonDisplayProfile = () => {
  return (
    <>
      <Skeleton variant="circular" sx={{ bgcolor: "rgb(212 212 216)" }} width={256} height={256} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={64} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={80} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={256} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={128} />
    </>
  )
}

export default SkeletonDisplayProfile