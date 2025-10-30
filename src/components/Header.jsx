import profilePic from '../assets/profile.jpg';

export default function Header() {
  return (
    <header className="bg-[#1e293b]/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-slate-700">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={profilePic}
          alt="Huỳnh Hữu Phước"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />

        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-50">HUỲNH HỮU PHƯỚC</h1>
          <p className="text-xl text-blue-400 font-medium mt-1">Flutter Developer</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-green-400">📞</span>
              <span>0348 307 336</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">✉️</span>
              <a
                href="mailto:huuphuoc.2632@gmail.com"
                className="text-cyan-300 hover:text-cyan-400 hover:underline transition-colors"
              >
                huuphuoc.2632@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-rose-400">📍</span>
              <span>Gò Vấp, TP. Hồ Chí Minh</span>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-blue-300">🎯 MỤC TIÊU NGHỀ NGHIỆP</h3>
            <p className="text-sm text-slate-200 leading-relaxed mt-2">
              <strong className="text-blue-400">Mục tiêu ngắn hạn</strong><br />
              Tôi tập trung nâng cao chuyên môn về Flutter và Dart thông qua việc tham gia các dự án di động thực tế.
              Mục tiêu trước mắt là củng cố kỹ năng về quản lý trạng thái, tích hợp API, và tối ưu hiệu năng ứng dụng.
              Tôi cũng mong muốn được học hỏi kinh nghiệm từ các kỹ sư giỏi và đóng góp hiệu quả vào thành công chung của đội nhóm.
              <br /><br />
              <strong className="text-blue-400">Mục tiêu dài hạn</strong><br />
              Tôi hướng đến việc phát triển sự nghiệp để trở thành một Project Manager trong lĩnh vực phát triển ứng dụng di động.
              Tôi mong muốn không chỉ giỏi về kỹ thuật mà còn hiểu sâu về quy trình quản lý dự án, phối hợp đội nhóm, và ra quyết định chiến lược.
              Mục tiêu của tôi là dẫn dắt các dự án công nghệ mang lại giá trị thực tế cho người dùng và góp phần thúc đẩy sự phát triển của doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
