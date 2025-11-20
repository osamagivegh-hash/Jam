import './globals.css';

export const metadata = {
  title: "جمعية خيرية",
  description: "منظمة خيرية رسمية",
};

export default function RootLayout({children}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-brandGray">{children}</body>
    </html>
  );
}
