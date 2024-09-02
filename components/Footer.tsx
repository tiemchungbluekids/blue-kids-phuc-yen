import { Footer } from "flowbite-react";
import { BsFacebook } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container={true} className="bg-gray-800 dark:bg-gray-900 text-white">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/" 
              src="/logo.png" // Thay thế bằng đường dẫn tới logo của Blue Kids
              alt="Blue Kids Logo"
              name="Blue Kids"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Về chúng tôi" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/gioi-thieu">
                  Giới thiệu
                </Footer.Link>
                <Footer.Link href="/dich-vu">
                  Dịch vụ
                </Footer.Link>
                <Footer.Link href="/lien-he">
                  Liên hệ
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Hỗ trợ" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/cau-hoi-thuong-gap">
                  Câu hỏi thường gặp
                </Footer.Link>
                <Footer.Link href="/chinh-sach-bao-mat">
                  Chính sách bảo mật
                </Footer.Link>
                <Footer.Link href="/dieu-khoan-su-dung">
                  Điều khoản sử dụng
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Theo dõi" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  Github
                </Footer.Link>
                <Footer.Link href="#">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div> */} {/* Bỏ qua phần này nếu không cần thiết */}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
         <div>
         <Footer.Copyright
            href="/"
            by="Blue Kids™"
            year={new Date().getFullYear()} 
            theme={{base: "Long Web Studio", href: "https://longwebstudio.net/", span: "Long Web Studio"}}
          /> Thiết kế bởi <a target="_blank" href="https://longwebstudio.net/">Long Web Studio</a>
         </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/TiemchungBLK"
              icon={BsFacebook}
            />
            
            {/* Thêm các biểu tượng mạng xã hội khác nếu cần */}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;