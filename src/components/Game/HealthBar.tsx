import React from 'react';
import clsx from 'clsx';
import './HealthBar.css';

export interface HealthBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max: number;
    variant?: 'hp' | 'mana' | 'xp';
    showLabel?: boolean;
}

export const HealthBar: React.FC<HealthBarProps> = ({
    value,
    max,
    variant = 'hp',
    showLabel = true,
    className,
    ...props
}) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div
            className={clsx('gamify-health-bar', `gamify-health-bar--${variant}`, className)}
            {...props}
        >
            <div
                className='gamify-health-bar__fill'
                style={{ width: `${percentage}%` }}
            />
            {showLabel && (
                <span className='gamify-health-bar__text'>
                    {value} / {max}
                </span>
            )}
        </div>
    );
};
