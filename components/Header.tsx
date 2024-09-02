import Link from "next/link";
import { Button, DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const Header = () => {
  return (
    <header className="bg-green-500 shadow-md dark:bg-gray-800">
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="/">
          <img
            src="/logo.png" // Đường dẫn đến logo của Blue Kids
            className="mr-3 h-6 sm:h-9"
            alt="Blue Kids Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Blue Kids
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <DarkThemeToggle />
          <Link href="/dat-lich"> {/* Thay đổi thành liên kết "Đặt lịch ngay" */}
            <Button>Đặt lịch ngay</Button>
          </Link>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Trang chủ
          </NavbarLink>
          <NavbarLink as={Link} href="/gioi-thieu">
            Giới thiệu
          </NavbarLink>
          <NavbarLink href="/dich-vu">Dịch vụ</NavbarLink>
          {/* <NavbarLink href="#">Pricing</NavbarLink> - Bỏ qua hoặc thay đổi */}
          <NavbarLink href="/lien-he">Liên hệ</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
};

export default Header;