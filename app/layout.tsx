import './globals.css';

export const metadata = {
  title: 'Chinburen AI Office',
  description: 'AI Office Dashboard'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="mn"><body>{children}</body></html>;
}
