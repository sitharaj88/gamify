import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GamifyCard } from '../components/GamifyCard/GamifyCard';
import { GamifyButton } from '../components/GamifyButton/GamifyButton';
import { GamifyBadge } from '../components/GamifyBadge/GamifyBadge';

export const GetStartedPage: React.FC = () => {
    const navigate = useNavigate();
    const installCode = `npm install @sitharaj08/gamify`;

    const basicUsage = `import { GamifyButton, GamifyCard, GamifyBadge } from '@sitharaj08/gamify';
import '@sitharaj08/gamify/styles.css';

function App() {
  return (
    <GamifyCard variant="cyber">
      <h2>Welcome</h2>
      <GamifyBadge variant="legendary">PRO</GamifyBadge>
      <GamifyButton variant="primary">Get Started</GamifyButton>
    </GamifyCard>
  );
}`;

    const themeSetup = `import { GamifyThemeProvider, GamifyThemeToggle } from '@sitharaj08/gamify';

function App() {
  return (
    <GamifyThemeProvider>
      <GamifyThemeToggle />
      {/* Your app content */}
    </GamifyThemeProvider>
  );
}`;

    return (
        <div className="docs-page">
            <div className="docs-banner">
                <h1 className="docs-banner__title">🚀 Get Started</h1>
                <p className="docs-banner__subtitle">Set up Gamify UI in your React project</p>
            </div>

            <div className="docs-content">
                {/* Installation */}
                <section className="docs-section">
                    <h2 className="docs-section__title">
                        <span className="docs-section__number">01</span>
                        Installation
                    </h2>
                    <p className="docs-section__desc">
                        Install Gamify UI using your preferred package manager:
                    </p>
                    <div className="code-block">
                        <div className="code-block__header">
                            <span>Terminal</span>
                            <GamifyBadge variant="epic">npm</GamifyBadge>
                        </div>
                        <pre className="code-block__code">
                            <code>{installCode}</code>
                        </pre>
                    </div>
                </section>

                {/* Basic Usage */}
                <section className="docs-section">
                    <h2 className="docs-section__title">
                        <span className="docs-section__number">02</span>
                        Basic Usage
                    </h2>
                    <p className="docs-section__desc">
                        Import components and styles to start building your gaming UI:
                    </p>
                    <div className="code-block">
                        <div className="code-block__header">
                            <span>App.tsx</span>
                            <GamifyBadge variant="rare">TypeScript</GamifyBadge>
                        </div>
                        <pre className="code-block__code">
                            <code>{basicUsage}</code>
                        </pre>
                    </div>
                    <GamifyCard variant="cyber" style={{ marginTop: '1rem' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Preview</h3>
                        <GamifyBadge variant="legendary">PRO</GamifyBadge>
                        <GamifyButton variant="primary" style={{ marginTop: '1rem' }}>Get Started</GamifyButton>
                    </GamifyCard>
                </section>

                {/* Theme Setup */}
                <section className="docs-section">
                    <h2 className="docs-section__title">
                        <span className="docs-section__number">03</span>
                        Theme Setup
                    </h2>
                    <p className="docs-section__desc">
                        Wrap your app with the theme provider for dark/light mode support:
                    </p>
                    <div className="code-block">
                        <div className="code-block__header">
                            <span>main.tsx</span>
                            <GamifyBadge variant="rare">TypeScript</GamifyBadge>
                        </div>
                        <pre className="code-block__code">
                            <code>{themeSetup}</code>
                        </pre>
                    </div>
                </section>

                {/* Features */}
                <section className="docs-section">
                    <h2 className="docs-section__title">
                        <span className="docs-section__number">04</span>
                        Features
                    </h2>
                    <div className="features-grid">
                        <GamifyCard className="feature-item">
                            <span className="feature-item__icon">🎨</span>
                            <h4>Dual Themes</h4>
                            <p>Cyberpunk Dark & Holographic Light modes</p>
                        </GamifyCard>
                        <GamifyCard className="feature-item">
                            <span className="feature-item__icon">⚔️</span>
                            <h4>Game Components</h4>
                            <p>Health bars, inventory slots, quest logs</p>
                        </GamifyCard>
                        <GamifyCard className="feature-item">
                            <span className="feature-item__icon">🏆</span>
                            <h4>Rarity System</h4>
                            <p>Common to Mythic color schemes</p>
                        </GamifyCard>
                        <GamifyCard className="feature-item">
                            <span className="feature-item__icon">📱</span>
                            <h4>Responsive</h4>
                            <p>Mobile-first design approach</p>
                        </GamifyCard>
                        <GamifyCard className="feature-item">
                            <span className="feature-item__icon">♿</span>
                            <h4>Accessible</h4>
                            <p>ARIA labels & keyboard navigation</p>
                        </GamifyCard>
                        <GamifyCard className="feature-item">
                            <span className="feature-item__icon">⚡</span>
                            <h4>Performant</h4>
                            <p>Tree-shakeable & optimized builds</p>
                        </GamifyCard>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="docs-section">
                    <GamifyCard variant="neon">
                        <h3>📚 Next Steps</h3>
                        <p style={{ margin: '1rem 0' }}>
                            Explore all available components in the Components section.
                        </p>
                        <GamifyButton variant="primary" onClick={() => navigate('/components')}>
                            View Components →
                        </GamifyButton>
                    </GamifyCard>
                </section>
            </div>

            <style>{`
                .docs-page {
                    min-height: 100vh;
                }

                .docs-banner {
                    padding: 3rem 2rem;
                    text-align: center;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(34, 197, 94, 0.1));
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .docs-banner__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 2.5rem;
                    color: var(--gamify-text-primary);
                    letter-spacing: 2px;
                }

                .docs-banner__subtitle {
                    color: var(--gamify-text-secondary);
                    margin-top: 0.5rem;
                }

                .docs-content {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 2rem;
                }

                .docs-section {
                    margin-bottom: 3rem;
                }

                .docs-section__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.5rem;
                    color: var(--gamify-text-primary);
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .docs-section__number {
                    background: linear-gradient(135deg, var(--gamify-neon-cyan), var(--gamify-neon-pink));
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 1.2rem;
                }

                .docs-section__desc {
                    color: var(--gamify-text-secondary);
                    margin-bottom: 1rem;
                    line-height: 1.6;
                }

                .code-block {
                    background: rgba(0, 0, 0, 0.4);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    overflow: hidden;
                }

                .code-block__header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.8rem 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    font-size: 0.85rem;
                    color: var(--gamify-text-muted);
                }

                .code-block__code {
                    padding: 1rem;
                    margin: 0;
                    overflow-x: auto;
                    font-family: 'Fira Code', 'Consolas', monospace;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: var(--gamify-neon-cyan);
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                }

                .feature-item {
                    text-align: center;
                    padding: 1.5rem !important;
                }

                .feature-item__icon {
                    font-size: 2rem;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .feature-item h4 {
                    color: var(--gamify-text-primary);
                    margin-bottom: 0.3rem;
                }

                .feature-item p {
                    color: var(--gamify-text-muted);
                    font-size: 0.85rem;
                }

                /* Light mode */
                [data-theme='light'] .docs-banner {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(34, 197, 94, 0.05));
                    border-bottom-color: rgba(0, 0, 0, 0.1);
                }

                [data-theme='light'] .code-block {
                    background: rgba(30, 27, 75, 0.05);
                    border-color: rgba(99, 102, 241, 0.2);
                }

                [data-theme='light'] .code-block__header {
                    background: rgba(99, 102, 241, 0.1);
                    border-bottom-color: rgba(99, 102, 241, 0.2);
                }

                [data-theme='light'] .code-block__code {
                    color: #4338ca;
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .docs-banner {
                        padding: 2rem 1rem;
                    }

                    .docs-banner__title {
                        font-size: 1.8rem;
                    }

                    .docs-content {
                        padding: 1rem;
                    }

                    .docs-section {
                        margin-bottom: 2rem;
                    }

                    .docs-section__title {
                        font-size: 1.2rem;
                    }

                    .code-block__code {
                        font-size: 0.75rem;
                    }

                    .features-grid {
                        grid-template-columns: 1fr 1fr;
                    }

                    .feature-item {
                        padding: 1rem !important;
                    }

                    .feature-item__icon {
                        font-size: 1.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .docs-banner {
                        padding: 1.5rem 0.75rem;
                    }

                    .docs-banner__title {
                        font-size: 1.5rem;
                    }

                    .docs-content {
                        padding: 0.75rem;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                    }

                    .code-block__header {
                        padding: 0.5rem 0.75rem;
                    }

                    .code-block__code {
                        padding: 0.75rem;
                        font-size: 0.7rem;
                    }
                }
            `}</style>
        </div>
    );
};
