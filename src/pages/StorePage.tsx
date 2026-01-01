import React, { useState } from 'react';
import { GamifyCard } from '../components/GamifyCard/GamifyCard';
import { InventorySlot } from '../components/Game/InventorySlot';
import { GamifyButton } from '../components/GamifyButton/GamifyButton';
import { GamifyBadge } from '../components/GamifyBadge/GamifyBadge';
import { GamifyTabs } from '../components/GamifyTabs/GamifyTabs';
import { GamifyTooltip } from '../components/GamifyTooltip/GamifyTooltip';

type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

interface StoreItem {
    id: number;
    name: string;
    description: string;
    cost: number;
    originalCost?: number;
    rarity: Rarity;
    category: 'weapons' | 'armor' | 'consumables' | 'special';
    stats?: { label: string; value: string }[];
    img: string;
    featured?: boolean;
    limited?: boolean;
}

const ITEMS: StoreItem[] = [
    {
        id: 1, name: 'Dragon Slayer',
        description: 'A legendary blade forged in dragonfire',
        cost: 12000, originalCost: 15000, rarity: 'legendary', category: 'weapons',
        stats: [{ label: 'ATK', value: '+180' }, { label: 'CRIT', value: '+25%' }],
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
        featured: true
    },
    {
        id: 2, name: 'Shadow Cloak',
        description: 'Woven from the essence of night',
        cost: 3500, rarity: 'epic', category: 'armor',
        stats: [{ label: 'DEF', value: '+85' }, { label: 'EVA', value: '+15%' }],
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-stone.png',
        featured: true
    },
    {
        id: 3, name: 'Frost Edge',
        description: 'Chills enemies to their core',
        cost: 2800, rarity: 'rare', category: 'weapons',
        stats: [{ label: 'ATK', value: '+95' }, { label: 'ICE DMG', value: '+40' }],
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/never-melt-ice.png'
    },
    {
        id: 4, name: 'Health Potion XL',
        description: 'Restores 500 HP instantly',
        cost: 150, rarity: 'common', category: 'consumables',
        stats: [{ label: 'HEAL', value: '500 HP' }],
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png'
    },
    {
        id: 5, name: 'Mana Crystal',
        description: 'Restores 300 MP instantly',
        cost: 200, rarity: 'common', category: 'consumables',
        stats: [{ label: 'RESTORE', value: '300 MP' }],
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png'
    },
    {
        id: 6, name: 'Phoenix Feather',
        description: 'Auto-revive with 50% HP',
        cost: 5000, rarity: 'epic', category: 'special',
        stats: [{ label: 'EFFECT', value: 'Auto-Revive' }],
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sacred-ash.png',
        limited: true
    },
    {
        id: 7, name: 'Steel Plate',
        description: 'Heavy but effective protection',
        cost: 800, rarity: 'uncommon', category: 'armor',
        stats: [{ label: 'DEF', value: '+60' }, { label: 'SPD', value: '-10' }],
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/metal-coat.png'
    },
    {
        id: 8, name: 'Mystic Orb',
        description: 'Boosts all magic damage',
        cost: 4200, rarity: 'epic', category: 'special',
        stats: [{ label: 'MAGIC', value: '+50%' }],
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oval-stone.png'
    },
];

const CATEGORY_ICONS: Record<string, string> = {
    weapons: '⚔️',
    armor: '🛡️',
    consumables: '🧪',
    special: '✨',
};

