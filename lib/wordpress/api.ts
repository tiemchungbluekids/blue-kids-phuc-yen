import client from './client';
import { GET_ABOUT_PAGE, GET_SERVICES, GET_SERVICE_BY_SLUG } from './queries';
import { Page, Service } from '@/types/types'; // Import kiểu dữ liệu Page từ types.ts

export const getAboutPage = async (): Promise<Page | null> => {
  try {
    const { page }: { page: Page } = await client.request(GET_ABOUT_PAGE);
    return page; // Ép kiểu data.page về kiểu Page
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu trang Giới thiệu:', error);
    return null; // Trả về null nếu có lỗi
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
    console.log(service)
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
    };
    
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu dịch vụ:', error);
    return null; // Trả về null nếu có lỗi
  }
};