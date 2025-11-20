export default function Header(){
  return (
    <header className="bg-brandBlue text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="font-bold text-xl">جمعية النور الخيرية</h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:opacity-75">من نحن</a>
          <a href="#wells" className="hover:opacity-75">حفر الآبار</a>
          <a href="#orphans" className="hover:opacity-75">كفالة الأيتام</a>
          <a href="#quran" className="hover:opacity-75">تحفيظ القرآن</a>
          <a href="#contact" className="hover:opacity-75">اتصل بنا</a>
        </nav>
      </div>
    </header>
  );
}
