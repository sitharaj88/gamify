import React from 'react';
import clsx from 'clsx';
import './GamifyCard.css';

export interface GamifyCardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'cyber' | 'neon';
    children: React.ReactNode;
}

export const GamifyCard: React.FC<GamifyCardProps> = ({
    variant = 'default',
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={clsx('gamify-card', `gamify-card--${variant}`, className)}
            {...props}
        >
            {children}
        </div>
    );
};
