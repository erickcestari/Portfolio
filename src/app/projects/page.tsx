"use client"

import useGithubRepositories from '@/hooks/useGithubRepositories'
import React from 'react'
const username = 'erickcestari'
const Projects = () => {
  const { RepositoriesData, error, loading } = useGithubRepositories(username)

  return (
    <div>
      {loading && <div>Loading...</div>}
      {RepositoriesData && (
        <div>
          {RepositoriesData.map((repository) => (
            <div key={repository.id}>
              <h1>{repository.name}</h1>
              <p>{repository.description}</p>
              <p>{repository.language}</p>
              <p>{repository.stargazers_count}</p>
            </div>
          ))}
        </div>
      )
      }
    </div>
  )
}

export default Projects