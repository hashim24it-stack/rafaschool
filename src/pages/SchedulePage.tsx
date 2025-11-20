import { Calendar, Clock } from 'lucide-react';

export default function SchedulePage() {
  const scheduleData = {
    '5': [
      { period: 'الأولى', time: '7:30 - 8:15', subject: 'اللغة العربية' },
      { period: 'الثانية', time: '8:15 - 9:00', subject: 'الرياضيات' },
      { period: 'الثالثة', time: '9:00 - 9:45', subject: 'العلوم' },
      { period: 'الاستراحة', time: '9:45 - 10:00', subject: 'استراحة' },
      { period: 'الرابعة', time: '10:00 - 10:45', subject: 'التربية الإسلامية' },
      { period: 'الخامسة', time: '10:45 - 11:30', subject: 'اللغة الإنجليزية' },
      { period: 'السادسة', time: '11:30 - 12:15', subject: 'التربية الرياضية' },
    ],
    '6': [
      { period: 'الأولى', time: '7:30 - 8:15', subject: 'الرياضيات' },
      { period: 'الثانية', time: '8:15 - 9:00', subject: 'اللغة العربية' },
      { period: 'الثالثة', time: '9:00 - 9:45', subject: 'الدراسات الاجتماعية' },
      { period: 'الاستراحة', time: '9:45 - 10:00', subject: 'استراحة' },
      { period: 'الرابعة', time: '10:00 - 10:45', subject: 'العلوم' },
      { period: 'الخامسة', time: '10:45 - 11:30', subject: 'اللغة الإنجليزية' },
      { period: 'السادسة', time: '11:30 - 12:15', subject: 'التربية الفنية' },
    ],
    '7': [
      { period: 'الأولى', time: '7:30 - 8:15', subject: 'اللغة الإنجليزية' },
      { period: 'الثانية', time: '8:15 - 9:00', subject: 'الرياضيات' },
      { period: 'الثالثة', time: '9:00 - 9:45', subject: 'اللغة العربية' },
      { period: 'الاستراحة', time: '9:45 - 10:00', subject: 'استراحة' },
      { period: 'الرابعة', time: '10:00 - 10:45', subject: 'العلوم' },
      { period: 'الخامسة', time: '10:45 - 11:30', subject: 'الدراسات الاجتماعية' },
      { period: 'السادسة', time: '11:30 - 12:15', subject: 'الحاسوب' },
    ],
    '8': [
      { period: 'الأولى', time: '7:30 - 8:15', subject: 'العلوم' },
      { period: 'الثانية', time: '8:15 - 9:00', subject: 'اللغة العربية' },
      { period: 'الثالثة', time: '9:00 - 9:45', subject: 'الرياضيات' },
      { period: 'الاستراحة', time: '9:45 - 10:00', subject: 'استراحة' },
      { period: 'الرابعة', time: '10:00 - 10:45', subject: 'اللغة الإنجليزية' },
      { period: 'الخامسة', time: '10:45 - 11:30', subject: 'الدراسات الاجتماعية' },
      { period: 'السادسة', time: '11:30 - 12:15', subject: 'التربية الإسلامية' },
    ],
    '9': [
      { period: 'الأولى', time: '7:30 - 8:15', subject: 'الرياضيات' },
      { period: 'الثانية', time: '8:15 - 9:00', subject: 'اللغة الإنجليزية' },
      { period: 'الثالثة', time: '9:00 - 9:45', subject: 'اللغة العربية' },
      { period: 'الاستراحة', time: '9:45 - 10:00', subject: 'استراحة' },
      { period: 'الرابعة', time: '10:00 - 10:45', subject: 'العلوم' },
      { period: 'الخامسة', time: '10:45 - 11:30', subject: 'الدراسات الاجتماعية' },
      { period: 'السادسة', time: '11:30 - 12:15', subject: 'الحاسوب' },
    ],
  };

  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-10 text-white text-center">
        <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
          <Calendar size={48} />
        </div>
        <h2 className="text-4xl font-bold mb-3">الجدول المدرسي</h2>
        <p className="text-xl text-emerald-50">جداول الحصص لجميع الصفوف الدراسية</p>
      </section>

      {Object.entries(scheduleData).map(([grade, schedule]) => (
        <section key={grade} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
            <h3 className="text-2xl font-bold text-white text-center">
              الصف {grade === '5' ? 'الخامس' : grade === '6' ? 'السادس' : grade === '7' ? 'السابع' : grade === '8' ? 'الثامن' : 'التاسع'}
            </h3>
          </div>

          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-emerald-200">
                    <th className="text-right py-4 px-6 text-emerald-900 font-bold text-lg">الحصة</th>
                    <th className="text-right py-4 px-6 text-emerald-900 font-bold text-lg">
                      <div className="flex items-center gap-2">
                        <Clock size={20} />
                        <span>الوقت</span>
                      </div>
                    </th>
                    <th className="text-right py-4 px-6 text-emerald-900 font-bold text-lg">المادة</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr
                      key={index}
                      className={`
                        border-b border-gray-100 hover:bg-emerald-50 transition-colors
                        ${item.subject === 'استراحة' ? 'bg-amber-50' : ''}
                      `}
                    >
                      <td className="py-4 px-6 text-gray-800 font-semibold">{item.period}</td>
                      <td className="py-4 px-6 text-gray-600">{item.time}</td>
                      <td className="py-4 px-6">
                        <span
                          className={`
                            inline-block px-4 py-2 rounded-lg font-semibold
                            ${item.subject === 'استراحة'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                            }
                          `}
                        >
                          {item.subject}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
