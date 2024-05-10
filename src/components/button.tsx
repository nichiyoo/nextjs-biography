import * as React from 'react';

import { cn } from '@/libs/util';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'ghost';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = 'primary', children, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					'inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none',
					variant === 'primary' && 'bg-primary text-white hover:bg-primary/80',
					variant === 'secondary' && 'bg-secondary text-primary hover:bg-secondary/80',
					variant === 'ghost' && 'bg-gray-100 hover:bg-gray-200',
					className
				)}
				{...props}>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
