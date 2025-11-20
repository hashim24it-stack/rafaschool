import { Eye, Target, Lightbulb, Heart } from 'lucide-react';

export default function VisionPage() {
  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-12 text-white text-center">
        <div className="inline-block p-5 bg-white/20 backdrop-blur-sm rounded-full mb-6">
          <Eye size={56} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">رؤيتنا</h2>
        <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
          أن نكون مدرسة رائدة في تقديم تعليم متميز يُعد جيلاً مبدعاً ومتميزاً أخلاقياً وعلمياً
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border-r-4 border-emerald-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
              <Target size={32} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">رسالة المدرسة</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                نلتزم بتوفير بيئة تعليمية آمنة ومحفزة تنمي شخصية الطالب المتكاملة، وتطور مهاراته الأكاديمية والحياتية، وتغرس فيه القيم الإسلامية والوطنية الأصيلة.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border-r-4 border-teal-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-teal-100 rounded-lg flex-shrink-0">
              <Lightbulb size={32} className="text-teal-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-900 mb-3">أهدافنا</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>تطوير مهارات التفكير النقدي والإبداعي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>بناء شخصية متوازنة للطالب</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>تحقيق التميز الأكاديمي</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl shadow-lg p-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-cyan-600 rounded-lg">
            <Heart size={32} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold text-cyan-900">قيمنا الأساسية</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold text-emerald-700 mb-3 text-center">الإخلاص</h4>
            <p className="text-gray-600 text-center leading-relaxed">
              نخلص في عملنا لله ثم لأبنائنا الطلاب
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold text-teal-700 mb-3 text-center">التميز</h4>
            <p className="text-gray-600 text-center leading-relaxed">
              نسعى للتميز في جميع جوانب العملية التعليمية
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold text-cyan-700 mb-3 text-center">التعاون</h4>
            <p className="text-gray-600 text-center leading-relaxed">
              نؤمن بأهمية العمل الجماعي والتعاون
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold text-emerald-700 mb-3 text-center">الانتماء</h4>
            <p className="text-gray-600 text-center leading-relaxed">
              نعزز الانتماء للوطن والمجتمع
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
