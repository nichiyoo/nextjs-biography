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
				<span className='section text-primary'>Bidang</span>
				<h1 className='mb-4 text-5xl'>Bidang Peternakan </h1>
				<p>
					Dalam pelaksanaan tugas dan fungsinya, Bidang Peternakan dibagi menjadi 3 sub koordinator sebagai
					berikut
				</p>

				<div className='flex flex-col space-y-8'>
					<ul className='list-disc list-inside'>
						<li>
							Sub koordinator pengembangan budidaya ternak ruminansia yang terdiri dari 1 sub koordinator
							dan 4 orang staff
						</li>
						<li>
							Sub koordinator pengembangan budidaya ternak non ruminansia yang terdiri dari 1 sub
							koordinator dan 2 orang staff
						</li>
						<li>
							Sub koordinator kesehatan hewan dan kesehatan masyarakat veteriner yang terdiri dari 1 sub
							koordinator dan 2 orang staff
						</li>
					</ul>

					<p>
						Tim Bidang Peternakan BerAKHLAK dipandu oleh tiga subkoordinator yang masing-masing mengelola
						dua program utama yang dirancang dengan mengimplementasikan dan mendukung nilai-nilai BerAKHLAK
						dalam setiap aspek operasional peternakan. Program-program bersamaan
					</p>

					<div className='w-full mx-auto rounded-xl border border-zinc-200 overflow-hidden'>
						<Image
							className='w-full h-full'
							src='/images/peternakan.png'
							alt='Bidang Peternakan'
							width={500}
							height={500}
						/>
					</div>

					<p>
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
							<span className='w-4/5'>
								Juara I Kota dengan Kinerja Pengendalian PMK Terbaik tahun 2023
							</span>
							<Star size={20} className='text-secondary' />
						</li>
						<li className='flex items-start justify-between'>
							<span className='w-4/5'>
								Peringkat III Kota dengan Predikat Zero Reported Case PMK tahun 2024
							</span>
							<Star size={20} className='text-secondary' />
						</li>
					</ul>
				</div>
			</section>

			<section className='py-20 bg-zinc-50'>
				<div className='w-content'>
					<div className='mb-8'>
						<h1 className='mb-4 text-3xl'>Invovasi</h1>
					</div>

					<div className='flex flex-col gap-8'>
						<p>
							Dalam upaya terus menerus meningkatkan kualitas pelayanan kepada masyarakat serta efisiensi
							organisasi, Bidang Peternakan Kota Pasuruan telah mengembangkan lima pelayanan yang
							signifikan. Pelayanan-pelayanan ini dirancang untuk mendukung dua program utama yang telah
							berdampak besar baik bagi organisasi maupun Masyarakat yang meliputi:
						</p>

						<ul className='list-decimal list-inside '>
							<li>Pemeriksaan Kesehatan hewan rutin</li>
							<li>Pemantauan izin praktik tenaga medik veteriner (SIP DRH)</li>
							<li>Pengawasan Idul Qurban</li>
							<li>Program Inseminasi Buatan</li>
							<li>Pembentukan Agen Pelopor</li>
						</ul>

						<p>Berikut adalah video dokumentasi salah satu pelayanan penanganan PMK di Kota Pasuruan:</p>

						<div className='w-full aspect-[16/9] overflow-hidden rounded-xl border border-zinc-200'>
							<iframe
								src='https://drive.google.com/file/d/10VGXcd0OqKe8Zqr2i1inJ8Bt0g8w9xaJ/preview'
								width='100%'
								height='100%'
								title='video dokumentasi'
								className='w-full h-full object-cover'
								loading='lazy'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='py-20  w-content'>
				<div className='mb-8'>
					<h1 className='mb-4 text-3xl'>Dokumentasi</h1>
				</div>

				<ImageDialog images={images} />
			</section>
		</>
	);
}
