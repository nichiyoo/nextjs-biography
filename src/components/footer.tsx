import * as React from 'react';

import Link from 'next/link';
import { navigations } from '@/libs/constant';

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
							Dra. Hj. Siti Fatimah adalah ASN berdedikasi di bidang pelayanan publik dan pengembangan
							masyarakat.
						</p>
					</div>

					{navigations.map((navigation) => (
						<div key={navigation.name}>
							<h5 className='mb-2 text-lg'>{navigation.name}</h5>
							<ul className='flex flex-col space-y-2'>
								{navigation.menus.map((menu) => (
									<li key={menu.name}>
										<Link href={menu.href}>
											<span className='text-white/60 text-end'>{menu.name}</span>
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
