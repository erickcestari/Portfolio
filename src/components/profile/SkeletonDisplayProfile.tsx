import { Skeleton } from '@mui/material'
import React from 'react'

const SkeletonDisplayProfile = () => {
  return (
    <div className='p-4 flex justify-center items-center flex-col md:items-start md:justify-normal'>
      <Skeleton variant="circular" sx={{ bgcolor: "rgb(212 212 216)" }} width={256} height={256} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={64} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={90} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={256} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={64} />
      <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={224} />
      <div className='flex'>
        <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)", marginRight: "100px"}} width={82} />
        <Skeleton variant="text" sx={{ bgcolor: "rgb(212 212 216)" }} width={82} />
      </div>
    </div>
  )
}

export default SkeletonDisplayProfile