import client from './client';
import {  GET_FAQS, GET_PAGE_BY_SLUG, GET_SERVICES, GET_SERVICE_BY_SLUG } from './queries';
import { FAQ, FAQsData, Page, Service } from '@/types/types'; // Import kiểu dữ liệu Page từ types.ts

interface PageData{
  page: any
}

export const getPageBySlug = async (slug: string): Promise<Page | null> => {
  try {
    const data: PageData = await client.request(GET_PAGE_BY_SLUG, { slug });
    const node = data.page;

    if (!node) {
      return null; // Trả về null nếu không tìm thấy trang
    }

    return node
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu trang:', error);
    return null; // Trả về null nếu có lỗi
  }
};

export const getFAQs = async (): Promise<FAQ[]> => {
  try {
    const data: FAQsData = await client.request(GET_FAQS); // Khai báo kiểu dữ liệu cho data
    return data.faqs.edges.map((edge) => ({ 
      id: edge.node.id,
      question: edge.node.title,
      answer: edge.node.content,
    }));
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu câu hỏi thường gặp:', error);
    return []; 
  }
};

// ... (các hàm khác)

export const getServices = async (): Promise<Service[]> => {
  try {
    const { services }: { services: { nodes: any[] } } = await client.request(GET_SERVICES);
    return services.nodes.map((node: any) => ({
      id: node.id,
      name: node.title,
      slug: node.slug,
      description: node.content,
      benefits: node.benefits?.split('\r\n') || [],
      price: parseFloat(node.price) || 0, // Chuyển đổi giá thành số, mặc định là 0 nếu không có
      ageGroup: node.ageGroup || '',
      vaccineType: node.vaccineType || '',
      schedule: node.schedule || '',
      imageUrl: node.featuredImage?.node?.sourceUrl || '',
      isRequired: node.isRequired || false,
      sideEffects: node.sideEffects?.split(',') || [], // Chuyển đổi chuỗi thành mảng
      seo: node.seo,
    }));
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu dịch vụ:', error);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
};

export const getServiceBySlug = async (slug: string): Promise<Service | null> => {
  try {
    const {service}: {service: any} = await client.request(GET_SERVICE_BY_SLUG, { slug });
    

    if (!service) {
      return null; // Trả về null nếu không tìm thấy dịch vụ
    }

    return {
      id: service.id,
      name: service.title,
      slug: service.slug,
      description: service.content,
      benefits: service.benefits?.split('\r\n') || [],
      price: parseFloat(service.price) || 0,
      ageGroup: service.ageGroup || '',
      vaccineType: service.vaccineType || '',
      schedule: service.schedule || '',
      imageUrl: service.featuredImage?.node?.sourceUrl || '',
      isRequired: service.isRequired || false,
      sideEffects: service.sideEffects?.split(',') || [],
      seo: service.seo,
    };
    
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu dịch vụ:', error);
    return null; // Trả về null nếu có lỗi
  }
};

export const getSitemapData = async () => {
  const query = `
    query GetSitemapData {
      posts {
        nodes {
          slug
          modifiedGmt
          
        }
      }
      services {
        nodes {
          slug
          modifiedGmt
          
        }
      }
      # Add other content types as needed
    }
  `;

  try {
    const result = await client.request(query);
    return result; // Trả về toàn bộ kết quả truy vấn
  } catch (error) {
    console.error('Error fetching sitemap data:', error);
    throw error; // Hoặc bạn có thể xử lý lỗi theo cách khác, ví dụ: return null
  }
};