// lib/queries.ts

import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';

export const GET_ABOUT_PAGE = gql`
  query GetAboutPage {
    page(id: "gioi-thieu", idType: URI) { # Thay "gioi-thieu" bằng đường dẫn (slug) của trang giới thiệu
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

// lib/queries.ts

// ... (truy vấn GET_ABOUT_PAGE ở trên)

const client = new GraphQLClient(process.env.NEXT_PUBLIC_WORDPRESS_API_URL!); // Thay thế bằng URL API GraphQL của bạn

export const getAboutPage = async () => {
  const data = await client.request(GET_ABOUT_PAGE);
  return data?.page;
};