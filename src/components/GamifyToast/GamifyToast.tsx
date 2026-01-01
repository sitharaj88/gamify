import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import './GamifyToast.css';

interface Toast {
    id: string;
    title: string;
    message: string;
    duration?: number;
}

interface ToastContextType {
    addToast: (title: string, message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const GamifyToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const idCounter = useRef(0);

    const addToast = useCallback((title: string, message: string, duration = 3000) => {
        const id = `toast-${idCounter.current++}`;
        setToasts((prev) => [...prev, { id, title, message, duration }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className='gamify-toast-container'>
                {toasts.map((toast) => (
                    <div key={toast.id} className='gamify-toast' style={{ '--duration': `${toast.duration}ms` } as React.CSSProperties}>
                        <div className='gamify-toast__icon'>🏆</div>
                        <div className='gamify-toast__content'>
                            <div className='gamify-toast__title'>{toast.title}</div>
                            <div className='gamify-toast__message'>{toast.message}</div>
                        </div>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a GamifyToastProvider');
    }
    return context;
};
