// app/lien-he/page.tsx

import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Liên hệ - Trung tâm Tiêm chủng Blue Kids Phúc Yên',
    description: 'Liên hệ với chúng tôi để được tư vấn và hỗ trợ về các dịch vụ tiêm chủng và chăm sóc sức khỏe cho trẻ. Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.',
};

export default function ContactPage() {
    return (
        <main className="container mx-auto py-16">
            <h1 className="text-3xl font-bold mb-4 text-blue-kids-primary dark:text-white">Liên hệ với Blue Kids Phúc Yên</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-white">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-kids-primary">Thông tin liên hệ</h2>
                    <p className="mb-2">
                        <span className="font-bold">Địa chỉ:</span> 407 Đ. Hai Bà Trưng, Tiền Châu, Phúc Yên, Vĩnh Phúc, Việt Nam
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Điện thoại:</span> 0867 806 062
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Email:</span> tuvan@tiemchungbluekids.vn
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Giờ làm việc:</span> 7:30 - 17:30 hàng ngày
                    </p>
                    <MapEmbed
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14876.064828748727!2d105.6993959!3d21.2312059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134fd579430887b%3A0xc6b58a3e53a01dde!2zVGnDqm0gY2jhu6duZyBCbHVlIEtpZHMgUGjDumMgWcOqbg!5e0!3m2!1svi!2s!4v1725152892351!5m2!1svi!2s"
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-kids-primary">Gửi tin nhắn cho chúng tôi</h2>
                    <ContactForm />
                    <p className="mt-4 text-green-500">{/* Hiển thị thông báo thành công sau khi gửi form */}</p>
                </div>
            </div>

            <p className="mt-8 dark:text-white">Cảm ơn bạn đã liên hệ với Blue Kids Phúc Yên. Chúng tôi sẽ phản hồi sớm nhất có thể!</p>
        </main>
    );
}