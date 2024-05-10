'use client';

import * as React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Tab, TabGroup, TabList, TabPanel, TabPanels, Transition } from '@headlessui/react';

import Button from '@/components/button';
import Image from 'next/image';
import Penghargaan from './penghargaan';
import Prestasi from './prestasi';

interface PrestasiTabProps {
	//
}

const tabs = ['Prestasi', 'Penghargaan'] as const;

const PrestasiTab: React.FC<PrestasiTabProps> = ({ ...props }) => {
	const [index, setIndex] = React.useState(0);
	const ref = React.useRef<HTMLDivElement>(null);

	return (
		<TabGroup onChange={(tab) => setIndex(tab)} ref={ref}>
			<TabList className='flex items-center space-x-2'>
				{tabs.map((tab, index) => (
					<Tab key={index} as={Button} variant='ghost'>
						{tab}
					</Tab>
				))}
			</TabList>

			<TabPanels>
				<AnimatePresence>
					<TabPanel as={React.Fragment} key='prestasi'>
						{index === 0 && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								className='grid lg:grid-cols-2 gap-8 items-start py-10'>
								<div className='aspect-[4/3]'>
									<Image
										src='/images/prestasi.jpg'
										alt='Prestasi'
										width={500}
										height={500}
										className='w-full h-full object-cover rounded-xl select-none'
									/>
								</div>
								<Prestasi className='mb-8' />
							</motion.div>
						)}
					</TabPanel>

					<TabPanel as={React.Fragment} key='penghargaan'>
						{index === 1 && (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								className='grid lg:grid-cols-2 gap-8 items-start py-10'>
								<div className='aspect-[4/3]'>
									<Image
										src='/images/penghargaan.jpg'
										alt='Penghargaan'
										width={500}
										height={500}
										className='w-full h-full object-cover rounded-xl select-none'
									/>
								</div>
								<Penghargaan className='mb-8' />
							</motion.div>
						)}
					</TabPanel>
				</AnimatePresence>
			</TabPanels>
		</TabGroup>
	);
};

export default PrestasiTab;
