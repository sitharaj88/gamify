import React from 'react';
import clsx from 'clsx';
import './InventorySlot.css';

export interface InventorySlotProps extends React.HTMLAttributes<HTMLDivElement> {
    itemSrc?: string;
    count?: number;
    rarity?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
    isActive?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const InventorySlot: React.FC<InventorySlotProps> = ({
    itemSrc,
    count,
    rarity,
    isActive,
    size = 'md',
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(
                'gamify-inventory-slot',
                `gamify-inventory-slot--${size}`,
                rarity && `gamify-inventory-slot--${rarity}`,
                isActive && 'gamify-inventory-slot--active',
                className
            )}
            {...props}
        >
            {itemSrc && <img src={itemSrc} alt="Item" className='gamify-inventory-slot__img' />}
            {count && count > 1 && <span className='gamify-inventory-slot__count'>{count}</span>}
        </div>
    );
};
