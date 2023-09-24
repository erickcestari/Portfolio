import { Skeleton } from '@mui/material'
import React from 'react'

const SkeletonDisplayProfile = () => {
  return (
    <div className='w-80'>
      <Skeleton variant="circular" sx={{ bgcolor: "rgb(212 212 216)" }} width={256} height={256} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={64} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={90} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={276} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={128} />
    </div>
  )
}

export default SkeletonDisplayProfile