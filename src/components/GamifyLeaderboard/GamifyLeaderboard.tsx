import React from 'react';
import clsx from 'clsx';
import { GamifyAvatar } from '../GamifyAvatar/GamifyAvatar';
import './GamifyLeaderboard.css';

export interface LeaderboardEntry {
    id: string;
    name: string;
    avatar: string;
    score: number;
}

export interface GamifyLeaderboardProps extends React.HTMLAttributes<HTMLTableElement> {
    data: LeaderboardEntry[];
}

export const GamifyLeaderboard: React.FC<GamifyLeaderboardProps> = ({
    data,
    className,
    ...props
}) => {
    return (
        <table className={clsx('gamify-leaderboard', className)} {...props}>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th style={{ textAlign: 'right' }}>Score</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry, index) => (
                    <tr key={entry.id} className={`gamify-leaderboard-row--${index + 1}`}>
                        <td className='gamify-leaderboard__rank'>#{index + 1}</td>
                        <td>
                            <div className='gamify-leaderboard__player'>
                                <GamifyAvatar src={entry.avatar} alt={entry.name} size='sm' />
                                {entry.name}
                            </div>
                        </td>
                        <td className='gamify-leaderboard__score'>{entry.score.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
