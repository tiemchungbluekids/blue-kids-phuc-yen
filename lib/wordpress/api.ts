import client from './client';
import { GET_ABOUT_PAGE } from './queries';
import { Page } from '@/types/types'; // Import kiểu dữ liệu Page từ types.ts

export const getAboutPage = async (): Promise<Page | null> => {
  try {
    const {page} : {page: Page} = await client.request(GET_ABOUT_PAGE);
    return page; // Ép kiểu data.page về kiểu Page
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu trang Giới thiệu:', error);
    return null; // Trả về null nếu có lỗi
  }
};