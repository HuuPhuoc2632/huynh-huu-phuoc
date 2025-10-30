import { useState } from "react";
import sfa0 from "../assets/sfa.jpg";
import aff0 from "../assets/aff.jpg";
import loan0 from "../assets/loan.jpg";
import fnb0 from "../assets/fnb.jpg";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      name: "Ứng dụng đặt nước uống",
      desc: "Ứng dụng di động cho phép người dùng đặt nước uống trực tuyến theo hai hình thức: đơn cá nhân và đơn nhóm (group order). Người dùng có thể chọn món, chia sẻ mã nhóm để bạn bè cùng đặt, và thanh toán trực tiếp trên app. Dự án được mình thực hiện toàn bộ từ khâu thiết kế, xây dựng backend, frontend đến triển khai thực tế.",
      tech: "Flutter, GetX, Dio, Firebase Cloud Messaging, NestJS, VNPay",
      images: [fnb0, "/projects/coffee_1.png"],
    },
    {
      name: "Sales Force Automation",
      desc: "Phát triển và duy trì ứng dụng di động hỗ trợ đội ngũ bán hàng trong việc quản lý hoạt động hằng ngày như tạo đơn hàng, điểm danh khách hàng, theo dõi tồn kho và lập kế hoạch tuyến đường. Ứng dụng được đồng bộ dữ liệu theo thời gian thực với hệ thống backend để báo cáo và phân tích hiệu suất.",
      tech: "Flutter, Dart, GetX, Dio, SQLite, Google Maps Flutter, Unit Testing",
      images: [sfa0, "/projects/sfa_1.png"],
    },
    {
      name: "Affiliate E-Commerce App",
      desc: "Ứng dụng mua sắm đa nền tảng giúp người dùng duyệt và mua sản phẩm sữa thông qua liên kết tiếp thị liên kết (affiliate). Ứng dụng có các tính năng đăng nhập, danh mục sản phẩm, giỏ hàng, thanh toán an toàn và theo dõi đơn hàng.",
      tech: "Flutter, Dart, BLoC, Dio, Shared Preferences, Secure Storage, VNPay, Firebase Cloud Messaging",
      images: [aff0, "/projects/affiliate_1.png"],
    },
    {
      name: "Loan Profile Management App",
      desc: "Ứng dụng quản lý hồ sơ vay cho phép khách hàng xem thông tin khoản vay và nhân viên cập nhật trạng thái theo thời gian thực. Ứng dụng hỗ trợ lưu trữ ngoại tuyến và đồng bộ dữ liệu qua WebSocket, giúp đảm bảo tính nhất quán và bảo mật dữ liệu.",
      tech: "Flutter, Dart, Provider, Dio, Hive, SQLite, WebSocket",
      images: [loan0, "/projects/loan_1.png"],
    },
  ];

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        🚀 DỰ ÁN TIÊU BIỂU
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedProject(proj);
              setCurrentImage(0);
            }}
            className="cursor-pointer bg-[#1e293b]/70 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-40 bg-gradient-to-r from-indigo-500/40 to-purple-600/40 flex items-center justify-center">
              <img
                src={proj.images[0]}
                alt={proj.name}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-blue-300">{proj.name}</h3>
              <p className="text-sm text-slate-200 mt-2 line-clamp-3">
                {proj.desc}
              </p>
              <p className="text-xs text-slate-400 mt-3 font-mono">
                <strong className="text-cyan-400">Công nghệ:</strong>{" "}
                {proj.tech}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal chi tiết dự án */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative animate-fadeIn text-slate-100">
            {/* Nút đóng */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-slate-400 hover:text-slate-100 text-2xl"
            >
              ✕
            </button>

            {/* Tên dự án */}
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              {selectedProject.name}
            </h3>

            {/* Slider ảnh */}
            <div className="relative mb-4">
              <img
                src={selectedProject.images[currentImage]}
                alt={selectedProject.name}
                className="w-full h-72 object-contain rounded-lg border border-slate-700 shadow-inner"
              />
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-slate-800/70 hover:bg-blue-500 text-white rounded-full p-2 shadow-lg transition-all"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-slate-800/70 hover:bg-blue-500 text-white rounded-full p-2 shadow-lg transition-all"
              >
                ▶
              </button>
            </div>

            {/* Mô tả */}
            <p className="text-slate-200 text-sm mb-3 leading-relaxed">
              {selectedProject.desc}
            </p>
            <p className="text-sm text-cyan-400 font-mono">
              <strong>Công nghệ:</strong> {selectedProject.tech}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
