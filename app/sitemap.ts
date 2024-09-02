// app/sitemap.js
import { getSitemapData } from '@/lib/wordpress/api';
import { MetadataRoute } from 'next';


// Define TypeScript interfaces for your data structures
interface Post {
  slug: string;
  modifiedGmt: string;
}

// interface Project {
//   slug: string;
//   modifiedGmt: string;
// }

interface Service {
  slug: string;
  modifiedGmt: string;
}

interface Result {
  posts: {
    nodes: Post[];
  },
  services: {
    nodes: Service[];
  },
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const result = await getSitemapData() as Result; // Type assertion to ensure correct data structure
    const { posts, services } = result;

    const routes = [
      { url: 'https://tiemchungbluekids.vn/', lastModified: new Date().toISOString() },
      { url: 'https://tiemchungbluekids.vn/gioi-thieu', lastModified: new Date().toISOString() },
      { url: 'https://tiemchungbluekids.vn/dich-vu', lastModified: new Date().toISOString() },
      { url: 'https://tiemchungbluekids.vn/lien-he', lastModified: new Date().toISOString() },
    ];

    return [...routes,
    //  ...posts.nodes.map((post) => ({
    //   url: `https://tiemchungbluekids.vn/blog/${post.slug}`,
    //   lastModified: new Date(post.modifiedGmt).toISOString(),
    // })),
    // ...projects.nodes.map((project) => ({
    //   url: `https://tiemchungbluekids.vn/du-an/${project.slug}`,
    //   lastModified: new Date(project.modifiedGmt).toISOString(),
    // })),
    ...services.nodes.map((service) => ({
      url: `https://tiemchungbluekids.vn/dich-vu/${service.slug}`,
      lastModified: new Date(service.modifiedGmt).toISOString(),
    })),
      // Add other routes as needed
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
}