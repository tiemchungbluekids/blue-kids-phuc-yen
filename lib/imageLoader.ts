// lib/image-loader.ts

'use client';
import { ImageLoaderProps } from "next/image";

export const imageLoader = ({ src, width }: ImageLoaderProps): string => {
  // Logic xử lý hình ảnh ở đây
  // Ví dụ: sử dụng dịch vụ CDN hoặc xử lý trực tiếp trên server của bạn
  return `https://i0.wp.com/${src.substring(8)}?fit=${width}%2C${width}&ssl=1`;
};