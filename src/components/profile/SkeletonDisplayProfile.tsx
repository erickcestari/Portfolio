const SkeletonDisplayProfile = () => {
  return (
    <div className='p-4 flex animate-pulse justify-center items-center flex-col md:items-start md:justify-normal space-y-2'>
      <div className='bg-gray-300 shadow-2xl dark:bg-zinc-950 rounded-full w-72 h-72 md:h-64 md:w-64'/>
      <div className='bg-gray-300 shadow-md dark:bg-zinc-950 rounded-lg h-5 w-20'/>
      <div className='bg-gray-300 shadow-md dark:bg-zinc-950 rounded-lg h-3 w-24'/>
      <div className='bg-gray-300 shadow-md dark:bg-zinc-950 rounded-lg h-4 w-64'/>
      <div className='bg-gray-300 shadow-md dark:bg-zinc-950 rounded-lg h-3 w-56'/>
      <div className='flex justify-between space-x-16'>
        <div className='bg-gray-300 shadow-md dark:bg-zinc-950 rounded-lg h-4 w-24'/>
        <div className='bg-gray-300 shadow-md dark:bg-zinc-950 rounded-lg h-4 w-24'/>
      </div>
    </div>
  )
}

export default SkeletonDisplayProfile