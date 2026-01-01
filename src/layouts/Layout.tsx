import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { GamifyBadge } from '../components/GamifyBadge/GamifyBadge';
import { GamifyAvatar } from '../components/GamifyAvatar/GamifyAvatar';
import { GamifyThemeToggle } from '../components/GamifyThemeToggle/GamifyThemeToggle';
import { GamifyToastProvider } from '../components/GamifyToast/GamifyToast';
import { GamifyShareFab } from '../components/GamifyShareFab/GamifyShareFab';
import { GamifyModal } from '../components/GamifyModal/GamifyModal';
import { GamifySpinner } from '../components/GamifySpinner/GamifySpinner';
import { GamifyThemeProvider } from '../theme/GamifyThemeContext';

const NAV_LINKS = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/hub', label: 'Hub', icon: '🎯' },
    { path: '/heroes', label: 'Heroes', icon: '⚔️' },
    { path: '/leaderboard', label: 'Ranks', icon: '🏆' },
    { path: '/store', label: 'Store', icon: '🛒' },
    { path: '/get-started', label: 'Docs', icon: '📚' },
    { path: '/components', label: 'Components', icon: '🧩' },
];

export const Layout: React.FC = () => {
    const location = useLocation();
    const [isSystemModalOpen, setIsSystemModalOpen] = useState(false);
    const [isCheckingSystem, setIsCheckingSystem] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleSystemCheck = () => {
        setIsSystemModalOpen(true);
        setIsCheckingSystem(true);
        setTimeout(() => setIsCheckingSystem(false), 2000);
    };

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <GamifyThemeProvider>
            <GamifyToastProvider>
                <div className='app-container'>
                    {/* GLOBAL NAVIGATION */}
                    <nav className='gamify-nav'>
                        <NavLink to="/" className='gamify-nav__logo'>GAMIFY</NavLink>



                        {/* Desktop Nav Links */}
                        <div className='gamify-nav__links gamify-nav__links--desktop'>
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `gamify-nav__link ${isActive && location.pathname === link.path ? 'gamify-nav__link--active' : ''}`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className='gamify-nav__actions'>
                            <GamifyThemeToggle />
                            <button
                                onClick={handleSystemCheck}
                                className='gamify-nav__sys-btn'
                                title="System Check"
                            >
                                SYS
                            </button>
                            <GamifyBadge variant='legendary'>PRO</GamifyBadge>
                            <GamifyAvatar
                                src='https://ui-avatars.com/api/?name=CK&background=ff8000&color=fff&size=64&bold=true'
                                alt='Me'
                                size='sm'
                                status='online'
                            />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className='gamify-nav__mobile-toggle'
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </nav>

                    {/* Mobile Menu Overlay */}
                    {isMobileMenuOpen && (
                        <div className='gamify-mobile-menu'>
                            <div className='gamify-mobile-menu__content'>
                                {NAV_LINKS.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `gamify-mobile-menu__link ${isActive ? 'gamify-mobile-menu__link--active' : ''}`
                                        }
                                        onClick={closeMobileMenu}
                                    >
                                        <span className='gamify-mobile-menu__icon'>{link.icon}</span>
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* PAGE CONTENT */}
                    <main className='gamify-main'>
                        <Outlet />
                    </main>

                    {/* FOOTER */}
                    <footer className='gamify-footer'>
                        <div className='gamify-footer__content'>
                            <div className='gamify-footer__brand'>
                                <span className='gamify-footer__logo'>GAMIFY</span>
                                <p className='gamify-footer__tagline'>The Ultimate Gaming UI Kit</p>
                                <p className='gamify-footer__author'>Created by <strong>Sitharaj Seenivasan</strong></p>
                            </div>
                            <div className='gamify-footer__links'>
                                <div className='gamify-footer__column'>
                                    <h4>Explore</h4>
                                    <NavLink to="/heroes">Heroes</NavLink>
                                    <NavLink to="/store">Store</NavLink>
                                    <NavLink to="/leaderboard">Leaderboard</NavLink>
                                </div>
                                <div className='gamify-footer__column'>
                                    <h4>Documentation</h4>
                                    <NavLink to="/get-started">Get Started</NavLink>
                                    <NavLink to="/components">Components</NavLink>
                                    <NavLink to="/hub">Dashboard</NavLink>
                                </div>
                                <div className='gamify-footer__column'>
                                    <h4>Connect</h4>
                                    <a href="https://github.com/sitharaj88" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href="https://x.com/sitharaj88" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                                    <a href="https://linkedin.com/in/sitharaj08" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    <a href="https://discord.com/users/sitharaj88" target="_blank" rel="noopener noreferrer">Discord</a>
                                    <a href="https://sitharaj.in" target="_blank" rel="noopener noreferrer">Website</a>
                                </div>
                            </div>
                        </div>
                        <div className='gamify-footer__bottom'>
                            <p>© 2026 <a href="https://sitharaj.in" target="_blank" rel="noopener noreferrer">Sitharaj Seenivasan</a>. All rights reserved.</p>
                            <div className='gamify-footer__badges'>
                                <GamifyBadge variant='legendary'>v1.0.0</GamifyBadge>
                                <GamifyBadge variant='rare'>React 19</GamifyBadge>
                            </div>
                        </div>
                    </footer>

                    <GamifyShareFab />

                    {/* GLOBAL SYSTEM MODAL */}
                    <GamifyModal
                        isOpen={isSystemModalOpen}
                        onClose={() => setIsSystemModalOpen(false)}
                        title="System Diagnostics"
                        variant="alert"
                    >
                        <p>Running core system diagnostics...</p>
                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                            {isCheckingSystem ? (
                                <>
                                    <GamifySpinner size='lg' />
                                    <span style={{ color: 'var(--gamify-neon-cyan)' }}>Scanning quantum flux...</span>
                                </>
                            ) : (
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ color: 'var(--gamify-neon-green)', marginBottom: '1rem' }}>✓ ALL SYSTEMS NOMINAL</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gamify-text-secondary)' }}>Server Latency: 12ms</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gamify-text-secondary)' }}>Packet Loss: 0.00%</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gamify-text-secondary)' }}>FPS: 144</p>
                                </div>
                            )}
                        </div>
                    </GamifyModal>
                </div>

                <style>{`
                    /* Mobile Menu Toggle */
                    .gamify-nav__mobile-toggle {
                        display: none;
                        background: none;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        color: var(--gamify-text-primary);
                        font-size: 1.5rem;
                        padding: 0.5rem;
                        border-radius: 6px;
                        cursor: pointer;
                        transition: all 0.3s;
                    }

                    .gamify-nav__mobile-toggle:hover {
                        border-color: var(--gamify-neon-cyan);
                        color: var(--gamify-neon-cyan);
                    }

                    .gamify-nav__sys-btn {
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        color: var(--gamify-text-muted);
                        cursor: pointer;
                        font-size: 0.7rem;
                        padding: 0.3rem 0.6rem;
                        border-radius: 4px;
                        font-family: var(--gamify-font-heading);
                        transition: all 0.3s;
                    }

                    .gamify-nav__sys-btn:hover {
                        border-color: var(--gamify-neon-cyan);
                        color: var(--gamify-neon-cyan);
                    }

                    .gamify-nav__actions {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                    }

                    /* Mobile Menu */
                    .gamify-mobile-menu {
                        position: fixed;
                        top: 60px;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: var(--gamify-bg-dark);
                        z-index: 99;
                        animation: slideDown 0.3s ease;
                    }

                    .gamify-mobile-menu__content {
                        display: flex;
                        flex-direction: column;
                        padding: 1rem;
                    }

                    .gamify-mobile-menu__link {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        padding: 1rem;
                        color: var(--gamify-text-secondary);
                        text-decoration: none;
                        font-size: 1.2rem;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        transition: all 0.3s;
                    }

                    .gamify-mobile-menu__link:hover,
                    .gamify-mobile-menu__link--active {
                        color: var(--gamify-neon-cyan);
                        background: rgba(99, 102, 241, 0.1);
                    }

                    .gamify-mobile-menu__icon {
                        font-size: 1.5rem;
                    }

                    /* Main Content */
                    .gamify-main {
                        flex: 1;
                    }

                    /* Footer */
                    .gamify-footer {
                        background: rgba(5, 5, 16, 0.9);
                        border-top: 1px solid rgba(255, 255, 255, 0.05);
                        padding: 3rem 2rem 1rem;
                        margin-top: 4rem;
                    }

                    .gamify-footer__content {
                        max-width: 1200px;
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: 1fr 2fr;
                        gap: 3rem;
                        margin-bottom: 2rem;
                    }

                    .gamify-footer__logo {
                        font-family: var(--gamify-font-heading);
                        font-size: 1.5rem;
                        color: var(--gamify-neon-cyan);
                        display: block;
                        margin-bottom: 0.5rem;
                    }

                    .gamify-footer__tagline {
                        color: var(--gamify-text-muted);
                        font-size: 0.9rem;
                    }

                    .gamify-footer__author {
                        color: var(--gamify-text-secondary);
                        font-size: 0.85rem;
                        margin-top: 0.8rem;
                    }

                    .gamify-footer__author strong {
                        color: var(--gamify-neon-cyan);
                    }

                    .gamify-footer__bottom a {
                        color: var(--gamify-neon-cyan);
                        text-decoration: none;
                        transition: color 0.3s;
                    }

                    .gamify-footer__bottom a:hover {
                        color: var(--gamify-neon-pink);
                    }

                    .gamify-footer__links {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                    }

                    .gamify-footer__column h4 {
                        color: var(--gamify-text-primary);
                        font-family: var(--gamify-font-heading);
                        font-size: 0.9rem;
                        margin-bottom: 1rem;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }

                    .gamify-footer__column a {
                        display: block;
                        color: var(--gamify-text-secondary);
                        text-decoration: none;
                        font-size: 0.9rem;
                        padding: 0.3rem 0;
                        transition: color 0.3s;
                    }

                    .gamify-footer__column a:hover {
                        color: var(--gamify-neon-cyan);
                    }

                    .gamify-footer__bottom {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding-top: 1.5rem;
                        border-top: 1px solid rgba(255, 255, 255, 0.05);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .gamify-footer__bottom p {
                        color: var(--gamify-text-muted);
                        font-size: 0.85rem;
                    }

                    .gamify-footer__badges {
                        display: flex;
                        gap: 0.5rem;
                    }

                    /* Light Mode Footer */
                    [data-theme='light'] .gamify-footer {
                        background: rgba(240, 248, 255, 0.95);
                        border-top-color: rgba(99, 102, 241, 0.1);
                    }

                    [data-theme='light'] .gamify-footer__bottom {
                        border-top-color: rgba(99, 102, 241, 0.1);
                    }

                    [data-theme='light'] .gamify-mobile-menu {
                        background: var(--gamify-bg-dark);
                    }

                    [data-theme='light'] .gamify-mobile-menu__link {
                        border-bottom-color: rgba(99, 102, 241, 0.1);
                    }

                    /* Responsive */
                    @media (max-width: 768px) {
                        .gamify-nav__links--desktop {
                            display: none;
                        }

                        .gamify-nav__mobile-toggle {
                            display: block;
                        }

                        .gamify-nav__actions {
                            gap: 0.5rem;
                        }

                        .gamify-footer__content {
                            grid-template-columns: 1fr;
                            gap: 2rem;
                        }

                        .gamify-footer__links {
                            grid-template-columns: repeat(2, 1fr);
                        }

                        .gamify-footer__bottom {
                            flex-direction: column;
                            gap: 1rem;
                            text-align: center;
                        }
                    }

                    @media (max-width: 480px) {
                        .gamify-footer__links {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>
            </GamifyToastProvider>
        </GamifyThemeProvider>
    );
};
