import React, { useRef } from 'react';
import clsx from 'clsx';
import './GamifyTabs.css';

export interface TabItem {
    id: string;
    label: string;
}

export interface GamifyTabsProps {
    tabs: TabItem[];
    activeTabId: string;
    onTabChange: (id: string) => void;
    className?: string;
}

export const GamifyTabs: React.FC<GamifyTabsProps> = ({
    tabs,
    activeTabId,
    onTabChange,
    className,
}) => {
    const tabsRef = useRef<HTMLDivElement>(null);

    const handleTabClick = (tabId: string, index: number) => {
        onTabChange(tabId);

        // Auto-scroll to show next tab if clicking near the edge
        if (tabsRef.current) {
            const container = tabsRef.current;
            const buttons = container.querySelectorAll('.gamify-tab');
            const clickedButton = buttons[index] as HTMLElement;

            if (clickedButton) {
                // Scroll so the clicked tab is visible with some of the next tab showing
                const scrollOffset = clickedButton.offsetLeft - 16; // Small left padding
                container.scrollTo({
                    left: scrollOffset,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className={clsx('gamify-tabs', className)} ref={tabsRef}>
            {tabs.map((tab, index) => (
                <button
                    key={tab.id}
                    className={clsx(
                        'gamify-tab',
                        activeTabId === tab.id && 'gamify-tab--active'
                    )}
                    onClick={() => handleTabClick(tab.id, index)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};
