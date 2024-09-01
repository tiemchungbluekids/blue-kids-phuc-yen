'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Oops! Trang không tồn tại</h1>
      <p className="text-gray-600 mb-8">Có vẻ như bạn đã đi lạc. Đừng lo lắng, chúng tôi sẽ giúp bạn tìm đường về nhà.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Trở về trang chủ
      </Link>
    </div>
  );
}