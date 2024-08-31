// lib/imageLoader.ts

'use client'; // Đảm bảo image loader chạy ở phía client
import { ImageLoaderProps } from "next/image";

export const imageLoader = ({ src, width }: ImageLoaderProps): string => {
  // Xử lý URL hình ảnh, loại bỏ "https://" và thêm vào URL cơ sở của dịch vụ xử lý ảnh
  const processedSrc = `https://i0.wp.com/${src.substring(8)}`; 

  // Xây dựng URL cuối cùng với các tham số truy vấn
  const finalUrl = `${processedSrc}?fit=${width}%2C${width}&ssl=1`; 

  return finalUrl;
};