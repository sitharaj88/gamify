import React, { useState } from 'react';
import { GamifyCard } from '../components/GamifyCard/GamifyCard';
import { GamifyAvatar } from '../components/GamifyAvatar/GamifyAvatar';
import { GamifyBadge } from '../components/GamifyBadge/GamifyBadge';
import { GamifyTabs } from '../components/GamifyTabs/GamifyTabs';

interface LeaderboardPlayer {
    id: string;
    rank: number;
    name: string;
    avatar: string;
    score: number;
    wins: number;
    level: number;
    tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master';
    change: 'up' | 'down' | 'same';
}

const TIER_COLORS: Record<string, string> = {
    bronze: '#cd7f32',
    silver: '#c0c0c0',
    gold: '#ffd700',
    platinum: '#e5e4e2',
    diamond: '#b9f2ff',
    master: '#ff4500',
};

const LEADERBOARD_DATA: LeaderboardPlayer[] = [
    { id: '1', rank: 1, name: 'Cyber Knight', avatar: 'https://ui-avatars.com/api/?name=CK&background=ff8000&color=fff&size=128&bold=true', score: 99999, wins: 342, level: 99, tier: 'master', change: 'same' },
    { id: '2', rank: 2, name: 'Neon Ninja', avatar: 'https://ui-avatars.com/api/?name=NN&background=a335ee&color=fff&size=128&bold=true', score: 85000, wins: 298, level: 87, tier: 'master', change: 'up' },
    { id: '3', rank: 3, name: 'Pixel Mage', avatar: 'https://ui-avatars.com/api/?name=PM&background=0070dd&color=fff&size=128&bold=true', score: 72000, wins: 256, level: 79, tier: 'diamond', change: 'up' },
    { id: '4', rank: 4, name: 'Retro Rogue', avatar: 'https://ui-avatars.com/api/?name=RR&background=dc2626&color=fff&size=128&bold=true', score: 61000, wins: 201, level: 72, tier: 'diamond', change: 'down' },
    { id: '5', rank: 5, name: 'Glitch Gunner', avatar: 'https://ui-avatars.com/api/?name=GG&background=059669&color=fff&size=128&bold=true', score: 54000, wins: 189, level: 68, tier: 'platinum', change: 'same' },
    { id: '6', rank: 6, name: 'Void Walker', avatar: 'https://ui-avatars.com/api/?name=VW&background=1e1b4b&color=fff&size=128&bold=true', score: 48000, wins: 167, level: 63, tier: 'platinum', change: 'up' },
    { id: '7', rank: 7, name: 'Solar Flare', avatar: 'https://ui-avatars.com/api/?name=SF&background=ea580c&color=fff&size=128&bold=true', score: 42000, wins: 145, level: 58, tier: 'gold', change: 'down' },
    { id: '8', rank: 8, name: 'Lunar Ray', avatar: 'https://ui-avatars.com/api/?name=LR&background=2563eb&color=fff&size=128&bold=true', score: 39000, wins: 132, level: 54, tier: 'gold', change: 'same' },
    { id: '9', rank: 9, name: 'Storm Breaker', avatar: 'https://ui-avatars.com/api/?name=SB&background=7c3aed&color=fff&size=128&bold=true', score: 35000, wins: 118, level: 49, tier: 'silver', change: 'up' },
    { id: '10', rank: 10, name: 'Frost Giant', avatar: 'https://ui-avatars.com/api/?name=FG&background=0891b2&color=fff&size=128&bold=true', score: 31000, wins: 105, level: 45, tier: 'silver', change: 'down' },
];

