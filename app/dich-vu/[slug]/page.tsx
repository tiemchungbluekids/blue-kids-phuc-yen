// app/dich-vu/[slug]/page.tsx

import { getServiceBySlug } from '@/lib/wordpress/api'; // Giả sử bạn đã có hàm này
import { Service } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import { imageLoader } from '@/lib/imageLoader';
import FullHeadSEO from '@/components/FullHeadSEO';


export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const { slug: serviceSlug } = params;


    const service: Service | null = await getServiceBySlug(serviceSlug);

    if (!service) {
        return <div>Không tìm thấy dịch vụ.</div>; // Xử lý trường hợp không tìm thấy dịch vụ
    }

    return (
        <main className="container mx-auto py-16">
            <FullHeadSEO seo={service?.seo} />
            <h1 className="text-3xl font-bold mb-4 text-blue-kids-primary">{service.name}</h1>
            <Image
                loader={imageLoader}
                src={service.imageUrl || '/images/default-service.jpg'}
                alt={service.name}
                width={600}
                height={400}
                className="rounded-md mb-4"
            />

            <div dangerouslySetInnerHTML={{ __html: service.description }} />

            <h2 className="text-2xl font-semibold mt-8 mb-4">Lợi ích của dịch vụ</h2>
            <ul className="list-disc pl-6 mb-8">
                {service.benefits && service.benefits.map((benefit: string, index : number) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>

            <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                    <p className="text-lg font-semibold mb-2">
                        Giá: {service.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </p>
                    <p className="text-gray-500">
                        Nhóm tuổi: {service.ageGroup}
                    </p>
                </div>
                <Link href="/dat-lich">
                    <Button>Đặt lịch ngay</Button>
                </Link>
            </div>
        </main>
    );
}