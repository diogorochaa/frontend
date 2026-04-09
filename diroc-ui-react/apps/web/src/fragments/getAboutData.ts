import { gql } from '@apollo/client'

export const GET_ABOUT_DATA = gql`
  query getAboutData {
    abouts {
      id
      title
      description
      perfil {
        url
      }
    }
  }
`
