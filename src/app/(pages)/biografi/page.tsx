import * as React from 'react';

import { positions, trainings } from '@/libs/constant';

import DisclosureInovasi from './_components/disclosure';
import { cn } from '@/libs/util';

interface PageProps {
	//
}

export default async function Page({ ...props }: PageProps): Promise<React.JSX.Element> {
	return (
		<>
			<section className='py-20 w-content'>
				<div className='mb-8'>
					<span className='section text-primary'>Biografi</span>
					<h1 className='mb-4 text-5xl'>Riwayat Jabatan </h1>
					<p>
						Dra. Hj. Siti Fatimah adalah pemimpin berdedikasi di bidang pelayanan publik dan pengembangan
						masyarakat. Dilahirkan di Pasuruan pada 4 Juni 1969, beliau telah menjabat dalam berbagai posisi
						kunci di pemerintahan Kota Pasuruan. Dengan latar belakang pendidikan dari IAIN Sunan Ampel
						Surabaya, Dra. Siti Fatimah memainkan peran penting dalam program-program kemasyarakatan dan
						keagamaan.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
					{positions.map((position, idx) => (
						<div
							key={position.title}
							className={cn(
								'bg-zinc-100 hover:bg-primary hover:text-white rounded-lg p-8 cursor-pointer transition-colors duration-200 ease-in-out group',
								idx === 0 && 'bg-primary [&>h3]:text-white [&_:is(span,p)]:text-white/60'
							)}>
							<div className='flex justify-between items-center mb-4'>
								<span className='text-sm group-hover:text-white/60'>{position.golongan}</span>
								<span className='text-sm group-hover:text-white/60'>{position.tahun}</span>
							</div>
							<h3 className='font-sans font-medium mb-2'>{position.title}</h3>
							<p className='text-sm group-hover:text-white/60'>{position.instansi}</p>
						</div>
					))}
				</div>
			</section>

			<section className='py-20  bg-zinc-50'>
				<div className='w-content'>
					<div className='mb-8'>
						<h2 className='mb-4 text-3xl'> Inovasi berdasarkan Nilai ASN Berakhlak</h2>
						<p>
							Berdasarkan data yang diberikan oleh Nilai ASN Berakhlak, Dra. Hj. Siti Fatimah membuat
							inovasi berdasarkan kemajuan yang diberikan oleh Nilai ASN Berakhlak. Ini membuat Dra. Hj.
							Siti Fatimah memiliki kemajuan yang lebih baik dari semua pemimpin yang berdedikasi di
							bidang pelayanan publik dan pengembangan masyarakat.
						</p>
					</div>

					<DisclosureInovasi />
				</div>
			</section>

			<section className='py-20 w-content'>
				<div className='mb-8'>
					<h2 className='mb-4 text-3xl'> Riwayat Pendidikan Informal / Diklat</h2>
					<p>
						Berisi informasi tentang pendidikan informal dan diklat yang pernah dilakukan oleh Dra. Hj. Siti
						Fatimah, terkait dengan bidang pelayanan publik dan pengembangan masyarakat. Ini mencakup
						informasi tentang pendidikan informal dan diklat yang dilakukan oleh Dra. Hj. Siti Fatimah.
					</p>
				</div>

				<div className='w-full border rounded-xl border-zinc-200 overflow-hidden overflow-x-scroll'>
					<table className='table-auto w-full border-collapse'>
						<thead className='bg-primary text-white'>
							<tr className='[&>th]:px-4 [&>th]:py-2 [&>th]:text-left [&>th]:font-medium'>
								<th className='w-10'>No</th>
								<th className='min-w-[300px] w-2/4'>Nama Pelatihan</th>
								<th className='w-auto'>Tempat</th>
								<th className='w-auto'>Tahun</th>
								<th className='w-1/4'>Instansi</th>
							</tr>
						</thead>
						<tbody>
							{trainings.map((training) => (
								<tr key={training.id} className='border-t border-zinc-200 [&>td]:px-4 [&>td]:py-2'>
									<td className='text-left'>{training.id}</td>
									<td className='text-left'>{training.title}</td>
									<td className='text-left'>{training.tempat}</td>
									<td className='text-left'>{training.tahun}</td>
									<td className='text-left'>{training.instansi}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
}

export const metadata = {
	title: 'Biografi',
	description:
		'Dra. Hj. Siti Fatimah adalah seorang ASN yang mempunyai pengalaman memimpin di berbagai seksi pemerintahan kota Pasuruan, Surabaya, Malang, dan Jember.',
	openGraph: {
		title: 'Biografi',
		description:
			'Dra. Hj. Siti Fatimah adalah seorang ASN yang mempunyai pengalaman memimpin di berbagai seksi pemerintahan kota Pasuruan, Surabaya, Malang, dan Jember.',
		images: '/opengraph-image.png',
	},
	metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
	alternates: {
		canonical: '/biografi',
	},
	twitter: {
		images: '/twitter-image.png',
	},
};
