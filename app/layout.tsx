import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',//The %s in the template will be replaced with the specific page title.
    default: 'Acme Dashboard',
  },
  description: 'My Next application with App Router ready to be deployed.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
