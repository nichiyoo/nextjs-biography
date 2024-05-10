import * as React from 'react';

import { Star } from 'lucide-react';
import { prestasi } from '@/libs/constant';

interface PrestasiProps {
	className?: string;
}

const Prestasi: React.FC<PrestasiProps> = ({ ...props }) => {
	return (
		<div>
			<div className='mb-8'>
				<span className='section text-primary'>Prestasi</span>
				<h3 className=' text-2xl'>Daftar Prestasi</h3>
			</div>

			<ul className='flex flex-col space-y-6'>
				{prestasi.map((prestasi) => (
					<div className='flex items-start justify-between' key={prestasi}>
						<span className='w-4/5'>{prestasi}</span>
						<Star size={20} className='text-secondary' />
					</div>
				))}
			</ul>
		</div>
	);
};

export default Prestasi;
