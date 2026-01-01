import React from 'react';
import clsx from 'clsx';
import './GamifyAvatar.css';

export interface GamifyAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    rank?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
    status?: 'online' | 'offline' | 'busy';
}

export const GamifyAvatar: React.FC<GamifyAvatarProps> = ({
    src,
    alt,
    size = 'md',
    rank = 'common',
    status,
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(
                'gamify-avatar',
                `gamify-avatar--${size}`,
                `gamify-avatar--${rank}`,
                className
            )}
            {...props}
        >
            <img src={src} alt={alt} className='gamify-avatar__img' />
            {status && (
                <span
                    className={clsx(
                        'gamify-avatar__status',
                        `gamify-avatar__status--${status}`
                    )}
                />
            )}
        </div>
    );
};
