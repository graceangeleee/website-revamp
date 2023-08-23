import './globals.css';
import { Inter, Yeseva_One } from 'next/font/google';

export const metadata = {
  title: 'UPLB COSS',
  description: 'UPLB COSS Official Website',
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className='bg-home bg-cover bg-no-repeat'>{children}</body>
    </html>
  );
}
