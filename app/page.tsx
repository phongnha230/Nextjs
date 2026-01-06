
export default function Home() {
  const skills = ['React', 'JavaScript', 'Next.js', 'Tailwind CSS'];
  
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-400 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-500">
                TĐ
              </span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">Trần Đỗ Phong Nhã</h1>
          <p className="text-xl text-cyan-400 font-semibold mb-2">IT Specialist</p>
          <p className="text-slate-300">Web Developer | Frontend Engineer</p>
        </div>

        {/* About Section */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Giới thiệu</h2>
          <p className="text-slate-300 leading-relaxed">
            Tôi là một lập trình viên web có kinh nghiệm với đam mê xây dựng các ứng dụng web hiện đại và hiệu quả. 
            Với nền tảng vững chắc về JavaScript và React, tôi có thể tạo ra những sản phẩm chất lượng cao.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Kỹ năng chuyên môn</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-linear-to-br from-blue-500 to-cyan-500 p-1 rounded-lg"
              >
                <div className="bg-slate-800 px-6 py-4 rounded-md text-center">
                  <p className="text-white font-semibold">{skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-slate-400">
          <p>© 2026 Trần Đỗ Phong Nhã. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
