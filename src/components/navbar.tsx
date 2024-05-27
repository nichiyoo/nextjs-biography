'use client';

import * as React from 'react';

import Link from 'next/link';
import { cn } from '@/libs/util';
import { menus } from '@/libs/constant';
import { usePathname } from 'next/navigation';

interface NavbarProps {
	//
}

const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
	const pathname = usePathname();

	return (
		<nav>
			<div className='w-content flex items-center justify-between px-6 py-4'>
				<Link href='/'>
					<span className='text-primary font-bold font-serif text-2xl'>Siti Fatimah</span>
				</Link>

				<ul className='flex items-center space-x-6'>
					{menus.map((menu) => (
						<li key={menu.name}>
							<Link href={menu.href}>
								<span className={cn('hover:text-primary', pathname === menu.href && 'text-primary')}>
									{menu.name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
