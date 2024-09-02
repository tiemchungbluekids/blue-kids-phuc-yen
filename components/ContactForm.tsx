'use client';
import { useState, useEffect, FormEvent } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        FNAME: '',
        EMAIL: '',
        PHONE: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = (email: string) => {
        // Biểu thức chính quy đơn giản để kiểm tra định dạng email cơ bản
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        if
            (event.target.name === 'EMAIL') {
            setIsValidEmail(validateEmail(event.target.value));
        }
    };

    const handleSubmit = async (event:
        FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isValidEmail) {
            setErrorMessage('Vui lòng nhập một địa chỉ email hợp lệ.');
            return; // Ngăn chặn gửi form nếu email không hợp lệ
        }

        setIsSuccess(false);
        setErrorMessage('');

        try {
            const response = await fetch("https://tiemchungbluekids.us8.list-manage.com/subscribe/post?u=90504fa1f9ee6d1b575d6025f&amp;id=3ce3391f2a&amp;f_id=00f5cfe1f0", {
                method: 'POST',
                body: new FormData(event.target as HTMLFormElement),
                mode: 'no-cors', // Thêm tùy chọn này để tắt CORS
            });

            setIsSuccess(true);
                setFormData({ FNAME: '', EMAIL: '', PHONE: '' });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ FNAME: '', EMAIL: '', PHONE: '' });
            } 
            // else {
            //     setErrorMessage('Có lỗi xảy ra khi gửi form. Vui lòng thử lại sau.');
            // }
        } catch (error) {
            console.error('Lỗi khi gửi form:', error);
            setErrorMessage('Có lỗi xảy ra khi gửi form. Vui lòng thử lại sau.');
        }
    };

    return (
        <form
            action="https://tiemchungbluekids.us8.list-manage.com/subscribe/post?u=90504fa1f9ee6d1b575d6025f&amp;id=3ce3391f2a&amp;f_id=00f5cfe1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="flex flex-col gap-4" // Sử dụng Tailwind CSS để tạo kiểu
            target="_blank"
            noValidate
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h2>

            <div>
                <div className="mb-2 block">
                    <Label htmlFor="mce-EMAIL" value="Địa chỉ Email *" />
                </div>
                <TextInput
                    id="mce-EMAIL"
                    type="email"
                    name="EMAIL"
                    placeholder="Nhập địa chỉ email của bạn"
                    required={true}
                    value={formData.EMAIL}
                    onChange={handleChange}
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label htmlFor="mce-FNAME" value="Họ và tên *" />
                </div>
                <TextInput
                    id="mce-FNAME"
                    type="text"
                    name="FNAME"
                    placeholder="Nhập họ và tên của bạn"
                    required={true}
                    value={formData.FNAME}
                    onChange={handleChange}
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label htmlFor="mce-PHONE" value="Số điện thoại" />
                </div>
                <TextInput
                    id="mce-PHONE"
                    type="tel"
                    name="PHONE"
                    placeholder="Nhập số điện thoại của bạn (tùy chọn)"
                    value={formData.PHONE}
                    onChange={handleChange}
                />
            </div>

            {/* Trường ẩn để tránh spam */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_90504fa1f9ee6d1b575d6025f_3ce3391f2a" tabIndex={-1} defaultValue="" />
            </div>

            <Button type="submit">Đăng ký</Button>

            {/* Hiển thị thông báo thành công hoặc lỗi */}
            {isSuccess && <p className="mt-4 text-green-500">Cảm ơn bạn đã đăng ký!</p>}
            {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
        </form>
    );
};

export default ContactForm;