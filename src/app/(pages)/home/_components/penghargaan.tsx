'use client';

import * as React from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';

import { ChevronDown } from 'lucide-react';
import { awards } from '@/libs/constant';
import { cn } from '@/libs/util';

interface ComponentProps {
	className?: string;
}

const Penghargaan: React.FC<ComponentProps> = ({ className, ...props }) => {
	return (
		<div>
			<div className='mb-8'>
				<span className='section text-primary'>Penghargaan</span>
				<h3 className=' text-2xl'>Daftar Penghargaan</h3>
			</div>

			<ul className={cn('flex flex-col space-y-6', className)}>
				{awards.map((award) => (
					<li key={award.title}>
						<Disclosure>
							{({ open }) => (
								<>
									<DisclosureButton className='w-full text-start'>
										<div className='flex items-start justify-between'>
											<span className='w-4/5'>{award.title}</span>

											<ChevronDown
												size={20}
												className={cn(
													'text-secondary',
													'transition-transform duration-200 ease-in-out',
													open ? 'rotate-180' : 'rotate-0'
												)}
											/>
										</div>
									</DisclosureButton>

									<Transition
										enter='duration-200 ease-out'
										enterFrom='opacity-0 -translate-y-6'
										enterTo='opacity-100 translate-y-0'
										leave='duration-200 ease-out'
										leaveFrom='opacity-100 translate-y-0'
										leaveTo='opacity-0 -translate-y-6'>
										<DisclosurePanel>
											<p className='py-2'>{award.description}</p>
										</DisclosurePanel>
									</Transition>
								</>
							)}
						</Disclosure>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Penghargaan;
