import {} from '@/libs/constant';

import * as React from 'react';

import { members, principles, services } from '@/libs/constant';

import Service from './_components/service';
import { cn } from '@/libs/util';

interface PageProps {
	//
}

export default async function Page({ ...props }: PageProps): Promise<React.JSX.Element> {
	return (
		<>
			<section className='py-20 w-content'>
				<span className='section text-primary'>Tim</span>
				<h1 className='mb-4 text-5xl'>Tim ASN BerAKHLAK</h1>
				<p>
					ASN BerAKHLAK adalah tim yang berorientasi pelayanan, akuntabel, kompeten, harmonis, loyal, adaptif,
					dan kolaboratif.
				</p>

				<div className='w-full aspect-[16/9] overflow-hidden rounded-xl border border-zinc-200 mt-8'>
					<iframe
						src='https://drive.google.com/file/d/1IG9cFzGiGwWyJZhCDLqgfQKEl4yKf2no/preview'
						width='100%'
						height='100%'
						title='video dokumentasi'
						className='w-full h-full object-cover'
						loading='lazy'
					/>
				</div>
			</section>

			<section className='py-20 bg-primary '>
				<div className='w-content'>
					<div className='mb-8'>
						<h2 className='mb-4 text-3xl text-white'>Tim Budaya Kerja BerAKHLAK</h2>
					</div>

					<div className='grid gap-8'>
						{members.map((member, idx) => (
							<div key={member.name} className='p-8 bg-white rounded-xl'>
								<div className='mb-4'>
									<h3 className='text-xl'>{member.name}</h3>
									<span className='text-primary'>{member.position}</span>
								</div>
								<p>{member.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='py-20 w-content'>
				<div className='mb-8'>
					<h2 className='mb-4 text-3xl'>Prinsip-prinsip implementasi BerAKHLAK di Bidang Peternakan</h2>
					<p>
						Berikut adalah prinsip-prinsip implementasi BerAKHLAK di Bidang Peternakan, yang diterapkan oleh
						Tim Budaya Kerja BerAKHLAK.
					</p>
				</div>

				<div className='relative'>
					<div className='grid'>
						{principles.map((principle, idx) => (
							<div className='relative pb-8' key={principle.name}>
								<div className='absolute top-0 left-4 lg:left-1/2 -translate-x-1/2 translate-y-1 w-5 h-5 bg-primary rounded-full' />

								{idx !== principles.length - 1 && (
									<div className='absolute top-0 left-4 lg:left-1/2 -translate-x-1/2 translate-y-1 h-full border-l border-primary border-dotted' />
								)}

								<div key={idx} className='grid lg:grid-cols-2'>
									<div className={cn('hidden lg:block', idx % 2 === 0 && 'lg:col-span-2')} />
									<div className={cn('text-start ps-16', idx % 2 === 0 && 'lg:text-end lg:pe-16')}>
										<h3 className='font-body text-primary'>{principle.name}</h3>
										<p>{principle.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='py-20 bg-zinc-50'>
				<div className='w-content'>
					<div className='mb-8'>
						<h2 className='mb-4 text-3xl'>Inovasi Pelayanan Tim Bidang Peternakan</h2>
					</div>

					<Service />
				</div>
			</section>
		</>
	);
}