export const LeaderboardPage: React.FC = () => {
    const [activeTabId, setActiveTabId] = useState('global');

    const tabs = [
        { id: 'global', label: 'Global' },
        { id: 'weekly', label: 'Weekly' },
        { id: 'friends', label: 'Friends' },
    ];

    const top3 = LEADERBOARD_DATA.slice(0, 3);
    const restPlayers = LEADERBOARD_DATA.slice(3);

    return (
        <div className="leaderboard-page">
            {/* Banner */}
            <div className="leaderboard-banner">
                <div className="leaderboard-banner__content">
                    <h1 className="leaderboard-banner__title">🏆 HALL OF FAME</h1>
                    <p className="leaderboard-banner__subtitle">Top warriors across all realms</p>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
                <GamifyTabs tabs={tabs} activeTabId={activeTabId} onTabChange={setActiveTabId} />

                {/* Top 3 Podium */}
                <div className="podium">
                    {/* 2nd Place */}
                    <div className="podium__player podium__player--second">
                        <div className="podium__rank">2</div>
                        <GamifyAvatar src={top3[1].avatar} alt={top3[1].name} size="lg" rank="epic" />
                        <h3 className="podium__name">{top3[1].name}</h3>
                        <div className="podium__score">{top3[1].score.toLocaleString()}</div>
                        <div className="podium__pedestal podium__pedestal--silver" />
                    </div>

                    {/* 1st Place */}
                    <div className="podium__player podium__player--first">
                        <div className="podium__crown">👑</div>
                        <div className="podium__rank podium__rank--gold">1</div>
                        <GamifyAvatar src={top3[0].avatar} alt={top3[0].name} size="xl" rank="legendary" />
                        <h3 className="podium__name">{top3[0].name}</h3>
                        <div className="podium__score">{top3[0].score.toLocaleString()}</div>
                        <GamifyBadge variant="legendary">CHAMPION</GamifyBadge>
                        <div className="podium__pedestal podium__pedestal--gold" />
                    </div>

                    {/* 3rd Place */}
                    <div className="podium__player podium__player--third">
                        <div className="podium__rank">3</div>
                        <GamifyAvatar src={top3[2].avatar} alt={top3[2].name} size="lg" rank="rare" />
                        <h3 className="podium__name">{top3[2].name}</h3>
                        <div className="podium__score">{top3[2].score.toLocaleString()}</div>
                        <div className="podium__pedestal podium__pedestal--bronze" />
                    </div>
                </div>

                {/* Rankings Table */}
                <GamifyCard className="rankings-card">
                    <div className="rankings-header">
                        <span>RANK</span>
                        <span>PLAYER</span>
                        <span>TIER</span>
                        <span>WINS</span>
                        <span>LEVEL</span>
                        <span>SCORE</span>
                    </div>
                    <div className="rankings-list">
                        {restPlayers.map((player) => (
                            <div key={player.id} className="ranking-row">
                                <div className="ranking-row__rank">
                                    <span className={`ranking-row__change ranking-row__change--${player.change}`}>
                                        {player.change === 'up' && '▲'}
                                        {player.change === 'down' && '▼'}
                                        {player.change === 'same' && '–'}
                                    </span>
                                    #{player.rank}
                                </div>
                                <div className="ranking-row__player">
                                    <GamifyAvatar src={player.avatar} alt={player.name} size="sm" />
                                    <span>{player.name}</span>
                                </div>
                                <div className="ranking-row__tier">
                                    <span className="tier-badge" style={{ background: TIER_COLORS[player.tier] }}>
                                        {player.tier.toUpperCase()}
                                    </span>
                                </div>
                                <div className="ranking-row__wins">{player.wins}</div>
                                <div className="ranking-row__level">LV.{player.level}</div>
                                <div className="ranking-row__score">{player.score.toLocaleString()}</div>
                            </div>
                        ))}
                    </div>
                </GamifyCard>
            </div>

            <style>{`
                .leaderboard-page {
                    min-height: 100vh;
                }

                .leaderboard-banner {
                    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.15)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                    padding: 3rem 2rem;
                    text-align: center;
                    border-bottom: 1px solid rgba(255, 215, 0, 0.2);
                }

                .leaderboard-banner__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 3rem;
                    color: var(--gamify-text-primary);
                    text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
                    letter-spacing: 3px;
                }

                .leaderboard-banner__subtitle {
                    color: var(--gamify-text-secondary);
                    font-size: 1.1rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-top: 0.5rem;
                }

                /* Podium */
                .podium {
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    gap: 1rem;
                    margin: 3rem 0;
                    padding: 0 1rem;
                }

                .podium__player {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    position: relative;
                }

                .podium__player--first {
                    order: 2;
                }
                .podium__player--second {
                    order: 1;
                }
                .podium__player--third {
                    order: 3;
                }

                .podium__crown {
                    font-size: 2.5rem;
                    animation: float 2s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                .podium__rank {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.5rem;
                    color: var(--gamify-text-secondary);
                }

                .podium__rank--gold {
                    color: gold;
                    font-size: 2rem;
                    text-shadow: 0 0 10px gold;
                }

                .podium__name {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.1rem;
                    color: var(--gamify-text-primary);
                }

                .podium__score {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.3rem;
                    color: var(--gamify-neon-cyan);
                }

                .podium__pedestal {
                    width: 120px;
                    border-radius: 8px 8px 0 0;
                    margin-top: 1rem;
                }

                .podium__pedestal--gold {
                    height: 100px;
                    background: linear-gradient(180deg, #ffd700, #b8860b);
                    box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
                }

                .podium__pedestal--silver {
                    height: 70px;
                    background: linear-gradient(180deg, #c0c0c0, #808080);
                    box-shadow: 0 0 20px rgba(192, 192, 192, 0.3);
                }

                .podium__pedestal--bronze {
                    height: 50px;
                    background: linear-gradient(180deg, #cd7f32, #8b4513);
                    box-shadow: 0 0 15px rgba(205, 127, 50, 0.3);
                }

                /* Rankings */
                .rankings-card {
                    margin-top: 2rem;
                }

                .rankings-header {
                    display: grid;
                    grid-template-columns: 80px 2fr 100px 80px 80px 120px;
                    gap: 1rem;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    font-family: var(--gamify-font-heading);
                    font-size: 0.8rem;
                    color: var(--gamify-text-muted);
                    text-transform: uppercase;
                }

                .rankings-list {
                    display: flex;
                    flex-direction: column;
                }

                .ranking-row {
                    display: grid;
                    grid-template-columns: 80px 2fr 100px 80px 80px 120px;
                    gap: 1rem;
                    padding: 1rem;
                    align-items: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.3s;
                }

                .ranking-row:hover {
                    background: rgba(99, 102, 241, 0.1);
                }

                .ranking-row__rank {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .ranking-row__change {
                    font-size: 0.8rem;
                }

                .ranking-row__change--up { color: #22c55e; }
                .ranking-row__change--down { color: #ef4444; }
                .ranking-row__change--same { color: var(--gamify-text-muted); }

                .ranking-row__player {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-weight: 600;
                }

                .tier-badge {
                    padding: 0.2rem 0.6rem;
                    border-radius: 4px;
                    font-size: 0.7rem;
                    font-weight: bold;
                    color: #000;
                }

                .ranking-row__wins,
                .ranking-row__level {
                    color: var(--gamify-text-secondary);
                }

                .ranking-row__score {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.1rem;
                    color: var(--gamify-neon-cyan);
                }

                /* Light mode */
                [data-theme='light'] .leaderboard-banner {
                    background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.1)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                }

                [data-theme='light'] .leaderboard-banner__title {
                    text-shadow: none;
                }

                [data-theme='light'] .rankings-header {
                    border-bottom-color: rgba(0, 0, 0, 0.1);
                }

                [data-theme='light'] .ranking-row {
                    border-bottom-color: rgba(0, 0, 0, 0.05);
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .leaderboard-banner {
                        padding: 2rem 1rem;
                    }

                    .leaderboard-banner__title {
                        font-size: 2rem;
                    }

                    .leaderboard-content {
                        padding: 1rem;
                    }

                    .rankings-header {
                        padding: 0.75rem;
                        font-size: 0.7rem;
                    }

                    .ranking-row {
                        padding: 0.75rem;
                        gap: 0.5rem;
                    }

                    .ranking-row__player {
                        gap: 0.5rem;
                    }

                    .ranking-row__name {
                        font-size: 0.9rem;
                    }

                    .ranking-row__score {
                        font-size: 1rem;
                    }

                    .ranking-row__stats {
                        display: none;
                    }
                }

                @media (max-width: 480px) {
                    .leaderboard-banner {
                        padding: 1.5rem 0.75rem;
                    }

                    .leaderboard-banner__title {
                        font-size: 1.5rem;
                    }

                    .leaderboard-content {
                        padding: 0.75rem;
                    }

                    .ranking-row__rank {
                        width: 30px;
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </div>
    );
};
