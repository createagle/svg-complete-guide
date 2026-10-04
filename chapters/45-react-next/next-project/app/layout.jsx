import './globals.css';

export const metadata = { title: '45-3 SVG in Next.js Server Components' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="demo">{children}</body>
    </html>
  );
}
