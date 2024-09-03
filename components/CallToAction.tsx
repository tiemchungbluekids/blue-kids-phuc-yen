// components/CallToAction.tsx

import { Button } from 'flowbite-react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="bg-blue-kids-primary text-white p-8 rounded-lg text-center"> {/* Sử dụng màu xanh dương làm nền */}
      <h2 className="text-3xl font-bold mb-4">Đặt lịch tiêm chủng ngay hôm nay!</h2>
      <p className="mb-6">Bảo vệ con bạn khỏi các bệnh truyền nhiễm nguy hiểm.</p>
      <Link href="/dat-lich">
        <Button color="light">Đặt lịch</Button> {/* Nút màu sáng trên nền tối */}
      </Link>
    </div>
  );
};

export default CallToAction;