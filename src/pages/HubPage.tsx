import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GamifyCard } from '../components/GamifyCard/GamifyCard';
import { GamifyAvatar } from '../components/GamifyAvatar/GamifyAvatar';
import { GamifyBadge } from '../components/GamifyBadge/GamifyBadge';
import { HealthBar } from '../components/Game/HealthBar';
import { GamifyButton } from '../components/GamifyButton/GamifyButton';
import { GamifyTooltip } from '../components/GamifyTooltip/GamifyTooltip';
import { InventorySlot } from '../components/Game/InventorySlot';
import { QuestLog, type Quest } from '../components/QuestLog/QuestLog';
import { GamifyTabs } from '../components/GamifyTabs/GamifyTabs';

export const HubPage: React.FC = () => {
    const navigate = useNavigate();
    const [hp, setHp] = useState(750);
    const [mana, setMana] = useState(420);
    const [activeTab, setActiveTab] = useState('active');

    const quests: Quest[] = [
        { id: '1', title: 'Slay the Dragon', description: 'Defeat the Ancient Red Dragon in the Volcanic Core.', status: 'active' },
        { id: '2', title: 'Gather Herbs', description: 'Collect 10 Moonflowers from the Midnight Forest.', status: 'completed' },
        { id: '3', title: 'Escort Merchant', description: 'Protect the caravan traveling to Guldor.', status: 'failed' },
        { id: '4', title: 'Arena Champion', description: 'Win 5 consecutive PvP matches in the arena.', status: 'active' },
    ];

    const dailyChallenges = [
        { id: 1, title: 'Win 3 Battles', progress: 2, max: 3, reward: '💎 50', icon: '⚔️' },
        { id: 2, title: 'Complete 5 Quests', progress: 3, max: 5, reward: '💰 500', icon: '📜' },
        { id: 3, title: 'Earn 1000 XP', progress: 850, max: 1000, reward: '🎁 Chest', icon: '✨' },
    ];

    const quickActions = [
        { icon: '⚔️', label: 'Heroes', path: '/heroes', color: '#ff8000' },
        { icon: '🏆', label: 'Ranks', path: '/leaderboard', color: '#ffd700' },
        { icon: '🛒', label: 'Store', path: '/store', color: '#22c55e' },
        { icon: '⚙️', label: 'Settings', path: '/settings', color: '#6366f1' },
    ];

    const onlineFriends = [
        { name: 'Neon Ninja', status: 'In Battle', rank: 'epic' as const },
        { name: 'Pixel Mage', status: 'Online', rank: 'rare' as const },
        { name: 'Frost Queen', status: 'In Raid', rank: 'legendary' as const },
    ];

    return (
        <div className="hub-page">
            {/* Hub Banner */}
            <div className="hub-banner">
                <div className="hub-banner__left">
                    <div className="hub-banner__welcome">
                        <span className="hub-banner__greeting">Welcome back,</span>
                        <h1 className="hub-banner__name">Cyber Knight</h1>
                        <div className="hub-banner__badges">
                            <GamifyBadge variant='legendary'>Lvl 99</GamifyBadge>
                            <GamifyBadge variant='epic'>ELITE</GamifyBadge>
                            <GamifyBadge variant='rare'>⚔️ Knights of Valor</GamifyBadge>
                        </div>
                    </div>
                </div>
                <div className="hub-banner__right">
                    <div className="hub-banner__resources">
                        <div className="resource">
                            <span className="resource__icon">💰</span>
                            <span className="resource__value">25,400</span>
                        </div>
                        <div className="resource">
                            <span className="resource__icon">💎</span>
                            <span className="resource__value">1,250</span>
                        </div>
                        <div className="resource">
                            <span className="resource__icon">⚡</span>
                            <span className="resource__value">85/100</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hub-layout'>
                {/* LEFT SIDEBAR - Player Info */}
                <aside className='hub-sidebar'>
                    {/* Player Card */}
                    <GamifyCard variant='cyber' className="player-card">
                        <div className="player-card__avatar">
                            <GamifyAvatar
                                src='https://ui-avatars.com/api/?name=CK&background=ff8000&color=fff&size=128&bold=true'
                                alt='Profile'
                                size='xl'
                                rank='legendary'
                                status='online'
                            />
                            <div className="player-card__level">99</div>
                        </div>

                        <div className="player-card__stats">
                            <div className="stat-bar">
                                <div className="stat-bar__header">
                                    <span>❤️ HP</span>
                                    <span>{hp}/1000</span>
                                </div>
                                <HealthBar value={hp} max={1000} variant='hp' showLabel={false} />
                            </div>
                            <div className="stat-bar">
                                <div className="stat-bar__header">
                                    <span>💧 MANA</span>
                                    <span>{mana}/500</span>
                                </div>
                                <HealthBar value={mana} max={500} variant='mana' showLabel={false} />
                            </div>
                            <div className="stat-bar">
                                <div className="stat-bar__header">
                                    <span>✨ XP</span>
                                    <span>85%</span>
                                </div>
                                <HealthBar value={850} max={1000} variant='xp' showLabel={false} />
                            </div>
                        </div>

                        <div className="player-card__actions">
                            <GamifyButton size='sm' onClick={() => setHp(Math.max(0, hp - 100))}>
                                ⚔️ Hit
                            </GamifyButton>
                            <GamifyButton size='sm' variant='outline' onClick={() => setHp(Math.min(1000, hp + 100))}>
                                💚 Heal
                            </GamifyButton>
                            <GamifyButton size='sm' variant='ghost' onClick={() => setMana(Math.max(0, mana - 50))}>
                                🔮 Cast
                            </GamifyButton>
                        </div>
                    </GamifyCard>

                    {/* Quick Actions */}
                    <GamifyCard>
                        <h3 className='card-title'>⚡ Quick Actions</h3>
                        <div className="quick-actions">
                            {quickActions.map((action) => (
                                <button
                                    key={action.label}
                                    className="quick-action"
                                    onClick={() => navigate(action.path)}
                                    style={{ '--action-color': action.color } as React.CSSProperties}
                                >
                                    <span className="quick-action__icon">{action.icon}</span>
                                    <span className="quick-action__label">{action.label}</span>
                                </button>
                            ))}
                        </div>
                    </GamifyCard>

                    {/* Inventory */}
                    <GamifyCard>
                        <h3 className='card-title'>🎒 Equipment</h3>
                        <div className='inventory-grid'>
                            <GamifyTooltip content="Dragon Slayer • +180 ATK" rarity='legendary'>
                                <InventorySlot rarity='legendary' itemSrc='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png' />
                            </GamifyTooltip>
                            <GamifyTooltip content="Shadow Cloak • +85 DEF" rarity='epic'>
                                <InventorySlot rarity='epic' itemSrc='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png' />
                            </GamifyTooltip>
                            <GamifyTooltip content="HP Potion x5" rarity='rare'>
                                <InventorySlot rarity='rare' itemSrc='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png' count={5} />
                            </GamifyTooltip>
                            <GamifyTooltip content="Mana Crystal x3" rarity='rare'>
                                <InventorySlot rarity='rare' itemSrc='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png' count={3} />
                            </GamifyTooltip>
                            <InventorySlot rarity='common' />
                            <InventorySlot />
                        </div>
                    </GamifyCard>
                </aside>

                {/* MAIN CONTENT */}
                <main className='hub-main'>
                    {/* Daily Challenges */}
                    <section>
                        <div className='section-header'>
                            <h2 className='section-title'>🎯 Daily Challenges</h2>
                            <GamifyBadge variant='mythic'>⏰ 14:32:05</GamifyBadge>
                        </div>
                        <div className="challenges-grid">
                            {dailyChallenges.map((challenge) => (
                                <GamifyCard key={challenge.id} className="challenge-card">
                                    <div className="challenge-card__icon">{challenge.icon}</div>
                                    <div className="challenge-card__info">
                                        <h4 className="challenge-card__title">{challenge.title}</h4>
                                        <div className="challenge-card__progress">
                                            <HealthBar
                                                value={challenge.progress}
                                                max={challenge.max}
                                                variant='xp'
                                                showLabel={false}
                                            />
                                            <span className="challenge-card__count">
                                                {challenge.progress}/{challenge.max}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="challenge-card__reward">
                                        {challenge.reward}
                                    </div>
                                </GamifyCard>
                            ))}
                        </div>
                    </section>

                    {/* Quest Section */}
                    <section>
                        <div className='section-header'>
                            <h2 className='section-title'>📜 Active Missions</h2>
                            <GamifyBadge variant='epic'>{quests.filter(q => q.status === 'active').length} Active</GamifyBadge>
                        </div>

                        <GamifyTabs
                            tabs={[
                                { id: 'active', label: '🎯 Active' },
                                { id: 'completed', label: '✅ Completed' },
                                { id: 'failed', label: '❌ Failed' },
                            ]}
                            activeTabId={activeTab}
                            onTabChange={setActiveTab}
                        />

                        <GamifyCard>
                            <QuestLog quests={quests.filter(q =>
                                activeTab === 'active' ? q.status === 'active' :
                                    activeTab === 'completed' ? q.status === 'completed' :
                                        q.status === 'failed'
                            )} />
                        </GamifyCard>
                    </section>
                </main>

                {/* RIGHT SIDEBAR - Social */}
                <aside className='hub-sidebar-right'>
                    {/* Online Friends */}
                    <GamifyCard>
                        <h3 className='card-title'>👥 Online Friends</h3>
                        <div className="friends-list">
                            {onlineFriends.map((friend, idx) => (
                                <div key={idx} className="friend-item">
                                    <GamifyAvatar
                                        src={`https://ui-avatars.com/api/?name=${friend.name.replace(' ', '+')}&background=random&color=fff`}
                                        alt={friend.name}
                                        size="sm"
                                        rank={friend.rank}
                                        status="online"
                                    />
                                    <div className="friend-item__info">
                                        <span className="friend-item__name">{friend.name}</span>
                                        <span className="friend-item__status">{friend.status}</span>
                                    </div>
                                    <GamifyButton size='sm' variant='ghost'>💬</GamifyButton>
                                </div>
                            ))}
                        </div>
                        <GamifyButton variant='ghost' size='sm' style={{ width: '100%', marginTop: '1rem' }}>
                            View All Friends →
                        </GamifyButton>
                    </GamifyCard>

                    {/* Recent Activity */}
                    <GamifyCard variant='neon'>
                        <h3 className='card-title'>📢 Activity Feed</h3>
                        <div className="activity-feed">
                            <div className="activity-item">
                                <span className="activity-item__icon">🎉</span>
                                <span className="activity-item__text">
                                    <strong>Neon Ninja</strong> defeated Void Boss!
                                </span>
                                <span className="activity-item__time">2m</span>
                            </div>
                            <div className="activity-item">
                                <span className="activity-item__icon">⬆️</span>
                                <span className="activity-item__text">
                                    <strong>Pixel Mage</strong> reached Lvl 80!
                                </span>
                                <span className="activity-item__time">15m</span>
                            </div>
                            <div className="activity-item">
                                <span className="activity-item__icon">🏆</span>
                                <span className="activity-item__text">
                                    <strong>Frost Queen</strong> joined Top 10!
                                </span>
                                <span className="activity-item__time">1h</span>
                            </div>
                            <div className="activity-item">
                                <span className="activity-item__icon">⚔️</span>
                                <span className="activity-item__text">
                                    Guild raid starting in <strong>30 min</strong>
                                </span>
                                <span className="activity-item__time">now</span>
                            </div>
                        </div>
                    </GamifyCard>

                    {/* Featured Item */}
                    <GamifyCard variant='cyber'>
                        <h3 className='card-title'>🔥 Featured Deal</h3>
                        <div className="featured-deal">
                            <InventorySlot rarity='legendary' itemSrc='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sacred-ash.png' size='lg' />
                            <div className="featured-deal__info">
                                <h4>Phoenix Feather</h4>
                                <p>Auto-revive with 50% HP</p>
                                <div className="featured-deal__price">
                                    <span className="price-old">💎 1000</span>
                                    <span className="price-new">💎 500</span>
                                </div>
                            </div>
                            <GamifyButton variant='legendary' size='sm' onClick={() => navigate('/store')}>
                                BUY
                            </GamifyButton>
                        </div>
                    </GamifyCard>
                </aside>
            </div>

            <style>{`
                .hub-page {
                    min-height: 100vh;
                }

                .hub-banner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2rem 3rem;
                    background: linear-gradient(135deg, rgba(255, 128, 0, 0.15), rgba(99, 102, 241, 0.1)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    flex-wrap: wrap;
                    gap: 2rem;
                }

                .hub-banner__greeting {
                    display: block;
                    color: var(--gamify-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.85rem;
                }

                .hub-banner__name {
                    font-family: var(--gamify-font-heading);
                    font-size: 2.5rem;
                    color: var(--gamify-text-primary);
                    margin: 0.3rem 0 0.8rem;
                }

                .hub-banner__badges {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .hub-banner__resources {
                    display: flex;
                    gap: 2rem;
                }

                .resource {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.2rem;
                }

                .resource__icon {
                    font-size: 1.5rem;
                }

                .resource__value {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.2rem;
                    color: var(--gamify-neon-cyan);
                }

                /* Layout */
                .hub-layout {
                    display: grid;
                    grid-template-columns: 300px 1fr 300px;
                    gap: 2rem;
                    max-width: 1600px;
                    margin: 0 auto;
                    padding: 2rem;
                }

                @media (max-width: 1200px) {
                    .hub-layout {
                        grid-template-columns: 280px 1fr;
                    }
                    .hub-sidebar-right {
                        display: none;
                    }
                }

                @media (max-width: 900px) {
                    .hub-layout {
                        grid-template-columns: 1fr;
                    }
                }

                .hub-sidebar, .hub-sidebar-right {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .hub-main {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                /* Player Card */
                .player-card__avatar {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }

                .player-card__level {
                    position: absolute;
                    bottom: 0;
                    right: calc(50% - 50px);
                    background: linear-gradient(135deg, #ff8000, #ffd700);
                    color: #000;
                    font-family: var(--gamify-font-heading);
                    font-size: 0.85rem;
                    padding: 0.2rem 0.6rem;
                    border-radius: 4px;
                    font-weight: bold;
                }

                .player-card__stats {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .stat-bar__header {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.8rem;
                    margin-bottom: 0.3rem;
                    color: var(--gamify-text-secondary);
                }

                .player-card__actions {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1.5rem;
                }

                /* Card Title */
                .card-title {
                    font-family: var(--gamify-font-heading);
                    font-size: 1rem;
                    color: var(--gamify-text-primary);
                    margin-bottom: 1rem;
                }

                /* Quick Actions */
                .quick-actions {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.5rem;
                }

                .quick-action {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .quick-action:hover {
                    background: rgba(var(--action-color), 0.1);
                    border-color: var(--action-color);
                    transform: translateY(-2px);
                }

                .quick-action__icon {
                    font-size: 1.5rem;
                }

                .quick-action__label {
                    font-size: 0.8rem;
                    color: var(--gamify-text-secondary);
                }

                /* Inventory Grid */
                .inventory-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0.5rem;
                }

                /* Challenges */
                .challenges-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1rem;
                }

                .challenge-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .challenge-card__icon {
                    font-size: 2rem;
                    flex-shrink: 0;
                }

                .challenge-card__info {
                    flex: 1;
                }

                .challenge-card__title {
                    font-size: 0.9rem;
                    color: var(--gamify-text-primary);
                    margin-bottom: 0.5rem;
                }

                .challenge-card__progress {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .challenge-card__count {
                    font-size: 0.75rem;
                    color: var(--gamify-text-muted);
                    white-space: nowrap;
                }

                .challenge-card__reward {
                    font-family: var(--gamify-font-heading);
                    font-size: 0.9rem;
                    color: var(--gamify-neon-yellow);
                }

                /* Friends */
                .friends-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                }

                .friend-item {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                }

                .friend-item__info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .friend-item__name {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--gamify-text-primary);
                }

                .friend-item__status {
                    font-size: 0.75rem;
                    color: var(--gamify-neon-green);
                }

                /* Activity Feed */
                .activity-feed {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                }

                .activity-item {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    padding: 0.5rem;
                    border-radius: 6px;
                    background: rgba(255, 255, 255, 0.02);
                }

                .activity-item__icon {
                    font-size: 1.2rem;
                }

                .activity-item__text {
                    flex: 1;
                    font-size: 0.85rem;
                    color: var(--gamify-text-secondary);
                }

                .activity-item__time {
                    font-size: 0.7rem;
                    color: var(--gamify-text-muted);
                }

                /* Featured Deal */
                .featured-deal {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    text-align: center;
                }

                .featured-deal__info h4 {
                    font-family: var(--gamify-font-heading);
                    color: var(--gamify-text-primary);
                    margin-bottom: 0.3rem;
                }

                .featured-deal__info p {
                    font-size: 0.85rem;
                    color: var(--gamify-text-muted);
                    margin-bottom: 0.5rem;
                }

                .featured-deal__price {
                    display: flex;
                    gap: 0.5rem;
                    justify-content: center;
                }

                .price-old {
                    text-decoration: line-through;
                    color: var(--gamify-text-muted);
                    font-size: 0.85rem;
                }

                .price-new {
                    font-family: var(--gamify-font-heading);
                    color: var(--gamify-neon-green);
                }

                /* Light mode */
                [data-theme='light'] .hub-banner {
                    background: linear-gradient(135deg, rgba(255, 128, 0, 0.08), rgba(99, 102, 241, 0.05)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                    border-bottom-color: rgba(0, 0, 0, 0.1);
                }

                [data-theme='light'] .quick-action {
                    background: rgba(99, 102, 241, 0.03);
                    border-color: rgba(99, 102, 241, 0.1);
                }

                [data-theme='light'] .activity-item {
                    background: rgba(99, 102, 241, 0.03);
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .hub-banner {
                        padding: 2rem 1rem;
                    }

                    .hub-banner__title {
                        font-size: 2rem;
                    }

                    .hub-layout {
                        padding: 1rem;
                        gap: 1rem;
                    }

                    .hub-sidebar {
                        display: none;
                    }

                    .player-stats {
                        gap: 0.5rem;
                    }

                    .quick-actions {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .quick-action {
                        padding: 0.75rem;
                    }
                }

                @media (max-width: 480px) {
                    .hub-banner {
                        padding: 1.5rem 0.75rem;
                    }

                    .hub-banner__title {
                        font-size: 1.5rem;
                    }

                    .hub-layout {
                        padding: 0.75rem;
                    }

                    .quick-actions {
                        grid-template-columns: 1fr;
                    }

                    .quest-log__item {
                        padding: 0.75rem;
                    }

                    .activity-item {
                        padding: 0.75rem;
                    }
                }
            `}</style>
        </div>
    );
};
