import * as React from 'react';

import Image from 'next/image';
import ImageDialog from './_components/dialog';
import { Star } from 'lucide-react';
import fs from 'fs';

interface PageProps {
	//
}

export default async function Page({ ...props }: PageProps): Promise<React.JSX.Element> {
	const images = await fs.promises.readdir('./public/images/dokumentasi');

	return (
		<>
			<section className='py-20 w-content'>
				<span className='section text-primary'>Peternakan</span>
				<h1 className='mb-4 text-5xl'>Bidang Peternakan </h1>
				<p>
					Dalam pelaksanaan tugas dan fungsinya, Bidang Peternakan dibagi menjadi 3 sub koordinator sebagai
					berikut
				</p>

				<ul className='list-disc list-inside py-8'>
					<li>
						Sub koordinator pengembangan budidaya ternak ruminansia yang terdiri dari 1 sub koordinator dan
						4 orang staff
					</li>
					<li>
						Sub koordinator pengembangan budidaya ternak non ruminansia yang terdiri dari 1 sub koordinator
						dan 2 orang staff
					</li>
					<li>
						Sub koordinator kesehatan hewan dan kesehatan masyarakat veteriner yang terdiri dari 1 sub
						koordinator dan 2 orang staff
					</li>
				</ul>

				<p className='mb-8'>
					Tim Bidang Peternakan BerAKHLAK dipandu oleh tiga subkoordinator yang masing-masing mengelola dua
					program utama yang dirancang dengan mengimplementasikan dan mendukung nilai-nilai BerAKHLAK dalam
					setiap aspek operasional peternakan. Program-program bersamaan
				</p>

				<div className='w-full max-w-[800px] mx-auto rounded-xl border border-zinc-200 overflow-hidden mb-8'>
					<Image
						className='w-full h-full'
						src='/images/peternakan.png'
						alt='Bidang Peternakan'
						width={500}
						height={500}
					/>
				</div>

				<p className='mb-8'>
					Dengan kerjasama seluruh tim, Bidang Peternakan telah berhasil memperoleh beberapa penghargaan
					bergengsi, antara lain:
				</p>

				<ul className='flex flex-col space-y-6'>
					<li className='flex items-start justify-between'>
						<span className='w-4/5'>
							Juara Favorit III Lomba Video/Film Pendek Pengendalian PMK tahun 2023
						</span>
						<Star size={20} className='text-secondary' />
					</li>
					<li className='flex items-start justify-between'>
						<span className='w-4/5'>Juara I Kota dengan Kinerja Pengendalian PMK Terbaik tahun 2023</span>
						<Star size={20} className='text-secondary' />
					</li>
					<li className='flex items-start justify-between'>
						<span className='w-4/5'>
							Peringkat III Kota dengan Predikat Zero Reported Case PMK tahun 2024
						</span>
						<Star size={20} className='text-secondary' />
					</li>
				</ul>
			</section>

			<section className='py-20  bg-zinc-50'>
				<div className='w-content'>
					<div className='mb-8'>
						<span className='section text-primary'>Peternakan</span>
						<h1 className='mb-4 text-3xl'>Dokumentasi</h1>
					</div>
					<ImageDialog images={images} />
				</div>
			</section>
		</>
	);
}
