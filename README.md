# Gamify

A comprehensive React UI component library for gaming applications with cyberpunk-inspired aesthetics.

[![npm version](https://badge.fury.io/js/%40sitharaj08%2Fgamify.svg)](https://www.npmjs.com/package/@sitharaj08/gamify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎮 Demo

**[Live Demo →](https://sitharaj88.github.io/gamify/)**

## ✨ Features

- 🎨 **Dual Themes** - Cyberpunk Dark & Holographic Light modes
- ⚔️ **Game Components** - Health bars, inventory slots, quest logs
- 🏆 **Rarity System** - Common to Mythic color schemes
- 📱 **Responsive** - Mobile-first design approach
- ♿ **Accessible** - ARIA labels & keyboard navigation
- ⚡ **Performant** - Tree-shakeable & optimized builds

## 📦 Installation

```bash
npm install @sitharaj08/gamify
```

## 🚀 Quick Start

```tsx
import { GamifyThemeProvider, GamifyButton, GamifyCard, GamifyBadge } from '@sitharaj08/gamify';
import '@sitharaj08/gamify/style.css';

function App() {
  return (
    <GamifyThemeProvider>
      <GamifyCard variant="cyber">
        <h2>Welcome to Gamify!</h2>
        <GamifyBadge variant="legendary">PRO</GamifyBadge>
        <GamifyButton variant="primary">Get Started</GamifyButton>
      </GamifyCard>
    </GamifyThemeProvider>
  );
}
```

## 🧩 Components

### Core UI
- `GamifyButton` - Primary, outline, ghost, legendary, danger variants
- `GamifyCard` - Glass morphism cards with cyber/neon variants
- `GamifyBadge` - Rarity-colored badges
- `GamifyAvatar` - Avatars with rank borders and status indicators
- `GamifyTabs` - Tabbed navigation
- `GamifyInput` - Styled text inputs
- `GamifySwitch` - Toggle switches
- `GamifySlider` - Range sliders
- `GamifyTooltip` - Rarity-aware tooltips
- `GamifyToast` - Notification toasts
- `GamifyModal` - Modal dialogs
- `GamifySpinner` - Loading spinners

### Game-Specific
- `HealthBar` - HP/Mana/XP bars with animations
- `InventorySlot` - Rarity-bordered item slots
- `QuestLog` - Quest list with status indicators
- `GamifyLeaderboard` - Player rankings

### Theme
- `GamifyThemeProvider` - Theme context provider
- `GamifyThemeToggle` - Sun/moon toggle button

## 🎨 Theming

Gamify UI supports two themes out of the box:

- **Cyberpunk Dark** (default) - Deep purples, neon cyan/pink accents
- **Holographic Light** - Mint/cyan bases, deep indigo text

```tsx
import { GamifyThemeProvider, GamifyThemeToggle } from '@sitharaj08/gamify';

function App() {
  return (
    <GamifyThemeProvider>
      <GamifyThemeToggle />
      {/* Your app content */}
    </GamifyThemeProvider>
  );
}
```

## 🏆 Rarity System

All components support the rarity color system:

| Rarity | Color |
|--------|-------|
| Common | Gray |
| Uncommon | Green |
| Rare | Blue |
| Epic | Purple |
| Legendary | Orange (with glow) |
| Mythic | Red (with animation) |

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 👨‍💻 Author

**Sitharaj Seenivasan**

- GitHub: [@sitharaj88](https://github.com/sitharaj88)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
