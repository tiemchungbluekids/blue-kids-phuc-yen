// app/dich-vu/page.tsx

import { Metadata } from 'next';
import { getServices } from '@/lib/wordpress/api';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { Button } from 'flowbite-react';

export const metadata: Metadata = {
  title: 'Dịch vụ - Blue Kids Phúc Yên',
  description: 'Danh sách các dịch vụ tiêm chủng và chăm sóc sức khỏe cho trẻ em tại Blue Kids Phúc Yên.',
};

export default async function ServicesPage() {
  const services = await getServices(); 

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4 text-blue-kids-primary">Các dịch vụ tiêm chủng và chăm sóc sức khỏe tại Blue Kids Phúc Yên</h1>
      <p className="text-lg mb-8">
        Tại Blue Kids, chúng tôi mang đến cho con bạn sự chăm sóc toàn diện với các dịch vụ tiêm chủng đa dạng, đảm bảo an toàn và hiệu quả.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Hãy bảo vệ con bạn ngay hôm nay!</h2>
        <Link href="/dat-lich">
          <Button>Đặt lịch tiêm chủng</Button>
        </Link>
      </div>
    </main>
  );
}