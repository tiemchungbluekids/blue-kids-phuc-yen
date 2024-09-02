// app/cau-hoi-thuong-gap/page.tsx

import { Metadata } from 'next';
import { Accordion } from 'flowbite-react';
// import { getFAQs } from '@/lib/wordpress/api'; 
// import { FAQ } from '@/types/types'; 

export const metadata: Metadata = {
  title: 'Câu hỏi thường gặp - Blue Kids Phúc Yên',
  description: 'Giải đáp các thắc mắc phổ biến về tiêm chủng và dịch vụ tại Blue Kids Phúc Yên.',
};

export default async function FAQPage() {
//   const faqs: FAQ[] = await getFAQs();

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">Câu hỏi thường gặp</h1>
      <p className="text-lg mb-8">
        Bạn có câu hỏi về tiêm chủng hoặc dịch vụ của chúng tôi? Hãy xem qua danh sách các câu hỏi thường gặp dưới đây. Nếu bạn không tìm thấy câu trả lời mình cần, vui lòng liên hệ với chúng tôi để được hỗ trợ.
      </p>

      {/* <Accordion>
        {faqs.map((faq) => (
          <Accordion.Item key={faq.id} title={faq.question}>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} /> 
          </Accordion.Item>
        ))}
      </Accordion> */}
    </main>
  );
}