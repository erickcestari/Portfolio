import Link from "next/link"
import Contacts from "./Contacts"
import MySkills from "./MySkills"

const AboutMe = () => {
  return (
    <div className="md:p-4 lg:px-6 space-y-3 text-base">
      <h1 className="text-2xl">
        Hi, I'm <span className="font-bold">Erick Cestari</span>.
      </h1>
      <h1 className="text-xl font-black border-b-2 border-b-zinc-600">* About Me</h1>
      <div className="space-y-2">
        <p>
          <span className="ml-4"></span>My coding journey began in 2020, and I now proudly serve as a FullStack developer. Initially, I was captivated by game development, delving into GML and Game Maker Studio 2. However, my path eventually led me to the enchanting of web development, where I discovered a new world.
          Today, I'm dedicated refining my algorithmic skills and delving into the realms of new programming languages like Rust and Go, with a particular interest in compilers.
        </p>
      </div>
      <h1 className="text-xl font-black  border-b-2 border-b-zinc-600">* My Skills</h1>
        <MySkills />
      <h1 className="text-xl font-black border-b-2 border-b-zinc-600">* Experiences</h1>
      <div className="space-y-2">
        <p>
          <span className="ml-4"></span> I have three months of experience as a FullStack developer. I am a technical specialist in Information Technology (IT), and I am currently studying Information Systems at Unifebe.
        </p>
        <p>
        You can view my projects and contributions to open-source projects <Link href="/projects" className="text-blue-500 hover:underline">here</Link> or at <Link href="https://github.com/erickcestari" target="_blank" className="text-blue-500 hover:underline">github</Link>  page.
        </p>
      </div>
      <h1 className="text-xl font-black border-b-2 border-b-zinc-600">* Contacts</h1>
      <div className="flex space-x-4">
        <Contacts title="Github" url="https://github.com/erickcestari" src="github.svg"/>
        <Contacts title="Linkedin" url="https://www.linkedin.com/in/erick-cestari" src="linkedin.svg"/>
      </div>
    </div>
  )
}

export default AboutMe