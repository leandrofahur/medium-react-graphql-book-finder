import { gql } from "@apollo/client";

export const GET_BOOK_BY_ID = gql`
  query GetBook($searchTerm: String!) {
    allBooks(filter: { q: $searchTerm }) {
      id
      title
      author
      publishedYear
    }
  }
`;
