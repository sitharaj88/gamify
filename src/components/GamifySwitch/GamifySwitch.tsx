import React from 'react';
import clsx from 'clsx';
import './GamifySwitch.css';

export interface GamifySwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const GamifySwitch: React.FC<GamifySwitchProps> = ({
    label,
    className,
    checked,
    ...props
}) => {
    return (
        <label className={clsx('gamify-switch-label', className)}>
            <div className='gamify-switch'>
                <input type='checkbox' checked={checked} {...props} />
                <span className='gamify-switch__slider'></span>
            </div>
            {label && <span>{label}</span>}
        </label>
    );
};
