'use client';

import * as React from 'react';

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

import Button from '@/components/button';
import Image from 'next/image';
import { services } from '@/libs/constant';

interface ServiceProps {}

const Service: React.FC<ServiceProps> = ({ ...props }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [image, setImage] = React.useState<string | null>(null);

	return (
		<>
			<div className='grid lg:grid-cols-2 gap-8'>
				{services.map((service, idx) => (
					<div key={service.name} className='flex flex-col space-y-4'>
						<h3 className='text-xl'>{service.name}</h3>
						<p>{service.description}</p>

						<div>
							<Button
								variant='primary'
								onClick={() => {
									setImage(service.image);
									setIsOpen(true);
								}}>
								Dokumentasi
							</Button>
						</div>
					</div>
				))}
			</div>

			<Transition appear show={isOpen}>
				<Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
					<div className='fixed inset-0 flex w-screen items-center justify-center p-10 bg-black/50 backdrop-blur-sm'>
						<TransitionChild
							enter='transition ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='transition ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'>
							<DialogPanel className='border border-zinc-200 bg-white p-2 rounded-xl'>
								<div className='rounded-lg overflow-hidden relative'>
									{image && (
										<Image
											src={image}
											alt='Dokumentasi'
											width={1920}
											height={1080}
											className='w-full h-full object-cover'
										/>
									)}

									<Button
										variant='ghost'
										className='absolute top-4 right-4'
										onClick={() => setIsOpen(false)}>
										<span className='text-sm'>Tutup</span>
									</Button>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
export default Service;
