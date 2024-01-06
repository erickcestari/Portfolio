interface MySkilssProps {
  dic: DictionaryType
}

const MySkills = (mySkilssProps: MySkilssProps) => {
  const {dic: {mySkills}} = mySkilssProps
  return (
    <div className="space-y-2">
      <p>
        <span className="font-bold">{mySkills.languages}:</span> Javascript, Typescript, Python, C#, GML, Rust, GO, C#, SQL.
      </p>
      <p>
        <span className="font-bold">{mySkills.frameworks}:</span> NextJS, Fastify, Express, NestJS, .NET, Gin.
      </p>
      <p>
        <span className="font-bold">{mySkills.libraries}:</span> React, Prisma, Zod, Axios, MUI.
      </p>
      <p>
        <span className="font-bold">{mySkills.databases}:</span> Postgres, MySql.
      </p>
      <p>
        <span className="font-bold">{mySkills.tools}:</span> Git, Docker, AWS, Gitlab, Github, VSCode, Windows.
      </p>
      <p>
        <span className="font-bold">{mySkills.hosting}:</span> Vercel.
      </p>
    </div>
  )
}

export default MySkills