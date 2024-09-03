// app/[slug]/page.tsx

// 'use client';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/wordpress/api';
import { Page } from '@/types/types';
import Image from 'next/image';
import { imageLoader } from '@/lib/imageLoader';
import FullHeadSEO from '@/components/FullHeadSEO';

export default async function PageBySlug({ params }: { params: { slug: string } }) {
  
  const pageSlug = params.slug; // Lấy slug từ params

  const pageData: Page | null = await getPageBySlug(pageSlug);

  if (!pageData) {
    notFound(); // Chuyển hướng đến trang 404 nếu data là null hoặc undefined
  }

  return (
    <main className="container mx-auto py-16">
      <FullHeadSEO seo={pageData.seo} /> 
      <h1 className="text-3xl font-bold mb-4 text-blue-kids-primary">{pageData.title}</h1>
      {pageData.featuredImage && (
        <div className="relative w-full h-[400px] mb-4 rounded-md overflow-hidden">
          <Image
            loader={imageLoader}
            src={pageData.featuredImage.node?.sourceUrl || "/logo.png"}
            alt={pageData.featuredImage.node?.altText || `Ảnh đại diện ${pageData.title}`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
    </main>
  );
}