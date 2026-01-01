import React from 'react';
import clsx from 'clsx';
import './GamifyButton.css';

export interface GamifyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'danger' | 'outline' | 'ghost' | 'legendary';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const GamifyButton: React.FC<GamifyButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}) => {
    return (
        <button
            className={clsx(
                'gamify-btn',
                `gamify-btn--${variant}`,
                `gamify-btn--${size}`,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
