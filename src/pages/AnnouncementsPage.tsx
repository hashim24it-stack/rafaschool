import { Megaphone, Calendar, Bell } from 'lucide-react';

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: 'بدء التسجيل للفصل الدراسي الجديد',
      date: '2024-01-15',
      content: 'يسر إدارة المدرسة أن تعلن عن بدء التسجيل للفصل الدراسي الجديد. يرجى من أولياء الأمور مراجعة المدرسة لاستكمال إجراءات التسجيل.',
      type: 'important',
    },
    {
      id: 2,
      title: 'موعد الاختبارات النهائية',
      date: '2024-01-10',
      content: 'تبدأ الاختبارات النهائية للفصل الدراسي الأول يوم الأحد الموافق 20 يناير 2024. نتمنى لجميع الطلاب التوفيق والنجاح.',
      type: 'urgent',
    },
    {
      id: 3,
      title: 'اجتماع أولياء الأمور',
      date: '2024-01-08',
      content: 'يُعقد الاجتماع الدوري لأولياء الأمور يوم الأربعاء القادم في تمام الساعة 10 صباحاً في قاعة المدرسة. حضوركم مهم.',
      type: 'normal',
    },
    {
      id: 4,
      title: 'مسابقة القرآن الكريم',
      date: '2024-01-05',
      content: 'تُقام مسابقة حفظ القرآن الكريم السنوية يوم الخميس القادم. ندعو جميع الطلاب المشاركين للاستعداد الجيد.',
      type: 'normal',
    },
    {
      id: 5,
      title: 'يوم رياضي مفتوح',
      date: '2024-01-03',
      content: 'تنظم المدرسة يوماً رياضياً مفتوحاً يوم السبت القادم. سيتم تنفيذ فعاليات رياضية متنوعة لجميع الصفوف.',
      type: 'normal',
    },
  ];

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'bg-red-100 border-red-500 text-red-900';
      case 'important':
        return 'bg-amber-100 border-amber-500 text-amber-900';
      default:
        return 'bg-emerald-100 border-emerald-500 text-emerald-900';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'عاجل';
      case 'important':
        return 'مهم';
      default:
        return 'إعلان';
    }
  };

  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-10 text-white text-center">
        <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
          <Megaphone size={48} />
        </div>
        <h2 className="text-4xl font-bold mb-3">الإعلانات المدرسية</h2>
        <p className="text-xl text-emerald-50">آخر الأخبار والإعلانات الهامة</p>
      </section>

      <div className="grid gap-6">
        {announcements.map((announcement) => (
          <article
            key={announcement.id}
            className={`
              bg-white rounded-xl shadow-lg overflow-hidden border-r-4
              hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1
              ${announcement.type === 'urgent' ? 'border-red-500' : announcement.type === 'important' ? 'border-amber-500' : 'border-emerald-500'}
            `}
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`
                        px-3 py-1 rounded-full text-sm font-bold
                        ${getTypeStyle(announcement.type)}
                      `}
                    >
                      {getTypeLabel(announcement.type)}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {announcement.content}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Bell size={24} className="text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-emerald-900 mb-4 text-center">
          للحصول على آخر التحديثات
        </h3>
        <p className="text-gray-700 text-lg text-center leading-relaxed">
          تابعوا صفحة الإعلانات بشكل دوري للبقاء على اطلاع بكل جديد في المدرسة
        </p>
      </section>
    </div>
  );
}
