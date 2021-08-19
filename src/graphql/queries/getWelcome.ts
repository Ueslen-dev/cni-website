import { gql } from 'graphql-request';

const GET_WELCOME = gql`
  query GET_WELCOME {
    welcome {
      Main {
        logo {
          alternativeText
          url
        }
        title
        subtitle
        button {
          label
          url
        }
      }
    }
  }
`;

export default GET_WELCOME;
