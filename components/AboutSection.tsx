import { getAboutPage } from '@/lib/wordpress/api';
import { Page } from '@/types/types'; // Import kiểu dữ liệu Page

const AboutSection: React.FC = async () => {
  const pageData: Page | null = await getAboutPage(); // Sử dụng kiểu dữ liệu Page

  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          {/* Kiểm tra pageData trước khi truy cập các thuộc tính */}
          {pageData && (
            <img
              src={pageData.featuredImage?.node?.sourceUrl || '/images/default-image.jpg'}
              alt={pageData.title || 'Giới thiệu về Blue Kids'}
              className="rounded-lg shadow-lg"
            />
          )}
        </div>
        <div className="md:w-1/2 md:pl-8">
          {/* Kiểm tra pageData trước khi truy cập các thuộc tính */}
          {pageData && (
            <>
              <h2 className="text-3xl font-bold mb-4">{pageData.title || 'Giới thiệu'}</h2>
              <div dangerouslySetInnerHTML={{ __html: pageData.content || '<p>Nội dung đang được cập nhật...</p>' }} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;