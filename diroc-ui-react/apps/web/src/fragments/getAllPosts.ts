import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      id
      slug
      title
      subtitle
      createdAt
      coverImage {
        url
      }
      author {
        name
      }
    }
  }
`
