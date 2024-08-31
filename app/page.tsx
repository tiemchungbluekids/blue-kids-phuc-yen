// app/page.tsx

import Banner from '../components/Banner';

export default function Home() {
  return (
    <div>
      <Banner 
        title="Chào mừng đến với Blue Kids"
        slogan="Trung tâm tiêm chủng uy tín hàng đầu"
        buttonText="Tìm hiểu thêm"
        buttonLink="/gioi-thieu"
        imageUrl="/images/banner-moi.jpg" 
      />
      {/* ... */}
    </div>
  );
}