'use client';

import * as React from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';

import { ChevronDown } from 'lucide-react';
import { cn } from '@/libs/util';
import { inovations } from '@/libs/constant';

interface DisclosureInovasiProps {
	//
}

const DisclosureInovasi: React.FC<DisclosureInovasiProps> = ({ ...props }) => {
	return (
		<ul className='grid gap-6'>
			{inovations.map((inovation, index) => (
				<li key={inovation.title}>
					<Disclosure>
						{({ open }) => (
							<>
								<DisclosureButton
									className={cn(
										'w-full text-start px-6 py-2 bg-white rounded-full border border-zinc-200',
										open && 'bg-primary text-white'
									)}>
									<div className='flex items-center justify-between'>
										<span className='w-4/5 line-clamp-1'>{inovation.title}</span>
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
									enterFrom='opacity-0 -translate-y-3'
									enterTo='opacity-100 translate-y-0'
									leave='duration-200 ease-out'
									leaveFrom='opacity-100 translate-y-0'
									leaveTo='opacity-0 -translate-y-3'>
									<DisclosurePanel>
										<p className='px-6 py-2'>{inovation.description}</p>
									</DisclosurePanel>
								</Transition>
							</>
						)}
					</Disclosure>
				</li>
			))}
		</ul>
	);
};

export default DisclosureInovasi;
