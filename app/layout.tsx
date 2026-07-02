import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chinburen AI Office',
  description: 'Chief of Staff AI dashboard for Chinburen Office',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="mn"><body>{children}</body></html>;
}
