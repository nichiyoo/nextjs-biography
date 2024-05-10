import * as React from 'react';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

interface LayoutProps extends React.PropsWithChildren {
	//
}

export default async function Layout({ children }: LayoutProps): Promise<React.JSX.Element> {
	return (
		<div className='font-sans antialiased leading-relaxed bg-white text-zinc-800'>
			<Navbar />
			<div className='min-h-screen'>{children}</div>
			<Footer />
		</div>
	);
}
