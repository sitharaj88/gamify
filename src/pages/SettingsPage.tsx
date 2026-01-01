import React, { useState } from 'react';
import { GamifyCard } from '../components/GamifyCard/GamifyCard';
import { GamifySwitch } from '../components/GamifySwitch/GamifySwitch';
import { GamifySlider } from '../components/GamifySlider/GamifySlider';
import { GamifyInput } from '../components/GamifyInput/GamifyInput';
import { GamifyButton } from '../components/GamifyButton/GamifyButton';
import { GamifyBadge } from '../components/GamifyBadge/GamifyBadge';
import { GamifyTabs } from '../components/GamifyTabs/GamifyTabs';

export const SettingsPage: React.FC = () => {
    const [activeTabId, setActiveTabId] = useState('graphics');
    const [volume, setVolume] = useState(75);
    const [sfxVolume, setSfxVolume] = useState(85);
    const [musicVolume, setMusicVolume] = useState(60);
    const [isHardcore, setIsHardcore] = useState(false);
    const [showFps, setShowFps] = useState(true);
    const [hdrEnabled, setHdrEnabled] = useState(true);
    const [streamerMode, setStreamerMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [uiScale, setUiScale] = useState(100);

    const tabs = [
        { id: 'graphics', label: '🖥️ Graphics' },
        { id: 'audio', label: '🔊 Audio' },
        { id: 'gameplay', label: '🎮 Gameplay' },
        { id: 'account', label: '👤 Account' },
    ];

    return (
        <div className="settings-page">
            {/* Settings Banner */}
            <div className="settings-banner">
                <div className="settings-banner__content">
                    <h1 className="settings-banner__title">⚙️ CONTROL CENTER</h1>
                    <p className="settings-banner__subtitle">Customize your experience</p>
                </div>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
                <GamifyTabs tabs={tabs} activeTabId={activeTabId} onTabChange={setActiveTabId} />

                {/* Graphics Settings */}
                {activeTabId === 'graphics' && (
                    <div className="settings-section">
                        <GamifyCard variant="cyber">
                            <h3 className="settings-section__title">🎨 Visual Settings</h3>
                            <div className="settings-grid">
                                <div className="setting-item">
                                    <div className="setting-item__info">
                                        <span className="setting-item__label">HDR Graphics</span>
                                        <span className="setting-item__desc">Enable High Dynamic Range for richer colors</span>
                                    </div>
                                    <GamifySwitch checked={hdrEnabled} onChange={(e) => setHdrEnabled(e.target.checked)} />
                                </div>
                                <div className="setting-item">
                                    <div className="setting-item__info">
                                        <span className="setting-item__label">Show FPS Counter</span>
                                        <span className="setting-item__desc">Display frames per second in corner</span>
                                    </div>
                                    <GamifySwitch checked={showFps} onChange={(e) => setShowFps(e.target.checked)} />
                                </div>
                                <div className="setting-item setting-item--full">
                                    <GamifySlider
                                        label="Interface Scale"
                                        value={uiScale}
                                        min={50}
                                        max={150}
                                        onChange={(e) => setUiScale(Number(e.target.value))}
                                    />
                                </div>
                            </div>
                        </GamifyCard>

                        <GamifyCard>
                            <h3 className="settings-section__title">📺 Display</h3>
                            <div className="settings-grid">
                                <div className="setting-row">
                                    <span>Resolution</span>
                                    <GamifyBadge variant="epic">1920 x 1080</GamifyBadge>
                                </div>
                                <div className="setting-row">
                                    <span>Refresh Rate</span>
                                    <GamifyBadge variant="legendary">144 Hz</GamifyBadge>
                                </div>
                                <div className="setting-row">
                                    <span>V-Sync</span>
                                    <GamifyBadge variant="rare">ON</GamifyBadge>
                                </div>
                            </div>
                        </GamifyCard>
                    </div>
                )}

                {/* Audio Settings */}
                {activeTabId === 'audio' && (
                    <div className="settings-section">
                        <GamifyCard variant="cyber">
                            <h3 className="settings-section__title">🔊 Volume Controls</h3>
                            <div className="audio-sliders">
                                <GamifySlider
                                    label="Master Volume"
                                    value={volume}
                                    min={0}
                                    max={100}
                                    onChange={(e) => setVolume(Number(e.target.value))}
                                />
                                <GamifySlider
                                    label="Sound Effects"
                                    value={sfxVolume}
                                    min={0}
                                    max={100}
                                    onChange={(e) => setSfxVolume(Number(e.target.value))}
                                />
                                <GamifySlider
                                    label="Music"
                                    value={musicVolume}
                                    min={0}
                                    max={100}
                                    onChange={(e) => setMusicVolume(Number(e.target.value))}
                                />
                            </div>
                        </GamifyCard>

                        <GamifyCard>
                            <h3 className="settings-section__title">🎧 Audio Options</h3>
                            <div className="settings-grid">
                                <div className="setting-item">
                                    <div className="setting-item__info">
                                        <span className="setting-item__label">Voice Chat</span>
                                        <span className="setting-item__desc">Enable in-game voice communication</span>
                                    </div>
                                    <GamifySwitch checked={true} readOnly />
                                </div>
                                <div className="setting-item">
                                    <div className="setting-item__info">
                                        <span className="setting-item__label">Spatial Audio</span>
                                        <span className="setting-item__desc">3D audio positioning</span>
                                    </div>
                                    <GamifySwitch checked={true} readOnly />
                                </div>
                            </div>
                        </GamifyCard>
                    </div>
                )}

                {/* Gameplay Settings */}
                {activeTabId === 'gameplay' && (
                    <div className="settings-section">
                        <GamifyCard variant="cyber">
                            <h3 className="settings-section__title">🎮 Game Modes</h3>
                            <div className="settings-grid">
                                <div className="setting-item">
                                    <div className="setting-item__info">
                                        <span className="setting-item__label">⚠️ Hardcore Mode</span>
                                        <span className="setting-item__desc setting-item__desc--warning">
                                            Permanent death - no respawns!
                                        </span>
                                    </div>
                                    <GamifySwitch checked={isHardcore} onChange={(e) => setIsHardcore(e.target.checked)} />
                                </div>
                                <div className="setting-item">
                                    <div className="setting-item__info">
                                        <span className="setting-item__label">🎭 Streamer Mode</span>
                                        <span className="setting-item__desc">Hide sensitive information</span>
                                    </div>
                                    <GamifySwitch checked={streamerMode} onChange={(e) => setStreamerMode(e.target.checked)} />
                                </div>
                                <div className="setting-item">
                                    <div className="setting-item__info">
                                        <span className="setting-item__label">🔔 Notifications</span>
                                        <span className="setting-item__desc">Show in-game notifications</span>
                                    </div>
                                    <GamifySwitch checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
                                </div>
                            </div>
                        </GamifyCard>

                        <GamifyCard>
                            <h3 className="settings-section__title">⌨️ Controls</h3>
                            <div className="keybind-grid">
                                <div className="keybind-row">
                                    <span>Move Forward</span>
                                    <kbd>W</kbd>
                                </div>
                                <div className="keybind-row">
                                    <span>Move Back</span>
                                    <kbd>S</kbd>
                                </div>
                                <div className="keybind-row">
                                    <span>Attack</span>
                                    <kbd>LMB</kbd>
                                </div>
                                <div className="keybind-row">
                                    <span>Special Ability</span>
                                    <kbd>E</kbd>
                                </div>
                            </div>
                            <GamifyButton variant="ghost" size="sm" style={{ marginTop: '1rem' }}>
                                Customize Keybinds
                            </GamifyButton>
                        </GamifyCard>
                    </div>
                )}

                {/* Account Settings */}
                {activeTabId === 'account' && (
                    <div className="settings-section">
                        <GamifyCard variant="cyber">
                            <h3 className="settings-section__title">👤 Profile Settings</h3>
                            <div className="account-grid">
                                <GamifyInput label='Username' placeholder='Cyber Knight' />
                                <GamifyInput label='Email' placeholder='knight@gamify.io' type='email' />
                                <GamifyInput label='New Password' type='password' placeholder='••••••••' />
                                <GamifyInput label='Confirm Password' type='password' placeholder='••••••••' />
                            </div>
                            <div className="account-actions">
                                <GamifyButton variant='primary'>💾 Save Changes</GamifyButton>
                            </div>
                        </GamifyCard>

                        <GamifyCard variant="neon">
                            <h3 className="settings-section__title" style={{ color: 'var(--gamify-neon-pink)' }}>⚠️ Danger Zone</h3>
                            <p style={{ color: 'var(--gamify-text-secondary)', marginBottom: '1rem' }}>
                                These actions are irreversible. Please proceed with caution.
                            </p>
                            <div className="danger-actions">
                                <GamifyButton variant='ghost'>Reset Progress</GamifyButton>
                                <GamifyButton variant='danger'>Delete Account</GamifyButton>
                            </div>
                        </GamifyCard>
                    </div>
                )}
            </div>

            <style>{`
                .settings-page {
                    min-height: 100vh;
                }

                .settings-banner {
                    padding: 2.5rem 3rem;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(107, 114, 128, 0.1)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: center;
                }

                .settings-banner__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 2.5rem;
                    color: var(--gamify-text-primary);
                    letter-spacing: 3px;
                }

                .settings-banner__subtitle {
                    color: var(--gamify-text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-top: 0.5rem;
                }

                .settings-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .settings-section__title {
                    font-family: var(--gamify-font-heading);
                    font-size: 1.1rem;
                    color: var(--gamify-text-primary);
                    margin-bottom: 1.5rem;
                }

                .settings-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .setting-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .setting-item--full {
                    display: block;
                }

                .setting-item__info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }

                .setting-item__label {
                    font-weight: 600;
                    color: var(--gamify-text-primary);
                }

                .setting-item__desc {
                    font-size: 0.85rem;
                    color: var(--gamify-text-muted);
                }

                .setting-item__desc--warning {
                    color: #ef4444;
                }

                .setting-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.8rem 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .setting-row:last-child {
                    border-bottom: none;
                }

                .audio-sliders {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .keybind-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }

                .keybind-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.8rem 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 6px;
                }

                kbd {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(99, 102, 241, 0.1));
                    border: 1px solid rgba(99, 102, 241, 0.5);
                    border-radius: 4px;
                    padding: 0.3rem 0.8rem;
                    font-family: var(--gamify-font-heading);
                    font-size: 0.85rem;
                    color: var(--gamify-neon-cyan);
                }

                .account-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }

                .account-actions {
                    margin-top: 1.5rem;
                    display: flex;
                    gap: 1rem;
                }

                .danger-actions {
                    display: flex;
                    gap: 1rem;
                }

                /* Light mode */
                [data-theme='light'] .settings-banner {
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(107, 114, 128, 0.05)),
                                linear-gradient(to bottom, transparent, var(--gamify-bg-dark));
                    border-bottom-color: rgba(0, 0, 0, 0.1);
                }

                [data-theme='light'] .setting-item {
                    background: rgba(99, 102, 241, 0.05);
                    border-color: rgba(99, 102, 241, 0.1);
                }

                [data-theme='light'] .keybind-row {
                    background: rgba(99, 102, 241, 0.05);
                }

                [data-theme='light'] .setting-row {
                    border-bottom-color: rgba(0, 0, 0, 0.05);
                }
            `}</style>
        </div>
    );
};
