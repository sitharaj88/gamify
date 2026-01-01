import React from 'react';
import clsx from 'clsx';
import './GamifyTooltip.css';

export interface GamifyTooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}

export const GamifyTooltip: React.FC<GamifyTooltipProps> = ({
    content,
    children,
    rarity = 'common',
}) => {
    return (
        <div className='gamify-tooltip-wrapper'>
            {children}
            <div className={clsx('gamify-tooltip', `gamify-tooltip--${rarity}`)}>
                {content}
            </div>
        </div>
    );
};
