export default function Skills() {
  const skills = [
    { name: "Flutter", icon: "../icons/flutter.png" },
    { name: "React Native", icon: "../icons/react-native.png" },
    { name: "Android (Java/Kotlin)", icon: "../icons/android_ic.png" },
    { name: "ReactJs", icon: "../icons/react-native.png" },
    { name: "NodeJs", icon: "../icons/nodejs_ic.png" },
    { name: "Spring Boot", icon: "../icons/spring-boot.png" },
    { name: "SQL Server", icon: "../icons/sql-server.png" },
    { name: "Postgres", icon: "../icons/postgres_ic.png" },
    { name: "MongoDB", icon: "../icons/mgdb_ic.png" },
    { name: "Postman", icon: "../icons/pm_ic.png" },
    { name: "Jira", icon: "../icons/jira.png" },
    { name: "Git", icon: "../icons/ic_git.png" },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        ⚙️ KỸ NĂNG
      </h2>

      <div className="bg-[#1e293b]/70 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-lg p-6">
        {/* Grid kỹ năng */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-slate-800/70 border border-slate-700 rounded-xl p-4 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mb-2 object-contain filter drop-shadow-[0_2px_4px_rgba(59,130,246,0.3)]"
              />
              <span className="text-sm font-medium text-slate-200 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Phần mô tả */}
        <div className="mt-6 text-sm text-slate-300 leading-relaxed">
          <p>
            <strong className="text-cyan-400">Ngôn ngữ:</strong> Dart, Javascript, Java, Kotlin
          </p>
          <p>
            <strong className="text-cyan-400">Frameworks:</strong> Flutter, React Native, ReactJs, NodeJs, Spring Boot
          </p>
          <p>
            <strong className="text-cyan-400">Công cụ:</strong> VS Code, Android Studio, Xcode, Git, Postman, Jira, Figma
          </p>
          <p>
            <strong className="text-cyan-400">Kỹ năng mềm:</strong> Làm việc nhóm, Giải quyết vấn đề, Quản lý thời gian
          </p>
        </div>
      </div>
    </section>
  );
}
