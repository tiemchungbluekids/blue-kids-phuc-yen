// lib/wordpress/queries.ts

import { gql } from 'graphql-request';

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        fullHead
      }
    }
  }
`;

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
      seo{
        fullHead
      }
    }
  }
`;

export const GET_HOME_PAGE = gql`
  query GetHomePage {
    page(id: "/", idType: URI) { 
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      seo{
        fullHead
      }
    }
  }
`;

export const GET_SERVICES = gql`
query GetServices {
  services {
    nodes {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      price
      ageGroup
      vaccineType
      schedule
      isRequired
      sideEffects
    }
  }
}
`;

export const GET_SERVICE_BY_SLUG = gql`
  query GetServiceBySlug($slug: ID!) {
    service(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      benefits
      featuredImage {
        node {
          sourceUrl
        }
      }
      price
      ageGroup
      vaccineType
      schedule
      isRequired
      sideEffects
      seo{
        fullHead
      }
    }
  }
`;