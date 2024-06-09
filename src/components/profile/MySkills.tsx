interface MySkilssProps {
  dic: DictionaryType
}

const MySkills = (mySkilssProps: MySkilssProps) => {
  const {dic: {mySkills}} = mySkilssProps
  return (
    <div className="space-y-2">
      <p>
        <span className="font-bold">{mySkills.languages}:</span> Typescript, Rust, GO, C#, Python, SQL, GML.
      </p>
      <p>
        <span className="font-bold">{mySkills.frameworks}:</span> NextJS, Fastify, Express, NestJS, .NET, Gin.
      </p>
      <p>
        <span className="font-bold">{mySkills.libraries}:</span> React, Prisma, Zod, Axios, MUI, Shadcn UI.
      </p>
      <p>
        <span className="font-bold">{mySkills.databases}:</span> Postgres, MySql, MongoDB.
      </p>
      <p>
        <span className="font-bold">{mySkills.tools}:</span> Git, Docker, AWS, Gitlab, Github, VSCode, Windows, Linux.
      </p>
      <p>
        <span className="font-bold">{mySkills.hosting}:</span> Vercel, AWS, self-hosted.
      </p>
    </div>
  )
}

export default MySkills