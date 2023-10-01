import { useTranslation } from "react-i18next"

const MySkills = () => {
  const {t} = useTranslation()
  return (
    <>
      <div className="space-y-2">
        <p>
          <span className="font-bold">{t('languages')}:</span> Javascript, Typescript, Python, C#, GML, Rust, C#, SQL, HTML, CSS.
        </p>
        <p>
          <span className="font-bold">{t('frameworks')}:</span> NextJS, NodeJS, Fastify, Express, NestJs, .NET, TailwindCSS.
        </p>
        <p>
          <span className="font-bold">{t('libraries')}:</span> React, Prisma, Zod, Axios, MUI.
        </p>
        <p>
          <span className="font-bold">{t('databases')}:</span> Postgres, MySql.
        </p>
        <p>
          <span className="font-bold">{t('tools')}:</span> Git, gitlab, Docker, AWS, VSCode, Windows.
        </p>
        <p>
          <span className="font-bold">{t('versioning')}:</span> Vercel.
        </p>
      </div>
    </>
  )
}

export default MySkills