export const StorePage: React.FC = () => {
    const [activeTabId, setActiveTabId] = useState('all');
    const [cart, setCart] = useState<number[]>([]);

    const tabs = [
        { id: 'all', label: '🛒 All Items' },
        { id: 'weapons', label: '⚔️ Weapons' },
        { id: 'armor', label: '🛡️ Armor' },
        { id: 'consumables', label: '🧪 Consumables' },
        { id: 'special', label: '✨ Special' },
    ];

    const featuredItems = ITEMS.filter(i => i.featured);
    const filteredItems = activeTabId === 'all'
        ? ITEMS.filter(i => !i.featured)
        : ITEMS.filter(i => i.category === activeTabId);

    const addToCart = (id: number) => {
        setCart([...cart, id]);
    };

    return (
        <div className="store-page">
            {/* Store Header */}
            <div className="store-banner">
                <div className="store-banner__content">
                    <h1 className="store-banner__title">⚔️ ARMORY</h1>
                    <p className="store-banner__subtitle">Equip yourself for glory</p>
                </div>
                <div className="store-banner__wallet">
                    <div className="wallet-item">
                        <span className="wallet-item__icon">💰</span>
                        <span className="wallet-item__amount">25,400</span>
                        <span className="wallet-item__label">GOLD</span>
                    </div>
                    <div className="wallet-item">
                        <span className="wallet-item__icon">💎</span>
                        <span className="wallet-item__amount">1,250</span>
                        <span className="wallet-item__label">GEMS</span>
                    </div>
                    <GamifyButton variant="outline" size="sm">+ Add Funds</GamifyButton>
                </div>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
                {/* Featured Section */}
                <div className="section-header">
                    <h2 className="section-title">🔥 Featured Deals</h2>
                    <GamifyBadge variant="legendary">LIMITED TIME</GamifyBadge>
                </div>

                <div className="featured-grid">
                    {featuredItems.map((item) => (
                        <GamifyCard key={item.id} variant="cyber" className="featured-card">
                            {item.originalCost && (
                                <div className="featured-card__discount">
                                    -{Math.round((1 - item.cost / item.originalCost) * 100)}%
                                </div>
                            )}
                            <div className="featured-card__content">
                                <div className="featured-card__image">
                                    <InventorySlot rarity={item.rarity} itemSrc={item.img} size="lg" />
                                </div>
                                <div className="featured-card__info">
                                    <div className="featured-card__header">
                                        <h3>{item.name}</h3>
                                        <GamifyBadge variant={item.rarity}>{item.rarity}</GamifyBadge>
                                    </div>
                                    <p className="featured-card__desc">{item.description}</p>
                                    <div className="featured-card__stats">
                                        {item.stats?.map((stat, idx) => (
                                            <div key={idx} className="stat-pill">
                                                <span className="stat-pill__label">{stat.label}</span>
                                                <span className="stat-pill__value">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="featured-card__footer">
                                        <div className="featured-card__price">
                                            {item.originalCost && (
                                                <span className="price-original">{item.originalCost.toLocaleString()}</span>
                                            )}
                                            <span className="price-current">💰 {item.cost.toLocaleString()}</span>
                                        </div>
                                        <GamifyButton variant="legendary" onClick={() => addToCart(item.id)}>
                                            BUY NOW
                                        </GamifyButton>
                                    </div>
                                </div>
                            </div>
                        </GamifyCard>
                    ))}
                </div>

                {/* Category Tabs */}
                <div style={{ marginTop: '3rem' }}>
                    <GamifyTabs tabs={tabs} activeTabId={activeTabId} onTabChange={setActiveTabId} />
                </div>

                {/* Items Grid */}
                <div className="items-grid">
                    {filteredItems.map((item) => (
                        <GamifyCard key={item.id} className="item-card">
                            {item.limited && <div className="item-card__limited">⏰ LIMITED</div>}
                            <div className="item-card__top">
                                <GamifyTooltip content={item.description}>
                                    <InventorySlot rarity={item.rarity} itemSrc={item.img} size="lg" />
                                </GamifyTooltip>
                                <span className="item-card__category">{CATEGORY_ICONS[item.category]}</span>
                            </div>
                            <div className="item-card__info">
                                <h4 className="item-card__name">{item.name}</h4>
                                <span className="item-card__desc">{item.description}</span>
                                <GamifyBadge variant={item.rarity}>{item.rarity}</GamifyBadge>
                            </div>
                            {item.stats && (
                                <div className="item-card__stats">
                                    {item.stats.map((stat, idx) => (
                                        <span key={idx} className="mini-stat">
                                            {stat.label}: <strong>{stat.value}</strong>
                                        </span>
                                    ))}
                                </div>
                            )}
                            <div className="item-card__footer">
                                <span className="item-card__price">💰 {item.cost.toLocaleString()}</span>
                                <GamifyButton size="sm" onClick={() => addToCart(item.id)}>BUY</GamifyButton>
                            </div>
                        </GamifyCard>
                    ))}
                </div>
            </div>

            <style>{`
                .store-page {
                    min-height: 100vh;
                }

                .store-banner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2rem 3rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(234, 88, 12, 0.15)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .store-banner__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 2.5rem;
                    color: var(--gamify-text-primary);
                    letter-spacing: 3px;
                }

                .store-banner__subtitle {
                    color: var(--gamify-text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .store-banner__wallet {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .wallet-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.2rem;
                }

                .wallet-item__icon {
                    font-size: 1.5rem;
                }

                .wallet-item__amount {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.4rem;
                    color: var(--gamify-neon-yellow);
                }

                .wallet-item__label {
                    font-size: 0.7rem;
                    color: var(--gamify-text-muted);
                    text-transform: uppercase;
                }

                /* Featured */
                .featured-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .featured-card {
                    position: relative;
                }

                .featured-card__discount {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: #ef4444;
                    color: white;
                    padding: 0.3rem 0.8rem;
                    border-radius: 4px;
                    font-family: var(--gamify-font-heading);
                    font-size: 0.9rem;
                    z-index: 10;
                }

                .featured-card__content {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }

                .featured-card__image {
                    flex-shrink: 0;
                }

                .featured-card__info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .featured-card__header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .featured-card__header h3 {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.3rem;
                    color: var(--gamify-text-primary);
                }

                .featured-card__desc {
                    color: var(--gamify-text-secondary);
                    font-size: 0.9rem;
                }

                .featured-card__stats {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .stat-pill {
                    background: rgba(99, 102, 241, 0.15);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px;
                    display: flex;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                }

                .stat-pill__label {
                    color: var(--gamify-text-muted);
                }

                .stat-pill__value {
                    color: var(--gamify-neon-green);
                    font-weight: bold;
                }

                .featured-card__footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 0.5rem;
                }

                .featured-card__price {
                    display: flex;
                    flex-direction: column;
                }

                .price-original {
                    text-decoration: line-through;
                    color: var(--gamify-text-muted);
                    font-size: 0.85rem;
                }

                .price-current {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.3rem;
                    color: var(--gamify-neon-yellow);
                }

                /* Items Grid */
                .items-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                    gap: 1.5rem;
                }

                .item-card {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    position: relative;
                }

                .item-card__limited {
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background: #ef4444;
                    color: white;
                    padding: 0.2rem 0.5rem;
                    border-radius: 4px;
                    font-size: 0.7rem;
                    font-weight: bold;
                }

                .item-card__top {
                    display: flex;
                    justify-content: center;
                    position: relative;
                }

                .item-card__category {
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: 1.2rem;
                }

                .item-card__info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.25rem;
                }

                .item-card__name {
                    font-family: var(--gamify-font-heading);
                    font-size: 1rem;
                    color: var(--gamify-text-primary);
                }

                .item-card__desc {
                    display: none; /* Hidden on desktop, shown on mobile */
                    font-size: 0.75rem;
                    color: var(--gamify-text-muted);
                    width: 100%;
                }

                .item-card__stats {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .mini-stat {
                    font-size: 0.75rem;
                    color: var(--gamify-text-secondary);
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.2rem 0.5rem;
                    border-radius: 4px;
                }

                .mini-stat strong {
                    color: var(--gamify-neon-green);
                }

                .item-card__footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: auto;
                    padding-top: 0.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .item-card__price {
                    font-family: var(--gamify-font-heading);
                    color: var(--gamify-neon-yellow);
                }

                /* Light mode */
                [data-theme='light'] .store-banner {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(234, 88, 12, 0.08)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                    border-bottom-color: rgba(0, 0, 0, 0.1);
                }

                [data-theme='light'] .item-card__footer {
                    border-top-color: rgba(0, 0, 0, 0.1);
                }

                [data-theme='light'] .mini-stat {
                    background: rgba(99, 102, 241, 0.1);
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .store-banner {
                        padding: 2rem 1rem;
                    }

                    .store-banner__title {
                        font-size: 1.8rem;
                    }

                    .store-content {
                        padding: 1rem;
                    }

                    .featured-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .featured-card__content {
                        flex-direction: column;
                        text-align: left; /* Align left */
                        gap: 1rem;
                        align-items: flex-start;
                        width: 100%;
                    }
                    
                    .featured-card__info {
                        width: 100%; /* Critical for footer alignment */
                    }

                    .featured-card__header {
                        justify-content: flex-start; /* Align header left */
                        flex-wrap: wrap;
                    }

                    .featured-card__header h3 {
                        font-size: 1.1rem;
                    }

                    .featured-card__stats {
                        justify-content: flex-start; /* Align stats left */
                    }

                    .featured-card__footer {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 0.5rem;
                    }

                    .featured-card__price {
                       margin-right: auto; /* Push price to left */
                    }

                    .featured-card__footer button {
                        margin-left: auto; /* Push button to right end */
                    }

                    .items-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.5rem;
                    }

                    .item-card__body {
                        padding: 0.5rem;
                    }

                    .item-card__name {
                        font-size: 0.85rem;
                        text-align: left; /* Ensure left align */
                    }

                    .item-card__info {
                        align-items: flex-start; /* Fix title alignment */
                        text-align: left;
                    }

                    .item-card__stats {
                        justify-content: flex-start; /* Fix stats alignment */
                    }

                    .item-card__category {
                        font-size: 0.6rem;
                    }

                    .item-card__footer {
                        padding: 0.5rem;
                        flex-direction: column;
                        gap: 0.5rem;
                    }

                    .mini-stat {
                        padding: 0.15rem 0.4rem;
                        font-size: 0.6rem;
                    }

                    .section-title {
                        font-size: 1.2rem;
                    }
                }

                @media (max-width: 480px) {
                    .store-banner {
                        padding: 1.5rem 0.75rem;
                    }

                    .store-banner__title {
                        font-size: 1.4rem;
                    }

                    .store-content {
                        padding: 0.5rem;
                    }

                    .featured-card__discount {
                        padding: 0.2rem 0.5rem;
                        font-size: 0.75rem;
                    }

                    .featured-card__header h3 {
                        font-size: 1rem;
                    }

                    .featured-card__desc {
                        font-size: 0.8rem;
                    }

                    .stat-pill {
                        padding: 0.2rem 0.4rem;
                        font-size: 0.7rem;
                    }

                    /* List view for items on small screens */
                    .items-grid {
                        grid-template-columns: 1fr;
                        gap: 0.75rem;
                    }

                    /* List view with Grid Areas */
                    .item-card {
                        display: grid;
                        grid-template-columns: 90px 1fr;
                        grid-template-rows: auto auto;
                        grid-template-areas:
                            "image info"
                            "image footer";
                        padding: 0.75rem;
                        gap: 0.5rem 1rem;
                        min-height: auto;
                        align-items: start;
                    }

                    .item-card__top {
                        grid-area: image;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                    }

                    .item-card__info {
                        grid-area: info;
                        display: flex;
                        flex-direction: column;
                        gap: 0.25rem;
                        min-width: 0;
                        align-items: flex-start; /* Fix title/desc alignment issue inherited from desktop */
                    }

                    .item-card__name {
                        font-size: 1rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        text-align: left;
                    }

                    .item-card__desc {
                        display: block;
                        font-size: 0.75rem;
                        color: var(--gamify-text-muted);
                        line-height: 1.3;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        margin-bottom: 0.25rem;
                    }

                    /* Rarity Badge - Ensure visibility */
                    .item-card__info .gamify-badge {
                        display: inline-flex;
                        align-self: flex-start;
                        font-size: 0.65rem;
                        padding: 0.15rem 0.6rem;
                        margin-top: 0;
                        margin-bottom: 0;
                    }

                    .item-card__stats {
                        display: flex;
                        flex-direction: row; /* Force horizontal */
                        flex-wrap: wrap;
                        gap: 0.5rem; /* Little more gap */
                        margin-top: 0.25rem;
                        align-items: center;
                        width: 100%; /* Ensure it spans */
                    }

                    .mini-stat {
                        display: inline-flex; /* Treat as block for flex calculation layout */
                        align-items: center;
                        padding: 0.15rem 0.5rem;
                        font-size: 0.65rem;
                        background: rgba(255, 255, 255, 0.08);
                        border-radius: 4px;
                        white-space: nowrap;
                    }

                    .item-card__footer {
                        grid-area: footer;
                        display: flex;
                        flex-direction: row; /* Horizontal alignment */
                        align-items: center;
                        justify-content: space-between; /* Spread Price and Buy */
                        border-top: 1px solid rgba(255, 255, 255, 0.05); /* Proper separation */
                        padding-top: 0.5rem;
                        margin-top: 0.25rem;
                        width: 100%;
                    }

                    .item-card__price {
                        font-size: 1rem;
                        font-weight: bold;
                        color: var(--gamify-neon-yellow);
                    }

                    /* Better limited tag position */
                    .item-card__limited {
                        top: 0;
                        right: 0;
                        border-radius: 0 0 0 8px;
                        font-size: 0.65rem;
                        padding: 0.15rem 0.6rem;
                    }
                }
            `}</style>
        </div>
    );
};
