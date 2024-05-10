import './globals.css';

import { Fraunces, Rubik } from 'next/font/google';

import type { Metadata } from 'next';
import { cn } from '@/libs/util';

const fraunces = Fraunces({
	subsets: ['latin'],
	variable: '--font-fraunces',
});

const rubik = Rubik({
	subsets: ['latin'],
	variable: '--font-rubik',
});

export const metadata: Metadata = {
	title: 'Dra. Siti Fatimah',
	description:
		'Dra. Siti Fatimah adalah pemimpin berdedikasi di bidang pelayanan publik dan pengembangan masyarakat.',
	openGraph: {
		title: 'Dra. Siti Fatimah',
		description:
			'Dra. Siti Fatimah adalah pemimpin berdedikasi di bidang pelayanan publik dan pengembangan masyarakat.',
		images: '/opengraph-image.png',
	},
	metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
	alternates: {
		canonical: '/',
	},
	twitter: {
		images: '/twitter-image.png',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Dra. Siti Fatimah',
	jobTitle: 'Kepala Bidang Peternakan',
	image: 'https://siti-fatimah.com/images/dra-siti-fatimah.png',
	email: 'drasitifatimah@gmail.com',
	telephone: '+628123456789',
	location: {
		'@type': 'Place',
		name: 'Pasuruan',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={cn(rubik.variable, fraunces.variable)}>
			<body className='font-sans'>
				<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				{children}
			</body>
		</html>
	);
}
