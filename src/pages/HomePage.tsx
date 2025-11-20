import { BookOpen, Users, Target, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="relative bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-40"></div>

        <div className="relative px-8 py-16 text-center">
          <div className="inline-block p-4 bg-emerald-600 rounded-full mb-6 shadow-lg">
            <BookOpen size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            مرحباً بكم في مدرسة رافع بن مالك
          </h2>
          <p className="text-xl md:text-2xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            نسعى لتقديم تعليم متميز يبني شخصية الطالب ويطور مهاراته ليكون عضواً فاعلاً في مجتمعه
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-emerald-500">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-emerald-100 rounded-full">
              <Target size={40} className="text-emerald-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-emerald-900 mb-4">
            رسالتنا
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            توفير بيئة تعليمية محفزة تنمي الإبداع والتفكير النقدي لدى طلابنا
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-teal-500">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-teal-100 rounded-full">
              <Users size={40} className="text-teal-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-teal-900 mb-4">
            قيمنا
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            الاحترام المتبادل، التعاون، والنزاهة هي أساس مجتمعنا التعليمي
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-cyan-500">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-cyan-100 rounded-full">
              <Sparkles size={40} className="text-cyan-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-cyan-900 mb-4">
            إنجازاتنا
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            نفخر بتميز طلابنا وحصولهم على مراكز متقدمة في المسابقات التعليمية
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-12 text-white">
        <h3 className="text-3xl font-bold text-center mb-8">المراحل الدراسية</h3>
        <div className="grid md:grid-cols-5 gap-6">
          {[5, 6, 7, 8, 9].map((grade) => (
            <div
              key={grade}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl font-bold mb-2">{grade}</div>
              <div className="text-lg">الصف {grade === 5 ? 'الخامس' : grade === 6 ? 'السادس' : grade === 7 ? 'السابع' : grade === 8 ? 'الثامن' : 'التاسع'}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
