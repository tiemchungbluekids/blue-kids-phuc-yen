// lib/wordpress/queries.ts

import { gql } from 'graphql-request';

export const GET_ABOUT_PAGE = gql`
  query GetAboutPage {
    page(id: "gioi-thieu", idType: URI) { 
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

// Các truy vấn khác để lấy dữ liệu từ WordPress sẽ được thêm vào đây