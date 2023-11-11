import AboutMe from "@/components/profile/AboutMe";
import DisplayProfile from "@/components/profile/DisplayProfile";

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row h-full space-x-2 space-y-2 mt-5'>
      <DisplayProfile />
      <div className='flex md:h-full border-t-2 border-l-0 border-zinc-600 md:border-t-0 md:border-l-2 '>
        <AboutMe />
      </div>
    </div>
  )
}
