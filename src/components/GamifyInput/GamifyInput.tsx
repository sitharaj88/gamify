import React from 'react';
import clsx from 'clsx';
import './GamifyInput.css';

export interface GamifyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const GamifyInput: React.FC<GamifyInputProps> = ({
    label,
    error,
    className,
    ...props
}) => {
    return (
        <div className='gamify-input-wrapper'>
            {label && <label className='gamify-label'>{label}</label>}
            <input
                className={clsx(
                    'gamify-input',
                    { 'gamify-input--error': error },
                    className
                )}
                {...props}
            />
            {error && <span className='gamify-error-message'>{error}</span>}
        </div>
    );
};
