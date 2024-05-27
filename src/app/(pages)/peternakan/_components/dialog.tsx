'use client';

import * as React from 'react';

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

import Button from '@/components/button';
import Image from 'next/image';

interface ImageDialogProps {
	images: string[];
}

const ImageDialog: React.FC<ImageDialogProps> = ({ images, ...props }) => {
	const [index, setIndex] = React.useState<number | null>(null);
	const isOpen = React.useMemo(() => index !== null, [index]);

	return (
		<>
			<div className='grid lg:grid-cols-2 gap-8'>
				{images.map((image, idx) => (
					<div
						key={image}
						className='w-full aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200 cursor-pointer'
						onClick={() => setIndex(idx)}>
						<Image
							className='w-full h-full object-cover'
							src={`/images/dokumentasi/${image}`}
							alt={image}
							width={500}
							height={500}
						/>
					</div>
				))}
			</div>

			<Transition appear show={isOpen}>
				<Dialog open={isOpen} onClose={() => setIndex(null)} className='relative z-50'>
					<div className='fixed inset-0 flex w-screen items-center justify-center p-10 bg-black/50 backdrop-blur-sm'>
						<TransitionChild
							enter='transition ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='transition ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'>
							<DialogPanel className='w-full lg:h-full aspect-square border border-zinc-200 bg-white p-2 rounded-xl'>
								{index !== null && (
									<div className='w-full h-full rounded-lg overflow-hidden relative'>
										<Image
											src={`/images/dokumentasi/${images[index]}`}
											alt='Dokumentasi'
											width={1920}
											height={1080}
											className='w-full h-full object-cover'
										/>

										<Button
											variant='ghost'
											className='absolute top-4 right-4'
											onClick={() => setIndex(null)}>
											<span className='text-sm'>Tutup</span>
										</Button>

										<div className='absolute bottom-0 right-0 left-0 p-8'>
											<div className='flex items-center justify-center space-x-4'>
												<Button
													variant='ghost'
													className='mr-4'
													onClick={() =>
														setIndex(index - 1 >= 0 ? index - 1 : images.length - 1)
													}>
													<span className='text-sm'>Sebelumnya</span>
												</Button>

												<Button
													variant='ghost'
													className='ml-4'
													onClick={() => setIndex((index + 1) % images.length)}>
													<span className='text-sm'>Selanjutnya</span>
												</Button>
											</div>
										</div>
									</div>
								)}
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default ImageDialog;
