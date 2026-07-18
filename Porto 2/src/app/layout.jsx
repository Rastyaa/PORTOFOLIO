import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/Cursor';

export const metadata = {
  title: 'Sattyatma — Full Stack Developer',
  description:
    'Full Stack Developer specialized in modern web applications, scalable backend systems, and immersive user experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="custom-cursor-active">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,700&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
