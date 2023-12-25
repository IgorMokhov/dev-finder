import { GithubUser, LocalGitHubUser } from "types";

export const extractLocalUser = (user: GithubUser): LocalGitHubUser => ({
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  company: user.company,
  bio: user.bio,
  blog: user.blog,
  location: user.location,
  twitter: user.twitter_username,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  created: user.created_at,
});