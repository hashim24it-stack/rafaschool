import { Award, Search, FileText } from 'lucide-react';
import { useState } from 'react';

export default function ResultsPage() {
  const [studentId, setStudentId] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const mockResults = {
    '12345': {
      name: 'أحمد محمد علي',
      grade: '7',
      semester: 'الأول',
      year: '2023-2024',
      subjects: [
        { name: 'اللغة العربية', mark: 95, total: 100, grade: 'ممتاز' },
        { name: 'الرياضيات', mark: 88, total: 100, grade: 'جيد جداً' },
        { name: 'العلوم', mark: 92, total: 100, grade: 'ممتاز' },
        { name: 'اللغة الإنجليزية', mark: 85, total: 100, grade: 'جيد جداً' },
        { name: 'الدراسات الاجتماعية', mark: 90, total: 100, grade: 'ممتاز' },
        { name: 'التربية الإسلامية', mark: 97, total: 100, grade: 'ممتاز' },
      ],
      average: 91.2,
      rank: 3,
      totalStudents: 45,
    },
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    setTimeout(() => {
      if (mockResults[studentId as keyof typeof mockResults]) {
        setSearchResult(mockResults[studentId as keyof typeof mockResults]);
      } else {
        setSearchResult('not_found');
      }
      setIsSearching(false);
    }, 1000);
  };

  const getGradeColor = (grade: string) => {
    if (grade === 'ممتاز') return 'text-green-700 bg-green-100';
    if (grade === 'جيد جداً') return 'text-blue-700 bg-blue-100';
    if (grade === 'جيد') return 'text-amber-700 bg-amber-100';
    return 'text-gray-700 bg-gray-100';
  };

  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-10 text-white text-center">
        <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
          <Award size={48} />
        </div>
        <h2 className="text-4xl font-bold mb-3">استخراج النتائج</h2>
        <p className="text-xl text-emerald-50">استعلم عن نتائج الطلاب</p>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <Search size={24} className="text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">البحث عن نتيجة طالب</h3>
          </div>

          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label htmlFor="studentId" className="block text-lg font-semibold text-gray-700 mb-3">
                الرقم الطلابي
              </label>
              <input
                type="text"
                id="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="أدخل الرقم الطلابي"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none text-lg"
                required
              />
              <p className="mt-2 text-sm text-gray-500">
                مثال: 12345
              </p>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSearching ? 'جاري البحث...' : 'استعلام عن النتيجة'}
            </button>
          </form>
        </div>
      </section>

      {searchResult && searchResult !== 'not_found' && (
        <section className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {searchResult.name}
                </h3>
                <p className="text-emerald-50">
                  الصف {searchResult.grade} - الفصل الدراسي {searchResult.semester} ({searchResult.year})
                </p>
              </div>
              <div className="text-center bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-white">{searchResult.average}%</div>
                <div className="text-sm text-emerald-50">المعدل العام</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-700 text-lg">الترتيب على الصف:</span>
                  <span className="font-bold text-2xl text-emerald-700 mr-2">
                    {searchResult.rank}
                  </span>
                  <span className="text-gray-600">من {searchResult.totalStudents}</span>
                </div>
                <div className="p-3 bg-emerald-600 rounded-lg">
                  <FileText size={24} className="text-white" />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-emerald-200">
                    <th className="text-right py-4 px-4 text-emerald-900 font-bold text-lg">المادة</th>
                    <th className="text-center py-4 px-4 text-emerald-900 font-bold text-lg">العلامة</th>
                    <th className="text-center py-4 px-4 text-emerald-900 font-bold text-lg">التقدير</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResult.subjects.map((subject: any, index: number) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-emerald-50 transition-colors"
                    >
                      <td className="py-4 px-4 text-gray-800 font-semibold text-lg">
                        {subject.name}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-2xl font-bold text-emerald-700">
                          {subject.mark}
                        </span>
                        <span className="text-gray-500 text-lg">/{subject.total}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-block px-4 py-2 rounded-lg font-bold ${getGradeColor(subject.grade)}`}
                        >
                          {subject.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {searchResult === 'not_found' && (
        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
          <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
            <FileText size={48} className="text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-red-900 mb-2">لم يتم العثور على نتيجة</h3>
          <p className="text-red-700 text-lg">
            الرقم الطلابي المدخل غير صحيح. يرجى التأكد من الرقم والمحاولة مرة أخرى.
          </p>
        </section>
      )}

      <section className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">
          ملاحظات هامة
        </h3>
        <ul className="space-y-3 text-gray-700 text-lg max-w-3xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold mt-1">•</span>
            <span>يمكن الحصول على الرقم الطلابي من إدارة المدرسة</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold mt-1">•</span>
            <span>النتائج متاحة فور انتهاء عملية التصحيح والمراجعة</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 font-bold mt-1">•</span>
            <span>في حالة وجود أي استفسار، يرجى التواصل مع إدارة المدرسة</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
