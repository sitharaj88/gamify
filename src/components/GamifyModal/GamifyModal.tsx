import React, { useEffect } from 'react';
import clsx from 'clsx';
import { GamifyButton } from '../GamifyButton/GamifyButton';
import './GamifyModal.css';

export interface GamifyModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    variant?: 'default' | 'alert';
    footer?: React.ReactNode;
}

export const GamifyModal: React.FC<GamifyModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    variant = 'default',
    footer,
}) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className='gamify-modal-overlay' onClick={onClose}>
            <div
                className={clsx('gamify-modal', `gamify-modal--${variant}`)}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='gamify-modal__header'>
                    <h3 className='gamify-modal__title'>{title}</h3>
                    <button className='gamify-modal__close' onClick={onClose}>&times;</button>
                </div>
                <div className='gamify-modal__content'>
                    {children}
                </div>
                <div className='gamify-modal__footer'>
                    {footer ? footer : (
                        <GamifyButton size='sm' variant='ghost' onClick={onClose}>Close</GamifyButton>
                    )}
                </div>
            </div>
        </div>
    );
};
