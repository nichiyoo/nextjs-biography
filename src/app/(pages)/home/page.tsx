import * as React from 'react';

import { Award, HeartHandshake } from 'lucide-react';

import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';
import PrestasiTab from './_components/tabs';

interface PageProps {
	//
}

export default async function Page({ ...props }: PageProps): Promise<React.JSX.Element> {
	return (
		<>
			<section className='py-20 w-content'>
				<div className='grid items-center gap-8 lg:grid-cols-2'>
					<div className='order-last lg:order-first'>
						<span className='section text-primary'>Kepala Bidang Peternakan</span>
						<h1 className='mb-4 text-5xl'> Dra. Hj. Siti Fatimah</h1>
						<p className='mb-8'>
							Dra. Hj. Siti Fatimah adalah pemimpin berdedikasi di bidang pelayanan publik dan
							pengembangan masyarakat. Dilahirkan di Pasuruan pada 4 Juni 1969, beliau telah menjabat
							dalam berbagai posisi kunci di pemerintahan Kota Pasuruan. Dengan latar belakang pendidikan
							dari IAIN Sunan Ampel Surabaya, Dra. Siti Fatimah memainkan peran penting dalam
							program-program kemasyarakatan dan keagamaan.
						</p>

						<div className='flex items-center space-x-2'>
							<Link href='/biografi'>
								<Button variant='primary'>Biografi</Button>
							</Link>
							<Link href='/pendidikan'>
								<Button variant='secondary'>Pendidikan</Button>
							</Link>
						</div>
					</div>

					<div className='order-first lg:order-last'>
						<Image
							src='/images/dra-siti-fatimah.png'
							alt='Dra. Siti Fatimah'
							width={500}
							height={500}
							className='w-full h-full'
						/>
					</div>
				</div>
			</section>

			<section className='py-20 bg-primary'>
				<div className='text-white w-content'>
					<div className='grid gap-8 lg:grid-cols-2'>
						<div>
							<div className='w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-4'>
								<HeartHandshake size={24} className='text-white' />
							</div>

							<h2 className='mb-4 text-xl'> Dedikasi Pelayanan</h2>
							<p className='text-white/60'>
								Sebagai Kepala Sub Bagian Bina Mental Spiritual Administrasi Kesra dan Kemasyarakatan,
								Dra. Siti Fatimah telah berperan aktif dalam mengembangkan program-program untuk
								meningkatkan kualitas hidup dan kesejahteraan masyarakat. Dedikasinya yang tinggi
								tercermin dalam berbagai inisiatif pembangunan keluarga dan masyarakat.
							</p>
						</div>

						<div>
							<div className='w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-4'>
								<Award size={24} className='text-white' />
							</div>

							<h2 className='mb-4 text-xl'> Prestasi dan Pengakuan</h2>
							<p className='text-white/60'>
								Prestasi beliau, termasuk penghargaan Satya Kencana Karya Satya dan berbagai penghargaan
								nasional lainnya, menegaskan komitmennya yang kuat terhadap peningkatan kualitas hidup
								masyarakat. Dedikasi Dra. Hj. Siti Fatimah telah meraih pengakuan di tingkat kota hingga
								nasional.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='py-20 w-content'>
				<div className='mb-8'>
					<h2 className='mb-4 text-3xl'>Prestasi dan Penghargaan</h2>
					<p>
						Dra. Hj. Siti Fatimah telah meraih berbagai penghargaan yang mencerminkan dedikasi dan pengaruh
						signifikannya dalam berbagai bidang pemerintahan dan pembangunan masyarakat. Beberapa pencapaian
						terkemukanya meliputi
					</p>
				</div>
				<PrestasiTab />
			</section>
		</>
	);
}
