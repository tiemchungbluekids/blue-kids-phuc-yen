// types/types.ts

// SEO
export interface SEO{
    fullHead:string
}

// Thông tin về dịch vụ tiêm chủng
export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  benefits: string[];
  price: number;
  ageGroup: string; // Nhóm tuổi phù hợp
  vaccineType: string; // Loại vắc-xin
  schedule: string; // Lịch tiêm khuyến nghị
  imageUrl?: string; // Đường dẫn hình ảnh (tùy chọn)
  isRequired: boolean; // Có bắt buộc tiêm không
  sideEffects: string[]; // Các tác dụng phụ có thể xảy ra
  seo: SEO;
}

// Thông tin khách hàng
export interface Customer {
  id: string;
  fullName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female';
  phoneNumber: string;
  email: string;
  address: string;
  appointments: Appointment[]; // Danh sách các lịch hẹn của khách hàng
  medicalHistory?: string; // Tiền sử bệnh án (tùy chọn)
  allergies?: string[]; // Dị ứng (tùy chọn)
}

// Thông tin lịch hẹn
export interface Appointment {
  id: string;
  customerId: string;
  serviceId: string;
  date: Date;
  time: string; // Ví dụ: '09:00'
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string; // Ghi chú của nhân viên y tế (tùy chọn)
}

// Thông tin sản phẩm (nếu có cửa hàng)
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category: string;
  stock?: number; // Số lượng tồn kho (tùy chọn)
  discount?: number; // Giảm giá (nếu có, tùy chọn)
}

// Thông tin bài viết blog
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: Date;
  imageUrl?: string;
  tags: string[];
}

// ... (Các kiểu dữ liệu khác có thể được thêm vào sau này)
// types/types.ts

// Thông tin về dịch vụ tiêm chủng
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  ageGroup: string; // Nhóm tuổi phù hợp
  vaccineType: string; // Loại vắc-xin
  schedule: string; // Lịch tiêm khuyến nghị
  imageUrl?: string; // Đường dẫn hình ảnh (tùy chọn)
  isRequired: boolean; // Có bắt buộc tiêm không
  sideEffects: string[]; // Các tác dụng phụ có thể xảy ra
}

// Thông tin khách hàng
export interface Customer {
  id: string;
  fullName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female';
  phoneNumber: string;
  email: string;
  address: string;
  appointments: Appointment[]; // Danh sách các lịch hẹn của khách hàng
  medicalHistory?: string; // Tiền sử bệnh án (tùy chọn)
  allergies?: string[]; // Dị ứng (tùy chọn)
}

// Thông tin lịch hẹn
export interface Appointment {
  id: string;
  customerId: string;
  serviceId: string;
  date: Date;
  time: string; // Ví dụ: '09:00'
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string; // Ghi chú của nhân viên y tế (tùy chọn)
}

// Thông tin sản phẩm (nếu có cửa hàng)
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category: string;
  stock?: number; // Số lượng tồn kho (tùy chọn)
  discount?: number; // Giảm giá (nếu có, tùy chọn)
}

// Thông tin bài viết blog
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: Date;
  imageUrl?: string;
  tags: string[];
}

// ... (Các kiểu dữ liệu khác có thể được thêm vào sau này)
// types/types.ts

// ... (các kiểu dữ liệu khác)

export interface Page {
  title: string;
  content: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
    }
  }
  seo: SEO;
}

export interface BannerProps {
  title?: string;        // Tiêu đề của banner (tùy chọn)
  slogan?: string;       // Slogan của banner (tùy chọn)
  buttonText?: string;   // Nội dung của nút (tùy chọn)
  buttonLink?: string;   // Đường dẫn của nút (tùy chọn)
  imageUrl?: string;     // Đường dẫn đến ảnh banner (tùy chọn)
}
export interface AboutSectionProps {
  content: string; // Nội dung HTML của phần giới thiệu
  imageUrl: string; // Đường dẫn đến hình ảnh minh họa
}

