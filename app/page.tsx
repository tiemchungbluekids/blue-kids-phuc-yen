// app/page.tsx

import AboutSection from '@/components/AboutSection';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      {/* ... */}
    </div>
  );
}