import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GamifyButton } from '../components/GamifyButton/GamifyButton';
import { GamifyCard } from '../components/GamifyCard/GamifyCard';
import { GamifyBadge } from '../components/GamifyBadge/GamifyBadge';
import { GamifyAvatar } from '../components/GamifyAvatar/GamifyAvatar';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const features = [
        { icon: '🛡️', title: 'Robust Components', desc: 'Health Bars, Inventory Slots, Quest Logs - all built for gaming.', color: 'var(--gamify-neon-cyan)', variant: 'cyber' as const },
        { icon: '🎨', title: 'Theme Engine', desc: 'Cyberpunk Dark and Holographic Day modes with seamless switching.', color: 'var(--gamify-neon-pink)', variant: 'neon' as const },
        { icon: '⚡', title: 'High Performance', desc: 'Powered by Vite with 60fps animations and optimized renders.', color: 'var(--gamify-neon-green)', variant: 'default' as const },
        { icon: '🎮', title: 'Game-Ready', desc: 'Avatar ranks, rarity colors, XP bars - designed for RPGs.', color: 'var(--gamify-neon-yellow)', variant: 'cyber' as const },
        { icon: '🌙', title: 'Dark Mode First', desc: 'Built from the ground up with dark theme as the default.', color: 'var(--gamify-neon-cyan)', variant: 'default' as const },
        { icon: '📱', title: 'Fully Responsive', desc: 'Works beautifully on desktop, tablet, and mobile devices.', color: 'var(--gamify-neon-pink)', variant: 'neon' as const },
    ];

    const pages = [
        { name: 'Heroes', icon: '⚔️', desc: 'Champion roster with stats', path: '/heroes', badge: '6 Heroes' },
        { name: 'Leaderboard', icon: '🏆', desc: 'Global rankings & tiers', path: '/leaderboard', badge: 'Live' },
        { name: 'Store', icon: '🛒', desc: 'Items, weapons & gear', path: '/store', badge: 'New Items' },
        { name: 'Hub', icon: '🎯', desc: 'Quests & social feed', path: '/hub', badge: 'Active' },
        { name: 'Settings', icon: '⚙️', desc: 'System configuration', path: '/settings', badge: '4 Categories' },
    ];

    const topPlayers = [
        { name: 'Cyber Knight', rank: 'legendary' as const, score: '99,999' },
        { name: 'Neon Ninja', rank: 'epic' as const, score: '85,000' },
        { name: 'Pixel Mage', rank: 'rare' as const, score: '72,000' },
    ];

    return (
        <div className="home-page">
            {/* HERO SECTION */}
            <header className='home-hero'>
                <div className="hero-glow" />
                <div className="hero-content">
                    <GamifyBadge variant='mythic' style={{ marginBottom: '1rem' }}>✨ VERSION 1.0.0 RELEASED</GamifyBadge>
                    <h1 className='home-hero__title'>
                        <span className="title-line">WELCOME TO</span>
                        <span className="title-main">GAMIFY UI</span>
                    </h1>
                    <p className='home-hero__subtitle'>
                        The Ultimate UI Kit for Gaming Applications
                    </p>
                    <p className="home-hero__desc">
                        Build immersive, high-performance interfaces with our cyberpunk-inspired
                        React component library. Fully accessible, theme-ready, and designed
                        for the next generation of web3 gaming.
                    </p>
                    <div className="hero-actions">
                        <GamifyButton variant='legendary' size='lg' onClick={() => navigate('/hub')}>
                            🚀 ENTER HUB
                        </GamifyButton>
                        <GamifyButton variant='outline' size='lg' onClick={() => navigate('/heroes')}>
                            ⚔️ VIEW HEROES
                        </GamifyButton>
                    </div>
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat__value">25+</span>
                            <span className="hero-stat__label">Components</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat__value">2</span>
                            <span className="hero-stat__label">Themes</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat__value">5</span>
                            <span className="hero-stat__label">Pages</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat__value">∞</span>
                            <span className="hero-stat__label">Possibilities</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* QUICK NAVIGATION */}
            <section className="home-section">
                <h2 className='section-title'>🎮 EXPLORE THE WORLD</h2>
                <div className="nav-grid">
                    {pages.map((page) => (
                        <GamifyCard
                            key={page.name}
                            className="nav-card hover-scale"
                            onClick={() => navigate(page.path)}
                        >
                            <div className="nav-card__icon">{page.icon}</div>
                            <div className="nav-card__info">
                                <h3 className="nav-card__title">{page.name}</h3>
                                <p className="nav-card__desc">{page.desc}</p>
                            </div>
                            <GamifyBadge variant='epic'>{page.badge}</GamifyBadge>
                        </GamifyCard>
                    ))}
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="home-section home-section--alt">
                <h2 className='section-title'>⚡ CORE FEATURES</h2>
                <div className='features-grid'>
                    {features.map((feature, idx) => (
                        <GamifyCard key={idx} variant={feature.variant} className='feature-card hover-scale'>
                            <div className="feature-card__icon" style={{ color: feature.color }}>{feature.icon}</div>
                            <h3 className="feature-card__title" style={{ color: feature.color }}>{feature.title}</h3>
                            <p className="feature-card__desc">{feature.desc}</p>
                        </GamifyCard>
                    ))}
                </div>
            </section>

            {/* TOP PLAYERS PREVIEW */}
            <section className="home-section">
                <div className="section-header">
                    <h2 className='section-title'>🏆 TOP PLAYERS</h2>
                    <GamifyButton variant='ghost' size='sm' onClick={() => navigate('/leaderboard')}>
                        View All →
                    </GamifyButton>
                </div>
                <div className="players-preview">
                    {topPlayers.map((player, idx) => (
                        <GamifyCard key={idx} variant={idx === 0 ? 'cyber' : 'default'} className="player-preview-card">
                            <div className="player-preview__rank">#{idx + 1}</div>
                            <GamifyAvatar
                                src={`https://ui-avatars.com/api/?name=${player.name.replace(' ', '+')}&background=${idx === 0 ? 'ff8000' : idx === 1 ? 'a335ee' : '0070dd'}&color=fff&size=64&bold=true`}
                                alt={player.name}
                                size="lg"
                                rank={player.rank}
                            />
                            <div className="player-preview__info">
                                <span className="player-preview__name">{player.name}</span>
                                <GamifyBadge variant={player.rank}>{player.rank}</GamifyBadge>
                            </div>
                            <div className="player-preview__score">{player.score}</div>
                        </GamifyCard>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="home-cta">
                <div className="cta-content">
                    <h2 className="cta-title">READY TO BEGIN?</h2>
                    <p className="cta-desc">Start your adventure and become a legend.</p>
                    <GamifyButton variant='legendary' size='lg' onClick={() => navigate('/hub')}>
                        🎮 START PLAYING
                    </GamifyButton>
                </div>
            </section>

            <style>{`
                .home-page {
                    min-height: 100vh;
                }

                /* Hero Section */
                .home-hero {
                    position: relative;
                    text-align: center;
                    padding: 6rem 2rem 4rem;
                    overflow: hidden;
                }

                .hero-glow {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
                    pointer-events: none;
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .home-hero__title {
                    font-family: var(--gamify-font-heading);
                    margin-bottom: 1rem;
                }

                .title-line {
                    display: block;
                    font-size: 1.5rem;
                    color: var(--gamify-text-secondary);
                    letter-spacing: 8px;
                }

                .title-main {
                    display: block;
                    font-size: 5rem;
                    background: linear-gradient(135deg, var(--gamify-neon-cyan), var(--gamify-neon-pink));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-shadow: none;
                    filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.5));
                    animation: glow-pulse 3s ease-in-out infinite;
                }

                @keyframes glow-pulse {
                    0%, 100% { filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.3)); }
                    50% { filter: drop-shadow(0 0 40px rgba(99, 102, 241, 0.6)); }
                }

                .home-hero__subtitle {
                    font-size: 1.3rem;
                    color: var(--gamify-text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    margin-bottom: 1.5rem;
                }

                .home-hero__desc {
                    color: var(--gamify-text-muted);
                    max-width: 600px;
                    margin: 0 auto 2rem;
                    line-height: 1.7;
                }

                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    margin-bottom: 3rem;
                }

                .hero-stats {
                    display: flex;
                    justify-content: center;
                    gap: 3rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .hero-stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .hero-stat__value {
                    font-family: var(--gamify-font-heading);
                    font-size: 2rem;
                    color: var(--gamify-neon-cyan);
                }

                .hero-stat__label {
                    font-size: 0.8rem;
                    color: var(--gamify-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                /* Sections */
                .home-section {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 4rem 2rem;
                }

                .home-section--alt {
                    background: rgba(99, 102, 241, 0.03);
                    max-width: 100%;
                }

                .home-section--alt > * {
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Navigation Grid */
                .nav-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1rem;
                }

                .nav-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    cursor: pointer;
                }

                .nav-card__icon {
                    font-size: 2.5rem;
                    flex-shrink: 0;
                }

                .nav-card__info {
                    flex: 1;
                }

                .nav-card__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.1rem;
                    color: var(--gamify-text-primary);
                    margin-bottom: 0.2rem;
                }

                .nav-card__desc {
                    font-size: 0.85rem;
                    color: var(--gamify-text-muted);
                }

                /* Features Grid */
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .feature-card {
                    text-align: center;
                    padding: 2rem !important;
                }

                .feature-card__icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .feature-card__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }

                .feature-card__desc {
                    color: var(--gamify-text-secondary);
                    font-size: 0.9rem;
                }

                /* Players Preview */
                .players-preview {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1rem;
                }

                .player-preview-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .player-preview__rank {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.5rem;
                    color: var(--gamify-neon-yellow);
                    width: 40px;
                    text-align: center;
                }

                .player-preview__info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }

                .player-preview__name {
                    font-weight: 600;
                    color: var(--gamify-text-primary);
                }

                .player-preview__score {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.3rem;
                    color: var(--gamify-neon-cyan);
                }

                /* CTA Section */
                .home-cta {
                    text-align: center;
                    padding: 5rem 2rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(162, 28, 175, 0.1));
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .cta-title {
                    font-family: var(--gamify-font-heading);
                    font-size: 2.5rem;
                    color: var(--gamify-text-primary);
                    margin-bottom: 0.5rem;
                }

                .cta-desc {
                    color: var(--gamify-text-secondary);
                    margin-bottom: 2rem;
                }

                /* Light mode */
                [data-theme='light'] .hero-glow {
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
                }

                [data-theme='light'] .hero-stats {
                    border-top-color: rgba(0, 0, 0, 0.1);
                }

                [data-theme='light'] .home-section--alt {
                    background: rgba(99, 102, 241, 0.02);
                }

                [data-theme='light'] .home-cta {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(162, 28, 175, 0.05));
                    border-top-color: rgba(0, 0, 0, 0.1);
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .home-hero {
                        padding: 3rem 1rem 2rem;
                    }

                    .title-line {
                        font-size: 1rem;
                    }

                    .title-main {
                        font-size: 2.5rem;
                    }

                    .home-hero__subtitle {
                        font-size: 1rem;
                        letter-spacing: 2px;
                    }

                    .home-hero__desc {
                        font-size: 0.9rem;
                    }

                    .hero-actions {
                        flex-direction: column;
                        align-items: center;
                        gap: 0.75rem;
                    }

                    .hero-stats {
                        gap: 1.5rem;
                        flex-wrap: wrap;
                    }

                    .home-section {
                        padding: 2rem 1rem;
                    }

                    .section-header {
                        margin-bottom: 1.5rem;
                    }

                    .section-title {
                        font-size: 1.3rem;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .pages-grid {
                        grid-template-columns: 1fr;
                        gap: 0.75rem;
                    }

                    .home-cta {
                        padding: 2.5rem 1rem;
                    }

                    .cta-title {
                        font-size: 1.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .home-hero {
                        padding: 2rem 0.75rem 1.5rem;
                    }

                    .title-main {
                        font-size: 2rem;
                    }

                    .hero-stat__value {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};
