import React from 'react';
import clsx from 'clsx';
import './QuestLog.css';
import { GamifyBadge } from '../GamifyBadge/GamifyBadge';

export interface Quest {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'completed' | 'failed';
    rewards?: string[];
}

export interface QuestLogProps extends React.HTMLAttributes<HTMLDivElement> {
    quests: Quest[];
    onQuestClick?: (quest: Quest) => void;
}

export const QuestLog: React.FC<QuestLogProps> = ({
    quests,
    onQuestClick,
    className,
    ...props
}) => {
    return (
        <div className={clsx('gamify-quest-log', className)} {...props}>
            {quests.map((quest) => (
                <div
                    key={quest.id}
                    className={clsx(
                        'gamify-quest-item',
                        `gamify-quest-item--${quest.status}`
                    )}
                    onClick={() => onQuestClick?.(quest)}
                >
                    <div className='gamify-quest-item__title'>
                        {quest.title}
                        {quest.status === 'completed' && <GamifyBadge variant='uncommon'>DONE</GamifyBadge>}
                        {quest.status === 'active' && <GamifyBadge variant='legendary'>ACTIVE</GamifyBadge>}
                        {quest.status === 'failed' && <GamifyBadge variant='mythic'>FAILED</GamifyBadge>}
                    </div>
                    <div className='gamify-quest-item__desc'>{quest.description}</div>
                </div>
            ))}
        </div>
    );
};
