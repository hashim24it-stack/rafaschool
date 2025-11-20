import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-10 text-white text-center">
        <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
          <Mail size={48} />
        </div>
        <h2 className="text-4xl font-bold mb-3">التواصل مع المدرسة</h2>
        <p className="text-xl text-emerald-50">نسعد بتواصلكم واستفساراتكم</p>
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                  <Phone size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">الهاتف</h4>
                  <p className="text-gray-700" dir="ltr">+968 24123456</p>
                  <p className="text-gray-700" dir="ltr">+968 24123457</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 rounded-lg flex-shrink-0">
                  <Mail size={24} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">البريد الإلكتروني</h4>
                  <p className="text-gray-700" dir="ltr">info@rafemalekschool.edu.om</p>
                  <p className="text-gray-700" dir="ltr">admin@rafemalekschool.edu.om</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-100 rounded-lg flex-shrink-0">
                  <MapPin size={24} className="text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">العنوان</h4>
                  <p className="text-gray-700">سلطنة عمان</p>
                  <p className="text-gray-700">محافظة مسقط</p>
                  <p className="text-gray-700">ولاية السيب</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                  <Clock size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">أوقات العمل</h4>
                  <p className="text-gray-700">الأحد - الخميس: 7:30 ص - 2:00 م</p>
                  <p className="text-gray-700">الجمعة والسبت: عطلة</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">مواعيد الزيارة</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              يمكن لأولياء الأمور زيارة المدرسة خلال ساعات الدوام الرسمي. يُفضل التنسيق المسبق للزيارات.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              للحالات الطارئة، يرجى التواصل مع إدارة المدرسة مباشرة.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <Send size={24} className="text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">إرسال رسالة</h3>
          </div>

          {submitSuccess && (
            <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-semibold text-center">
                تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                الاسم الكامل <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                البريد الإلكتروني <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                رقم الهاتف <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                الموضوع <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                required
              >
                <option value="">اختر الموضوع</option>
                <option value="inquiry">استفسار عام</option>
                <option value="registration">التسجيل</option>
                <option value="academic">أمور أكاديمية</option>
                <option value="complaint">شكوى</option>
                <option value="suggestion">اقتراح</option>
                <option value="other">أخرى</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                الرسالة <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
