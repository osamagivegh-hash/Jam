import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home(){
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brandBlue to-blue-500 text-white py-32 text-center shadow-xl">
        <h1 className="text-5xl font-extrabold mb-4">نسعى لصناعة أثر يبقى</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          برامج خيرية مستدامة تشمل حفر الآبار، كفالة الأيتام، وتحفيظ القرآن، برسالة واضحة لخدمة المحتاجين حول العالم.
        </p>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">من نحن</h2>
        <p className="section-sub">
          جمعية رسمية تعمل على تنفيذ مشاريع إنسانية وتنموية في مختلف الدول المحتاجة عبر فرق ميدانية وشركاء تنفيذيين موثوقين.
        </p>
      </section>

      {/* Wells */}
      <section id="wells" className="section bg-white shadow-inner">
        <h2 className="section-title">حفر الآبار</h2>
        <p className="section-sub">
          تنفيذ مشاريع آبار سطحية وعميقة، تبدأ من فحص الموقع وحتى تشغيل البئر رسمياً.
        </p>
      </section>

      {/* Orphans */}
      <section id="orphans" className="section">
        <h2 className="section-title">كفالة الأيتام</h2>
        <p className="section-sub">
          رعاية شاملة تشمل السكن، التعليم، الصحة، والترفيه، لضمان مستقبل أفضل لليتم.
        </p>
      </section>

      {/* Quran */}
      <section id="quran" className="section bg-white shadow-inner">
        <h2 className="section-title">تحفيظ القرآن</h2>
        <p className="section-sub">
          دعم حلقات التحفيظ وتوفير المصاحف والمعلمين ومقار التحفيظ.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="section-title">اتصل بنا</h2>
        <p className="section-sub">البريد: info@example.com</p>
      </section>

      <Footer />
    </>
  );
}
