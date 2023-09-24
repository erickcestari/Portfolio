import { Skeleton } from '@mui/material'
import React from 'react'

const SkeletonDisplayProfile = () => {
  return (
    <div className='w-72 h-[380px] p-4'>
      <Skeleton variant="circular" sx={{ bgcolor: "rgb(212 212 216)" }} width={256} height={256} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={64} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={90} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={256} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={64} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={224} />
    </div>
  )
}

export default SkeletonDisplayProfile