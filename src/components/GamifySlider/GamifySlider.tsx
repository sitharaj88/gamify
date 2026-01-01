import React from 'react';
import clsx from 'clsx';
import './GamifySlider.css';

export interface GamifySliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    showValue?: boolean;
}

export const GamifySlider: React.FC<GamifySliderProps> = ({
    label,
    value,
    showValue = true,
    className,
    ...props
}) => {
    return (
        <div className={clsx('gamify-slider-container', className)}>
            {(label || showValue) && (
                <div className='gamify-slider-label'>
                    {label && <span>{label}</span>}
                    {showValue && <span className='gamify-slider-value'>{value}</span>}
                </div>
            )}
            <input
                type='range'
                className='gamify-slider'
                value={value}
                {...props}
            />
        </div>
    );
};
