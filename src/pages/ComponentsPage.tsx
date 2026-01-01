import React, { useState } from 'react';
import { GamifyCard } from '../components/GamifyCard/GamifyCard';
import { GamifyButton } from '../components/GamifyButton/GamifyButton';
import { GamifyBadge } from '../components/GamifyBadge/GamifyBadge';
import { GamifyAvatar } from '../components/GamifyAvatar/GamifyAvatar';
import { GamifyInput } from '../components/GamifyInput/GamifyInput';
import { GamifySwitch } from '../components/GamifySwitch/GamifySwitch';
import { GamifySlider } from '../components/GamifySlider/GamifySlider';
import { GamifyTabs } from '../components/GamifyTabs/GamifyTabs';
import { GamifyTooltip } from '../components/GamifyTooltip/GamifyTooltip';
import { GamifySpinner } from '../components/GamifySpinner/GamifySpinner';
import { HealthBar } from '../components/Game/HealthBar';
import { InventorySlot } from '../components/Game/InventorySlot';

interface ComponentDemo {
    id: string;
    name: string;
    description: string;
    code: string;
    demo: React.ReactNode;
}

export const ComponentsPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState('buttons');
    const [sliderValue, setSliderValue] = useState(50);
    const [switchValue, setSwitchValue] = useState(true);

    const sections = [
        { id: 'buttons', label: 'Buttons' },
        { id: 'cards', label: 'Cards' },
        { id: 'badges', label: 'Badges' },
        { id: 'avatars', label: 'Avatars' },
        { id: 'inputs', label: 'Inputs' },
        { id: 'game', label: 'Game' },
        { id: 'feedback', label: 'Feedback' },
    ];

    const components: Record<string, ComponentDemo[]> = {
        buttons: [
            {
                id: 'button-variants',
                name: 'Button Variants',
                description: 'Different button styles for various actions.',
                code: `<GamifyButton variant="primary">Primary</GamifyButton>
<GamifyButton variant="outline">Outline</GamifyButton>
<GamifyButton variant="ghost">Ghost</GamifyButton>
<GamifyButton variant="legendary">Legendary</GamifyButton>
<GamifyButton variant="danger">Danger</GamifyButton>`,
                demo: (
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <GamifyButton variant="primary">Primary</GamifyButton>
                        <GamifyButton variant="outline">Outline</GamifyButton>
                        <GamifyButton variant="ghost">Ghost</GamifyButton>
                        <GamifyButton variant="legendary">Legendary</GamifyButton>
                        <GamifyButton variant="danger">Danger</GamifyButton>
                    </div>
                ),
            },
            {
                id: 'button-sizes',
                name: 'Button Sizes',
                description: 'Small, medium, and large button sizes.',
                code: `<GamifyButton size="sm">Small</GamifyButton>
<GamifyButton size="md">Medium</GamifyButton>
<GamifyButton size="lg">Large</GamifyButton>`,
                demo: (
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <GamifyButton size="sm">Small</GamifyButton>
                        <GamifyButton size="md">Medium</GamifyButton>
                        <GamifyButton size="lg">Large</GamifyButton>
                    </div>
                ),
            },
        ],
        cards: [
            {
                id: 'card-variants',
                name: 'Card Variants',
                description: 'Glass morphism cards with different visual styles.',
                code: `<GamifyCard variant="default">Default Card</GamifyCard>
<GamifyCard variant="cyber">Cyber Card</GamifyCard>
<GamifyCard variant="neon">Neon Card</GamifyCard>`,
                demo: (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        <GamifyCard variant="default"><p>Default</p></GamifyCard>
                        <GamifyCard variant="cyber"><p>Cyber</p></GamifyCard>
                        <GamifyCard variant="neon"><p>Neon</p></GamifyCard>
                    </div>
                ),
            },
        ],
        badges: [
            {
                id: 'badge-rarity',
                name: 'Rarity Badges',
                description: 'Color-coded badges for item rarity levels.',
                code: `<GamifyBadge variant="common">Common</GamifyBadge>
<GamifyBadge variant="uncommon">Uncommon</GamifyBadge>
<GamifyBadge variant="rare">Rare</GamifyBadge>
<GamifyBadge variant="epic">Epic</GamifyBadge>
<GamifyBadge variant="legendary">Legendary</GamifyBadge>
<GamifyBadge variant="mythic">Mythic</GamifyBadge>`,
                demo: (
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <GamifyBadge variant="common">Common</GamifyBadge>
                        <GamifyBadge variant="uncommon">Uncommon</GamifyBadge>
                        <GamifyBadge variant="rare">Rare</GamifyBadge>
                        <GamifyBadge variant="epic">Epic</GamifyBadge>
                        <GamifyBadge variant="legendary">Legendary</GamifyBadge>
                        <GamifyBadge variant="mythic">Mythic</GamifyBadge>
                    </div>
                ),
            },
        ],
        avatars: [
            {
                id: 'avatar-sizes',
                name: 'Avatar Sizes & Ranks',
                description: 'Avatars with size variants and rank borders.',
                code: `<GamifyAvatar src="..." size="sm" />
<GamifyAvatar src="..." size="md" rank="rare" />
<GamifyAvatar src="..." size="lg" rank="epic" status="online" />
<GamifyAvatar src="..." size="xl" rank="legendary" status="online" />`,
                demo: (
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <GamifyAvatar src="https://ui-avatars.com/api/?name=SM&background=555&color=fff" alt="Small" size="sm" />
                        <GamifyAvatar src="https://ui-avatars.com/api/?name=MD&background=0070dd&color=fff" alt="Medium" size="md" rank="rare" />
                        <GamifyAvatar src="https://ui-avatars.com/api/?name=LG&background=a335ee&color=fff" alt="Large" size="lg" rank="epic" status="online" />
                        <GamifyAvatar src="https://ui-avatars.com/api/?name=XL&background=ff8000&color=fff" alt="XL" size="xl" rank="legendary" status="online" />
                    </div>
                ),
            },
        ],
        inputs: [
            {
                id: 'input-basic',
                name: 'Input Fields',
                description: 'Styled text inputs with labels and validation.',
                code: `<GamifyInput label="Username" placeholder="Enter username" />
<GamifyInput label="Password" type="password" placeholder="••••••••" />
<GamifyInput label="Email" type="email" error="Invalid email" />`,
                demo: (
                    <div style={{ display: 'grid', gap: '1rem', maxWidth: '300px' }}>
                        <GamifyInput label="Username" placeholder="Enter username" />
                        <GamifyInput label="Password" type="password" placeholder="••••••••" />
                    </div>
                ),
            },
            {
                id: 'switch-slider',
                name: 'Switch & Slider',
                description: 'Toggle switches and range sliders.',
                code: `<GamifySwitch label="Enable Feature" checked={value} onChange={...} />
<GamifySlider label="Volume" value={50} min={0} max={100} onChange={...} />`,
                demo: (
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        <GamifySwitch label="Enable Feature" checked={switchValue} onChange={(e) => setSwitchValue(e.target.checked)} />
                        <GamifySlider label="Volume" value={sliderValue} min={0} max={100} onChange={(e) => setSliderValue(Number(e.target.value))} />
                    </div>
                ),
            },
        ],
        game: [
            {
                id: 'health-bars',
                name: 'Health Bars',
                description: 'Animated stat bars for HP, Mana, and XP.',
                code: `<HealthBar value={750} max={1000} variant="hp" showLabel />
<HealthBar value={420} max={500} variant="mana" showLabel />
<HealthBar value={85} max={100} variant="xp" showLabel />`,
                demo: (
                    <div style={{ display: 'grid', gap: '0.8rem', width: '100%' }}>
                        <HealthBar value={750} max={1000} variant="hp" showLabel />
                        <HealthBar value={420} max={500} variant="mana" showLabel />
                        <HealthBar value={85} max={100} variant="xp" showLabel />
                    </div>
                ),
            },
            {
                id: 'inventory-slots',
                name: 'Inventory Slots',
                description: 'Item slots with rarity borders and item counts.',
                code: `<InventorySlot rarity="common" />
<InventorySlot rarity="rare" itemSrc="..." />
<InventorySlot rarity="epic" itemSrc="..." count={5} />
<InventorySlot rarity="legendary" itemSrc="..." />`,
                demo: (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <InventorySlot rarity="common" />
                        <InventorySlot rarity="rare" itemSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" />
                        <InventorySlot rarity="epic" itemSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png" count={5} />
                        <InventorySlot rarity="legendary" itemSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png" />
                    </div>
                ),
            },
        ],
        feedback: [
            {
                id: 'tooltips',
                name: 'Tooltips',
                description: 'Hover tooltips with rarity-aware styling.',
                code: `<GamifyTooltip content="Basic tooltip">
  <GamifyButton>Hover me</GamifyButton>
</GamifyTooltip>

<GamifyTooltip content="Legendary item!" rarity="legendary">
  <GamifyBadge variant="legendary">Hover</GamifyBadge>
</GamifyTooltip>`,
                demo: (
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <GamifyTooltip content="Basic tooltip">
                            <GamifyButton>Hover me</GamifyButton>
                        </GamifyTooltip>
                        <GamifyTooltip content="Legendary item!" rarity="legendary">
                            <GamifyBadge variant="legendary">Hover</GamifyBadge>
                        </GamifyTooltip>
                    </div>
                ),
            },
            {
                id: 'spinners',
                name: 'Spinners',
                description: 'Loading spinners in different sizes.',
                code: `<GamifySpinner size="sm" />
<GamifySpinner size="md" />
<GamifySpinner size="lg" />`,
                demo: (
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <GamifySpinner size="sm" />
                        <GamifySpinner size="md" />
                        <GamifySpinner size="lg" />
                    </div>
                ),
            },
        ],
    };

    return (
        <div className="components-page">
            <div className="components-banner">
                <h1 className="components-banner__title">🧩 Components</h1>
                <p className="components-banner__subtitle">Explore all available UI components</p>
            </div>

            <div className="components-layout">
                {/* Sidebar Navigation */}
                <aside className="components-sidebar">
                    <GamifyCard>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--gamify-text-primary)' }}>Categories</h4>
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                className={`sidebar-link ${activeSection === section.id ? 'sidebar-link--active' : ''}`}
                                onClick={() => setActiveSection(section.id)}
                            >
                                {section.label}
                            </button>
                        ))}
                    </GamifyCard>
                </aside>

                {/* Main Content */}
                <main className="components-main">
                    <GamifyTabs
                        tabs={sections}
                        activeTabId={activeSection}
                        onTabChange={setActiveSection}
                    />

                    {components[activeSection]?.map((comp) => (
                        <div key={comp.id} className="component-demo">
                            <h3 className="component-demo__title">{comp.name}</h3>
                            <p className="component-demo__desc">{comp.description}</p>

                            <div className="component-demo__preview">
                                <div className="component-demo__label">Preview</div>
                                {comp.demo}
                            </div>

                            <div className="component-demo__code">
                                <div className="component-demo__label">
                                    Code
                                    <GamifyBadge variant="rare">TSX</GamifyBadge>
                                </div>
                                <pre><code>{comp.code}</code></pre>
                            </div>
                        </div>
                    ))}
                </main>
            </div>

            <style>{`
                .components-page {
                    min-height: 100vh;
                }

                .components-banner {
                    padding: 3rem 2rem;
                    text-align: center;
                    background: linear-gradient(135deg, rgba(162, 28, 175, 0.15), rgba(99, 102, 241, 0.1));
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .components-banner__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 2.5rem;
                    color: var(--gamify-text-primary);
                    letter-spacing: 2px;
                }

                .components-banner__subtitle {
                    color: var(--gamify-text-secondary);
                    margin-top: 0.5rem;
                }

                .components-layout {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                }

                @media (max-width: 768px) {
                    .components-layout {
                        grid-template-columns: 1fr;
                        padding: 1rem;
                        gap: 1rem;
                    }
                    .components-sidebar {
                        display: none;
                    }
                    .components-main {
                        overflow-x: visible;
                    }
                    /* Allow tabs to scroll edge-to-edge */
                    .components-main > .gamify-tabs {
                        margin-left: -1rem;
                        margin-right: -1rem;
                        padding-left: 1rem;
                        padding-right: 1rem;
                        width: calc(100% + 2rem);
                    }
                }

                .components-sidebar {
                    position: sticky;
                    top: 80px;
                    height: fit-content;
                }

                .sidebar-link {
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 0.6rem 0.8rem;
                    background: none;
                    border: none;
                    color: var(--gamify-text-secondary);
                    cursor: pointer;
                    border-radius: 6px;
                    transition: all 0.3s;
                    margin-bottom: 0.3rem;
                }

                .sidebar-link:hover {
                    background: rgba(99, 102, 241, 0.1);
                    color: var(--gamify-text-primary);
                }

                .sidebar-link--active {
                    background: rgba(99, 102, 241, 0.2);
                    color: var(--gamify-neon-cyan);
                }

                .components-main {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    overflow-x: hidden;
                }

                .component-demo {
                    background: var(--gamify-bg-glass);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 1.5rem;
                }

                .component-demo__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.2rem;
                    color: var(--gamify-text-primary);
                    margin-bottom: 0.5rem;
                }

                .component-demo__desc {
                    color: var(--gamify-text-secondary);
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                }

                .component-demo__preview {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                    padding: 1.5rem;
                    margin-bottom: 1rem;
                }

                .component-demo__label {
                    font-size: 0.75rem;
                    color: var(--gamify-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .component-demo__code {
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 8px;
                    padding: 1rem;
                }

                .component-demo__code pre {
                    margin: 0;
                    overflow-x: auto;
                }

                .component-demo__code code {
                    font-family: 'Fira Code', 'Consolas', monospace;
                    font-size: 0.8rem;
                    color: var(--gamify-neon-cyan);
                    line-height: 1.6;
                }

                /* Light mode */
                [data-theme='light'] .components-banner {
                    background: linear-gradient(135deg, rgba(162, 28, 175, 0.08), rgba(99, 102, 241, 0.05));
                    border-bottom-color: rgba(0, 0, 0, 0.1);
                }

                [data-theme='light'] .component-demo {
                    background: rgba(255, 255, 255, 0.8);
                    border-color: rgba(99, 102, 241, 0.2);
                }

                [data-theme='light'] .component-demo__preview {
                    background: rgba(99, 102, 241, 0.05);
                }

                [data-theme='light'] .component-demo__code {
                    background: rgba(30, 27, 75, 0.05);
                }

                [data-theme='light'] .component-demo__code code {
                    color: #4338ca;
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .components-banner {
                        padding: 1.5rem 0.75rem;
                    }

                    .components-banner__title {
                        font-size: 1.6rem;
                    }

                    .components-banner__subtitle {
                        font-size: 0.85rem;
                    }

                    .components-content {
                        padding: 0.75rem;
                    }

                    .components-main {
                        gap: 1rem;
                    }

                    .component-demo {
                        padding: 0.75rem;
                        border-radius: 8px;
                    }

                    .component-demo__title {
                        font-size: 0.95rem;
                    }

                    .component-demo__desc {
                        font-size: 0.8rem;
                        margin-bottom: 1rem;
                    }

                    .component-demo__preview {
                        padding: 0.75rem;
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.5rem;
                        justify-content: center;
                    }

                    .component-demo__label {
                        font-size: 0.65rem;
                        margin-bottom: 0.5rem;
                    }

                    .component-demo__code {
                        padding: 0.5rem;
                        overflow-x: auto;
                    }

                    .component-demo__code code {
                        font-size: 0.65rem;
                        white-space: pre-wrap;
                        word-break: break-all;
                    }
                }

                @media (max-width: 480px) {
                    .components-banner {
                        padding: 1rem 0.5rem;
                    }

                    .components-banner__title {
                        font-size: 1.3rem;
                    }

                    .components-content {
                        padding: 0.5rem;
                    }

                    .component-demo {
                        padding: 0.5rem;
                    }

                    .component-demo__title {
                        font-size: 0.85rem;
                    }

                    .component-demo__desc {
                        font-size: 0.75rem;
                    }

                    .component-demo__preview {
                        padding: 0.5rem;
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .component-demo__code {
                        padding: 0.4rem;
                    }

                    .component-demo__code code {
                        font-size: 0.55rem;
                        line-height: 1.3;
                    }
                }
            `}</style>
        </div>
    );
};
