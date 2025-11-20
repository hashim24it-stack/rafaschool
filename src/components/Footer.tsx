export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-2">مدرسة رافع بن مالك للتعليم الأساسي (5-9)</p>
        <p className="text-emerald-100 text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
