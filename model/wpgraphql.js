// Model/wpgraphql.js
// import * as gql from 'https://cdn.jsdelivr.net/npm/gql-query-builder@3.8.0/build/Utils.min.js';

// export const GET_POSTS_QUERY = gql`
//   query {
//     posts {
//       nodes {
//         id
//         title
//         content
//       }
//     }
//   }
// `;

const query = `
  query {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`;