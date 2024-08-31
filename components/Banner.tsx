// components/Banner.tsx

import Image from 'next/image';
import Link from 'next/link';
import { BannerProps } from '../types/types';
import { imageLoader } from '@/lib/imageLoader';

const Banner: React.FC<BannerProps> = ({
  title = "Blue Kids",
  slogan = "Vì một tương lai khỏe mạnh cho con bạn",
  buttonText = "Đặt lịch tiêm ngay",
  buttonLink = "/dat-lich",
  imageUrl = "https://www.tiemchungbluekids.vn/wordpress/wp-content/uploads/sites/46/2024/08/banner.jpg"
}) => {
  return (
    <div className="relative h-[500px]">
      <Image
        loader={imageLoader}
        src={imageUrl}
        alt="Banner Blue Kids"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Thêm lớp phủ nền đen */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-white mb-8">{slogan}</p>
        <Link href={buttonLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Banner;