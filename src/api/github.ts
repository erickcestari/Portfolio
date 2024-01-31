export const token = process.env.GITHUB_TOKEN

export const githubAuthorization = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}