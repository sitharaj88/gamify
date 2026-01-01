import React, { useState } from 'react';
import { GamifyCard } from '../components/GamifyCard/GamifyCard';
import { GamifyAvatar } from '../components/GamifyAvatar/GamifyAvatar';
import { GamifyButton } from '../components/GamifyButton/GamifyButton';
import { HealthBar } from '../components/Game/HealthBar';
import { GamifyBadge } from '../components/GamifyBadge/GamifyBadge';
import { GamifyTabs } from '../components/GamifyTabs/GamifyTabs';
import { GamifyTooltip } from '../components/GamifyTooltip/GamifyTooltip';

type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';

interface Hero {
    id: number;
    name: string;
    role: string;
    rank: Rarity;
    hp: number;
    atk: number;
    def: number;
    speed: number;
    power: number;
    element: string;
    img: string;
    abilities: string[];
}

const ROLE_ICONS: Record<string, string> = {
    Tank: '🛡️',
    Assassin: '🗡️',
    Mage: '🔮',
    Brawler: '👊',
    Ranger: '🏹',
    Support: '💚',
};

const ELEMENT_COLORS: Record<string, string> = {
    Fire: '#ff4500',
    Ice: '#00d4ff',
    Lightning: '#faff00',
    Shadow: '#9333ea',
    Nature: '#22c55e',
    Steel: '#94a3b8',
};

const HEROES: Hero[] = [
    {
        id: 1, name: 'Cyber Knight', role: 'Tank', rank: 'legendary',
        hp: 950, atk: 65, def: 120, speed: 40, power: 8500,
        element: 'Steel',
        img: 'https://ui-avatars.com/api/?name=CK&background=ff8000&color=fff&size=128&bold=true',
        abilities: ['Shield Wall', 'Cyber Slash', 'Fortify']
    },
    {
        id: 2, name: 'Neon Ninja', role: 'Assassin', rank: 'epic',
        hp: 450, atk: 180, def: 45, speed: 150, power: 7200,
        element: 'Shadow',
        img: 'https://ui-avatars.com/api/?name=NN&background=a335ee&color=fff&size=128&bold=true',
        abilities: ['Shadow Strike', 'Vanish', 'Death Mark']
    },
    {
        id: 3, name: 'Pixel Mage', role: 'Mage', rank: 'rare',
        hp: 380, atk: 200, def: 30, speed: 80, power: 6100,
        element: 'Fire',
        img: 'https://ui-avatars.com/api/?name=PM&background=0070dd&color=fff&size=128&bold=true',
        abilities: ['Fireball', 'Meteor', 'Inferno']
    },
    {
        id: 4, name: 'Mech Brute', role: 'Brawler', rank: 'uncommon',
        hp: 800, atk: 90, def: 80, speed: 35, power: 4800,
        element: 'Steel',
        img: 'https://ui-avatars.com/api/?name=MB&background=059669&color=fff&size=128&bold=true',
        abilities: ['Ground Pound', 'Rage', 'Iron Fist']
    },
    {
        id: 5, name: 'Viper Sniper', role: 'Ranger', rank: 'epic',
        hp: 420, atk: 160, def: 40, speed: 100, power: 6900,
        element: 'Nature',
        img: 'https://ui-avatars.com/api/?name=VS&background=a335ee&color=fff&size=128&bold=true',
        abilities: ['Poison Shot', 'Eagle Eye', 'Venom Trap']
    },
    {
        id: 6, name: 'Frost Queen', role: 'Mage', rank: 'legendary',
        hp: 420, atk: 190, def: 50, speed: 70, power: 8200,
        element: 'Ice',
        img: 'https://ui-avatars.com/api/?name=FQ&background=ff8000&color=fff&size=128&bold=true',
        abilities: ['Blizzard', 'Ice Barrier', 'Absolute Zero']
    },
];

