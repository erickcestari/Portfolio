import DisplayProfile from '@/components/DisplayProfile';

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row h-full space-x-2 px-8'>
      <DisplayProfile />
      <div className='flex md:h-full border-b-2 border-l-0 border-zinc-600 md:border-b-0 md:border-l-2 '>
        
      </div>
    </div>
  )
}
