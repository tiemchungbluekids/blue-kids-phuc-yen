'use client';

export default function DatLichPage() {
  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4 text-blue-kids-primary">Đặt lịch tiêm chủng tại Blue Kids Phúc Yên</h1>
      <p className="text-lg mb-8">
        Vui lòng điền vào mẫu đơn đặt lịch bên dưới để chúng tôi có thể liên hệ với bạn và xác nhận lịch hẹn của bạn.
      </p>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Họ và tên:</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">Số điện thoại:</label>
          <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded-md p-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="date">Ngày tiêm chủng:</label>
          <input type="date" id="date" name="date" className="w-full border border-gray-300 rounded-md p-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="vaccine">Loại vắc-xin:</label>
          <select id="vaccine" name="vaccine" className="w-full border border-gray-300 rounded-md p-2">
            <option value="MMR">MMR</option>
            <option value="DPT">DPT</option>
            <option value="Hib">Hib</option>
            <option value="PCV">PCV</option>
            <option value="IPV">IPV</option>
            <option value="Varicella">Varicella</option>
            <option value="Hepatitis B">Hepatitis B</option>
            <option value="Rotavirus">Rotavirus</option>
            <option value="Meningococcal">Meningococcal</option>
            <option value="HPV">HPV</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="notes">Ghi chú:</label>
          <textarea id="notes" name="notes" className="w-full border border-gray-300 rounded-md p-2" rows={4}></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Gửi</button>
      </form>
      <p className="text-sm mt-4">
        Sau khi bạn gửi đơn đặt lịch, chúng tôi sẽ liên hệ với bạn để xác nhận và cung cấp thêm thông tin về lịch hẹn của bạn.
      </p>
      <p className="text-sm mt-4">
        Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua số điện thoại: 0867 806 062 hoặc email: tuvan@tiemchungbluekids.vn.
      </p>
      <p className="text-sm mt-4">
        Cảm ơn bạn đã chọn Trung tâm tiêm chủng Blue Kids Phúc Yên!
      </p>
    </main>
  );
}