const getCardVariant = (rank: Rarity): 'default' | 'cyber' | 'neon' => {
    if (rank === 'legendary' || rank === 'mythic') return 'cyber';
    if (rank === 'epic') return 'neon';
    return 'default';
};

export const HeroesPage: React.FC = () => {
    const [activeTabId, setActiveTabId] = useState('all');
    const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

    const tabs = [
        { id: 'all', label: 'All Heroes' },
        { id: 'tanks', label: 'Tanks' },
        { id: 'damage', label: 'Damage' },
        { id: 'support', label: 'Support' },
    ];

    const filteredHeroes = activeTabId === 'all'
        ? HEROES
        : HEROES.filter(h => {
            if (activeTabId === 'tanks') return h.role === 'Tank' || h.role === 'Brawler';
            if (activeTabId === 'damage') return h.role === 'Assassin' || h.role === 'Mage' || h.role === 'Ranger';
            return h.role === 'Support';
        });

    return (
        <div className="heroes-page">
            {/* Hero Banner */}
            <div className="heroes-banner">
                <div className="heroes-banner__content">
                    <h1 className="heroes-banner__title">CHAMPION ROSTER</h1>
                    <p className="heroes-banner__subtitle">Select your warrior for battle</p>
                    <div className="heroes-banner__stats">
                        <div className="heroes-banner__stat">
                            <span className="heroes-banner__stat-value">{HEROES.length}</span>
                            <span className="heroes-banner__stat-label">Unlocked</span>
                        </div>
                        <div className="heroes-banner__stat">
                            <span className="heroes-banner__stat-value">50</span>
                            <span className="heroes-banner__stat-label">Total</span>
                        </div>
                        <div className="heroes-banner__stat">
                            <span className="heroes-banner__stat-value" style={{ color: 'var(--gamify-rank-legendary)' }}>2</span>
                            <span className="heroes-banner__stat-label">Legendary</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
                {/* Tabs */}
                <GamifyTabs tabs={tabs} activeTabId={activeTabId} onTabChange={setActiveTabId} />

                {/* Hero Grid */}
                <div className="heroes-grid">
                    {filteredHeroes.map((hero) => (
                        <div
                            key={hero.id}
                            className={`hero-card-wrapper ${selectedHero?.id === hero.id ? 'hero-card-wrapper--selected' : ''}`}
                            onClick={() => setSelectedHero(hero)}
                        >
                            <GamifyCard variant={getCardVariant(hero.rank)} className="hero-card">
                                {/* Power Level Ribbon */}
                                <div className="hero-card__power" style={{ '--element-color': ELEMENT_COLORS[hero.element] } as React.CSSProperties}>
                                    ⚡ {hero.power.toLocaleString()}
                                </div>

                                {/* Hero Avatar */}
                                <div className="hero-card__avatar-section">
                                    <GamifyAvatar
                                        src={hero.img}
                                        alt={hero.name}
                                        size='xl'
                                        rank={hero.rank}
                                    />
                                    <div className="hero-card__element" style={{ background: ELEMENT_COLORS[hero.element] }} />
                                </div>

                                {/* Hero Info */}
                                <div className="hero-card__info">
                                    <h3 className="hero-card__name">{hero.name}</h3>
                                    <div className="hero-card__role">
                                        <span className="hero-card__role-icon">{ROLE_ICONS[hero.role]}</span>
                                        <span>{hero.role}</span>
                                        <GamifyBadge variant={hero.rank} style={{ marginLeft: 'auto' }}>{hero.rank}</GamifyBadge>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="hero-card__stats">
                                    <GamifyTooltip content="Hit Points - Survivability">
                                        <div className="hero-card__stat">
                                            <span className="hero-card__stat-icon">❤️</span>
                                            <HealthBar value={hero.hp} max={1000} variant='hp' />
                                            <span className="hero-card__stat-value">{hero.hp}</span>
                                        </div>
                                    </GamifyTooltip>
                                    <GamifyTooltip content="Attack Power - Damage Output">
                                        <div className="hero-card__stat">
                                            <span className="hero-card__stat-icon">⚔️</span>
                                            <HealthBar value={hero.atk} max={200} variant='xp' />
                                            <span className="hero-card__stat-value">{hero.atk}</span>
                                        </div>
                                    </GamifyTooltip>
                                    <GamifyTooltip content="Defense - Damage Reduction">
                                        <div className="hero-card__stat">
                                            <span className="hero-card__stat-icon">🛡️</span>
                                            <HealthBar value={hero.def} max={150} variant='mana' />
                                            <span className="hero-card__stat-value">{hero.def}</span>
                                        </div>
                                    </GamifyTooltip>
                                </div>

                                {/* Abilities Preview */}
                                <div className="hero-card__abilities">
                                    {hero.abilities.map((ability, idx) => (
                                        <span key={idx} className="hero-card__ability">{ability}</span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="hero-card__actions">
                                    <GamifyButton variant={hero.rank === 'legendary' ? 'legendary' : 'primary'} style={{ flex: 1 }}>
                                        SELECT
                                    </GamifyButton>
                                    <GamifyButton variant='ghost'>
                                        DETAILS
                                    </GamifyButton>
                                </div>
                            </GamifyCard>
                        </div>
                    ))}

                    {/* Locked Slots */}
                    {[1, 2].map((i) => (
                        <div key={`locked-${i}`} className="hero-card-wrapper hero-card-wrapper--locked">
                            <GamifyCard className="hero-card hero-card--locked">
                                <div className="hero-card__locked-content">
                                    <div className="hero-card__lock-icon">🔒</div>
                                    <p>LOCKED</p>
                                    <span className="hero-card__unlock-cost">💎 500</span>
                                    <GamifyButton variant='outline' size='sm'>UNLOCK</GamifyButton>
                                </div>
                            </GamifyCard>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .heroes-page {
                    min-height: 100vh;
                }

                .heroes-banner {
                    background: linear-gradient(135deg, rgba(67, 56, 202, 0.3), rgba(162, 28, 175, 0.3)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                    padding: 4rem 2rem 3rem;
                    text-align: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                    overflow: hidden;
                }

                .heroes-banner::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    opacity: 0.5;
                }

                .heroes-banner__content {
                    position: relative;
                    z-index: 1;
                }

                .heroes-banner__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 3.5rem;
                    color: var(--gamify-text-primary);
                    margin-bottom: 0.5rem;
                    text-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
                    letter-spacing: 4px;
                }

                .heroes-banner__subtitle {
                    color: var(--gamify-text-secondary);
                    font-size: 1.2rem;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    margin-bottom: 2rem;
                }

                .heroes-banner__stats {
                    display: flex;
                    justify-content: center;
                    gap: 3rem;
                }

                .heroes-banner__stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .heroes-banner__stat-value {
                    font-family: var(--gamify-font-heading);
                    font-size: 2.5rem;
                    color: var(--gamify-neon-cyan);
                }

                .heroes-banner__stat-label {
                    color: var(--gamify-text-muted);
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                }

                .heroes-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 2rem;
                }

                .hero-card-wrapper {
                    cursor: pointer;
                    transition: transform 0.3s;
                }

                .hero-card-wrapper:hover {
                    transform: translateY(-8px);
                }

                .hero-card-wrapper--selected .hero-card {
                    border-color: var(--gamify-neon-cyan) !important;
                    box-shadow: 0 0 30px rgba(0, 243, 255, 0.3);
                }

                .hero-card-wrapper--locked {
                    opacity: 0.6;
                }

                .hero-card {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    position: relative;
                    height: 100%;
                    min-height: 480px;
                }

                .hero-card__power {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: linear-gradient(135deg, var(--element-color, var(--gamify-neon-cyan)), rgba(0,0,0,0.8));
                    padding: 0.4rem 1rem;
                    border-radius: 20px;
                    font-family: var(--gamify-font-heading);
                    font-size: 0.85rem;
                    color: white;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                    z-index: 10;
                }

                .hero-card__avatar-section {
                    display: flex;
                    justify-content: center;
                    position: relative;
                    padding-top: 2rem;
                }

                .hero-card__element {
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 120px;
                    height: 4px;
                    border-radius: 2px;
                    box-shadow: 0 0 10px currentColor;
                }

                .hero-card__info {
                    text-align: center;
                }

                .hero-card__name {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.4rem;
                    color: var(--gamify-text-primary);
                    margin-bottom: 0.5rem;
                }

                .hero-card__role {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    color: var(--gamify-text-secondary);
                    font-size: 0.95rem;
                }

                .hero-card__role-icon {
                    font-size: 1.2rem;
                }

                .hero-card__stats {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                }

                .hero-card__stat {
                    display: grid;
                    grid-template-columns: 24px 1fr 40px;
                    align-items: center;
                    gap: 0.5rem;
                }

                .hero-card__stat-icon {
                    font-size: 1rem;
                    text-align: center;
                }

                .hero-card__stat-value {
                    font-family: var(--gamify-font-heading);
                    font-size: 0.9rem;
                    color: var(--gamify-text-primary);
                    text-align: right;
                }

                .hero-card__abilities {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    justify-content: center;
                }

                .hero-card__ability {
                    background: rgba(99, 102, 241, 0.15);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    padding: 0.3rem 0.8rem;
                    border-radius: 15px;
                    font-size: 0.75rem;
                    color: var(--gamify-text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .hero-card__actions {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: auto;
                    padding-top: 0.5rem;
                }

                .hero-card--locked {
                    min-height: 480px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }

                .hero-card__locked-content {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .hero-card__lock-icon {
                    font-size: 3rem;
                    opacity: 0.5;
                }

                .hero-card__unlock-cost {
                    font-family: var(--gamify-font-heading);
                    color: var(--gamify-neon-cyan);
                }

                /* Light mode adjustments */
                [data-theme='light'] .heroes-banner {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(162, 28, 175, 0.1)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                }

                [data-theme='light'] .heroes-banner__title {
                    text-shadow: none;
                }

                [data-theme='light'] .hero-card__ability {
                    background: rgba(99, 102, 241, 0.1);
                    border-color: rgba(99, 102, 241, 0.2);
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .heroes-banner {
                        padding: 2rem 1rem;
                    }

                    .heroes-banner__title {
                        font-size: 1.8rem;
                    }

                    .heroes-content {
                        padding: 1rem;
                    }

                    .heroes-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .hero-card__header {
                        padding: 0.75rem;
                    }

                    .hero-card__body {
                        padding: 0.75rem;
                    }

                    .hero-card__name {
                        font-size: 1.1rem;
                    }

                    .hero-card__stats {
                        gap: 0.5rem;
                    }

                    .hero-card__stat {
                        padding: 0.4rem;
                        font-size: 0.7rem;
                    }

                    .hero-card__abilities {
                        gap: 0.3rem;
                    }

                    .hero-card__ability {
                        font-size: 0.7rem;
                        padding: 0.2rem 0.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .heroes-banner {
                        padding: 1.5rem 0.75rem;
                    }

                    .heroes-banner__title {
                        font-size: 1.4rem;
                    }

                    .heroes-content {
                        padding: 0.5rem;
                    }

                    .hero-card__header {
                        padding: 0.5rem;
                        flex-direction: column;
                        text-align: center;
                    }

                    .hero-card__body {
                        padding: 0.5rem;
                    }

                    .hero-card__name {
                        font-size: 1rem;
                    }

                    .hero-card__stats {
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .hero-card__stat {
                        padding: 0.3rem;
                        font-size: 0.65rem;
                    }
                }
            `}</style>
        </div>
    );
};
