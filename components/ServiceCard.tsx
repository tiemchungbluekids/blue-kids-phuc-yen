import React from 'react';
import { Service } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Badge } from 'flowbite-react';
import { imageLoader } from '@/lib/imageLoader';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card>
      <div className="relative h-56"> {/* Container for image with fixed height */}
        <Image
        loader={imageLoader}
          src={service.imageUrl || '/images/default-service.jpg'}
          alt={service.name}
          fill // Fill the container
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {service.name}
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400 mb-3" dangerouslySetInnerHTML={{__html: service.description}} />
         
        <div className="flex flex-wrap gap-2 mb-3">
          {/* Hiển thị các thông tin bổ sung */}
          <Badge color={service.isRequired ? "failure" : "success"}>
            {service.isRequired ? "Bắt buộc" : "Tùy chọn"}
          </Badge>
          <Badge>
            {service.ageGroup}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {service.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </span>
          <Link href={`/dich-vu/${service.slug}`}>
            <Button gradientDuoTone="cyanToBlue">
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;