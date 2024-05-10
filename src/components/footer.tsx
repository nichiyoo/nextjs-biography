import * as React from 'react';

import Link from 'next/link';
import { footer } from '@/libs/constant';

interface FooterProps {
	//
}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
	const year = new Date().getFullYear();

	return (
		<>
			<footer className='py-20 text-white bg-primary'>
				<div className='grid gap-8 text-center w-content md:grid-cols-2 lg:grid-cols-4 md:text-left'>
					<div className='md:col-span-2'>
						<h4 className='mb-2 text-2xl'>Siti Fatimah</h4>
						<p className='text-white/60'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi neque dolores, expedita
							harum voluptates reprehenderit tenetur! Quo, voluptatem repellat? Quas!
						</p>
					</div>

					{footer.map((nav) => (
						<div key={nav.name}>
							<h5 className='mb-2 text-lg'>{nav.name}</h5>
							<ul className='flex flex-col space-y-2'>
								{nav.links.map((link) => (
									<li key={link.name}>
										<Link href={link.href}>
											<span className='text-white/60 text-end'>{link.name}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</footer>

			<section className='py-4 bg-primary'>
				<div className='flex items-center justify-center'>
					<span className='text-sm text-white/60'>&copy; {year} Dra. Siti Fatimah</span>
				</div>
			</section>
		</>
	);
};

export default Footer;
