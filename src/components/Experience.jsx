export default function Experience() {
  const experiences = [
    {
      title: "ITBee Solutions (Mobile Developer)",
      period: "02/2024 - nay",
      desc: "Xây dựng và phát triển các ứng dụng di động đa nền tảng bằng Flutter, phát hành ứng dụng lên Google Play Store và App Store. Đảm bảo sản phẩm hoạt động ổn định, tối ưu hiệu năng và đáp ứng yêu cầu kỹ thuật của doanh nghiệp.",
      tech: "Flutter, GetX, Sqflite, Google API, Firebase, SQL Server",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        📋 KINH NGHIỆM LÀM VIỆC
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-[#1e293b]/70 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg p-5 hover:shadow-blue-800/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full mt-2 shadow-md shadow-green-600/50"></div>

              <div className="flex-1">
                <h3 className="font-bold text-lg text-blue-300">{exp.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{exp.period}</p>

                <p className="text-slate-200 mt-2 leading-relaxed">
                  {exp.desc}
                </p>

                {exp.tech && (
                  <p className="text-xs text-slate-300 mt-3 font-mono">
                    <strong className="text-cyan-400">Công nghệ:</strong>{" "}
                    {exp.tech}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
