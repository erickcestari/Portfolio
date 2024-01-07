"use client"

import DisplayGithubRepository from '@/components/projects/DisplayGithubRepository'
import SkeletonGithubRepositories from '@/components/projects/SkeletonGithubRepositories'
import useGithubRepositories from '@/hooks/useGithubRepositories'
import { Pagination } from '@mui/material'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const username = 'erickcestari'
const numberPerPage = 9

const Projects = () => {
  const { repositoriesData, loading } = useGithubRepositories(username)
  const [page, setPage] = useState(1)
  const [repositories, setRepositories] = useState(repositoriesData)
  const { theme } = useTheme()
  const {t} = useTranslation()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (repositoriesData) {
      setRepositories(repositoriesData.slice((page - 1) * numberPerPage, page * numberPerPage))
    }
  }, [repositoriesData, page])


  return (
    <div className='space-y-2 mt-5'>
      <h1 className='text-3xl font-bold'>λ {"Projects"}</h1>
      {loading && <SkeletonGithubRepositories />}
      {repositoriesData && repositories && (
        <div className='space-y-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 min-h-[700px]'>
            {repositories.map((repository) => (
              <DisplayGithubRepository key={repository.id} githubRepository={repository} />
            ))}
          </div>
          <div className='flex justify-between'>
            <Pagination sx={{
              color: theme === 'dark' ? 'white' : undefined,
              '& .MuiPaginationItem-root': {
                color: theme === 'dark' ? 'white' : undefined,
              },
              '& .MuiPaginationItem-page.Mui-selected': {
                backgroundColor: theme === 'dark' ? 'rgb(10 10 10)' : undefined,
              },
            }} onChange={handleChange} count={Math.ceil(repositoriesData.length / numberPerPage)} />
          </div>
        </div>
      )
      }
    </div>
  )
}

export default Projects