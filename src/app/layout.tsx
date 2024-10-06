import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './global.sass';

export const metadata: Metadata = {
	title: 'Тестовое задание | Made by @whoiskenshi',
	description: 'Монетизируйте клиентскую базу, не снижая NPS',
	authors: [{ name: 'Vahe Manukyan', url: 'https://t.me/whoiskenshi' }],
  icons: {
    icon: "/favicon/favicon.svg"
  }
};

const onest = Onest({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={`${onest.className}`}>{children}</body>
		</html>
	);
}
