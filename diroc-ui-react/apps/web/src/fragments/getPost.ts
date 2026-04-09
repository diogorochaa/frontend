import { gql } from '@apollo/client'

export const GET_POST = gql`
  query getPost($slugPost: String) {
    post(where: { slug: $slugPost }) {
      id
      title
      subtitle
      content {
        json
      }
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
