import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <CircularProgress size={60} sx={{color:"#000"}}/>
    </div>
  )
}

export default Loading