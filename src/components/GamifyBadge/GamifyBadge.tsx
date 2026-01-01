import React from 'react';
import clsx from 'clsx';
import './GamifyBadge.css';

export interface GamifyBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
    children: React.ReactNode;
}

export const GamifyBadge: React.FC<GamifyBadgeProps> = ({
    variant = 'common',
    className,
    children,
    ...props
}) => {
    return (
        <span
            className={clsx('gamify-badge', `gamify-badge--${variant}`, className)}
            {...props}
        >
            {children}
        </span>
    );
};
