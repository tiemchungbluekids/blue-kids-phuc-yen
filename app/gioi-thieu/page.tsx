// app/gioi-thieu/page.tsx

import { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import { getAboutPage } from '@/lib/wordpress/api';
import { Page } from '@/types/types';

export const metadata: Metadata = {
  title: 'Giới thiệu - Blue Kids Phúc Yên',
  description: 'Tìm hiểu thêm về trung tâm tiêm chủng Blue Kids Phúc Yên, sứ mệnh, tầm nhìn và đội ngũ của chúng tôi.',
};

export default async function AboutPage() {
  

  return (
    <main className='contener'>
      <AboutSection />
    </main>
  );
}