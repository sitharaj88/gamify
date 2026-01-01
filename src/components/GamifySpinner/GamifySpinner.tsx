import React from 'react';
import clsx from 'clsx';
import './GamifySpinner.css';

export interface GamifySpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const GamifySpinner: React.FC<GamifySpinnerProps> = ({
    size = 'md',
    className,
}) => {
    return (
        <div className={clsx('gamify-spinner', `gamify-spinner--${size}`, className)}>
            <div className='gamify-spinner__ring'></div>
            <div className='gamify-spinner__ring'></div>
            <div className='gamify-spinner__ring'></div>
            <div className='gamify-spinner__ring'></div>
        </div>
    );
};
