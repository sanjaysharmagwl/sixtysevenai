# PROMPTFORGE™ DESIGN IMPLEMENTATION

## Overview

PromptForge is the first game in the SixtySeven AI platform. It's a command engineering game where players master AI prompt design across 7 ascension ranks (Noob → Godmode).

**Files Created:**
- `promptforge.html` - Main game hub for PromptForge
- `promptforge-level.html` - Detailed level view with quests and bosses
- `PROMPTFORGE.md` - Original design specification
- `PROMPTFORGE_DESIGN.md` - This documentation

---

## Game Architecture

### Core Identity
- **Game Name**: PROMPTFORGE™
- **Tagline**: "Where humans learn to command machines"
- **Core Loop**: Complete Quests → Defeat Bosses → Unlock Powers → Ascend Ranks
- **7-Level Structure**: Signal Rookie (L1) → Command Godmode (L7)
- **Real Output**: Players build actual prompt systems with real XP rewards

### Ascension Ranks (Global)
Maps to SixtySeven's 7-level system:

| SixtySeven Rank | PromptForge Title | Philosophy |
|---|---|---|
| L1 (Noob) | Signal Rookie | "I have entered the system." |
| L2 (User) | Command User | "I can operate tools." |
| L3 (Hacker) | Command Hacker | "I can bend systems." |
| L4 (Engineer) | Prompt Engineer | "I can build systems." |
| L5 (Architect) | Command Architect | "I can design machines." |
| L6 (Overlord) | Command Overlord | "I command automation armies." |
| L7 (Godmode) | Command Godmode | "I define the future systems." |

---

## Page Structure

### 1. `promptforge.html` - Game Hub
**Purpose**: Central dashboard for PromptForge. Shows player progress, level map, skill trees, and active quests.

**Sections**:

#### Hero Section
- Game title, tagline, and quick stats (Level, XP, Quests Completed)
- Visual: Teal/Blue gradient (Neural Spectrum branded)
- Responsive on mobile with reduced padding

#### Game State Overview
Three-column grid showing:
1. **Rank Display**: Current rank (e.g., "Command Hacker")
2. **Level Ring**: Animated circular progress ring (L1-L7)
3. **XP Progress**: Bar and percentage (e.g., 6,240 / 11,000 XP)

#### Tab System
Three tabs with smooth switching:

**1. LEVELS Tab** (Default)
- 7-column responsive grid (1 col mobile, 2 tablet, up to 7 desktop)
- Each level card shows:
  - Level number (L1-L7)
  - Rank title (Signal Rookie, Command Hacker, etc.)
  - Description (mission statement)
  - Progress bar with XP
  - Status: COMPLETE, ACTIVE, or LOCKED
- Completed levels: green status + full progress
- Active level: yellow status + partial progress
- Locked levels: gray status + lock icon (50% opacity)

**2. SKILL TREES Tab**
- 2×2 grid showing 4 skill trees:
  - 🧠 Mind Tree (Intelligence)
  - ⚙️ Systems Tree (Control)
  - ⚡ Output Tree (Leverage)
  - 🛡️ Meta Tree (Power)
- Each tree displays:
  - Tree icon and name
  - List of nodes (✓ unlocked, 🔒 locked)
  - Unlock count (e.g., "3/4 Nodes Unlocked")
- Visual hierarchy: teal/blue gradient borders, glow on hover

**3. QUESTS Tab**
- Shows all active quests for current level
- Quest card structure:
  - Status indicator (✓ Complete, ⟳ Active, 🔒 Locked)
  - Quest name and XP reward
  - Progress bar or description
  - Submit button (if active)
- Boss mission card (separate styling):
  - Orange/gold gradient border
  - Requirements checklist (✓ done, ◯ pending)
  - Submit button (disabled until ready)

#### Visual Design
- **Background**: Dark (Neural Navy #0F172A with Tailwind gray-950)
- **Borders**: Teal/Blue gradient with subtle glow
- **Text**: Space Grotesk (headers), Inter (body), JetBrains Mono (values)
- **Colors**: Neural Spectrum palette (Teal primary)
- **Hover Effects**: Scale, glow intensify, color shift

### 2. `promptforge-level.html` - Level Detail
**Purpose**: Full quest experience for a single level. Shows all quests, mini-boss, and final boss.

**Sections**:

#### Navigation Bar
- Back link to `promptforge.html`
- Level title (e.g., "L3 — COMMAND HACKER")
- Sticky positioning

#### Hero Banner
- Level mission statement
- XP progress bar (animated)
- Visual: Same gradient as promptforge.html

#### Quest Sequence
- **Quest 1**: Completed state (green border, checkmark)
- **Quest 2**: Active state (orange border, glow, 2/3 progress)
- **Quest 3**: Locked state (gray, disabled)
- Each quest shows:
  - Status icon and XP reward
  - Objective and description
  - Proof of completion (for completed quests)
  - Progress counter (for active quests)
  - Submit button (for active quests)

#### Mini-Boss Challenge
- Single card with centered layout
- Boss icon (⚔️) and name
- Test criteria (checklist style)
- Test button ("RUN TEST")
- XP reward announcement

#### Final Boss (Boss Arena)
- Gradient background (Navy → Dark Navy)
- Gold/orange border (3px, glowing)
- Two-column grid (Requirements | Unlock):
  - Left: 3 requirements with status (✓ or ◯)
  - Right: 3 unlocks (next skill tree nodes, rank upgrade)
- Build instructions (5-step process)
- Submit button (enabled only when ready)
- Study guide button (secondary)

#### Visual Design
- **Hero Banner**: Gradient (Teal → Blue)
- **Quests**: Dark cards with colored left borders
- **Mini-Boss**: Orange/gold styling
- **Final Boss**: Navy gradient with gold accents, premium feel

---

## Design Patterns

### Game Card System
All cards follow consistent structure:
```html
<div class="card-container">
  <div class="card-header">
    <h3>Card Title</h3>
    <span>XP Reward</span>
  </div>
  <p class="card-description">...</p>
  <div class="card-status">Progress or Status</div>
  <button class="card-action">Action Button</button>
</div>
```

### Color Coding
- **Green (#22C55E)**: Completed, success
- **Orange (#FF8A00)**: Active, current focus
- **Teal (#26E6C8)**: Primary, available
- **Blue (#2A8CFF)**: Secondary, information
- **Gray**: Locked, disabled, inactive

### Hover Effects
All interactive elements:
- Scale 1.08 on desktop hover
- Color shift (teal → orange)
- Glow effect (0 0 20px rgba color)
- Transform X (translate Y -4px)

### Progress Visualization
- XP bars: Gradient (blue → orange)
- Level rings: Circular progress with glow
- Checklists: Checkmarks for completed items
- Status badges: Uppercase font-mono

---

## User Flow

### Starting PromptForge
1. Player clicks "ENTER GAME" on gamehub.html (Prompt Architect card)
2. Loads `promptforge.html` with their current progress
3. Default view: LEVELS tab showing L1-L7 map

### Playing a Quest
1. Player clicks on active level (L3)
2. Sees QUESTS tab automatically selected (via JS)
3. Views all quests with current progress
4. Clicks "SUBMIT BUILD" on active quest
5. Build proof uploaded and validated
6. XP awarded (+200 XP)
7. Next quest unlocks

### Defeating a Boss
1. Player completes all level quests
2. Mini-boss becomes available
3. Runs mini-boss test
4. Passes if all criteria met (+400 XP)
5. Final boss unlocks
6. Submits final boss build (+1200 XP)
7. Level complete, next level unlocks

### Skill Tree Progression
1. Player unlocks nodes automatically on level-up
2. SKILL TREES tab shows constellation view
3. Nodes have tooltips explaining benefits
4. Locked nodes show unlock condition
5. Players see permanent identity growth

---

## State Management

### Player Progress Object
```javascript
{
  gameId: "promptforge",
  currentLevel: 3,
  currentRank: "Command Hacker",
  totalXP: 6240,
  levelXP: {
    l1: 700,
    l2: 900,
    l3: 6240
  },
  completedQuests: ["l1q1", "l1q2", "l1q3", "l2q1", "l2q2", "l2q3", "l3q1"],
  activeQuests: ["l3q2"],
  unlockedSkills: {
    mind: ["prompt-logic", "instruction-precision", "reasoning-control"],
    systems: ["prompt-os", "multi-agent-chains"],
    output: ["speed-multipliers"],
    meta: ["xp-boost", "streak-shield"]
  }
}
```

### Tab State (Local)
```javascript
{
  activeTab: "levels", // levels, trees, quests
  expandedLevel: 3,    // which level detail is shown
  sortBy: "progress"   // sort orders for tabs
}
```

---

## Implementation Details

### Responsive Design
- **Mobile (< 640px)**: 1-column layout, reduced padding (20px), smaller fonts
- **Tablet (640-1024px)**: 2-3 column grid, standard padding (24px)
- **Desktop (1024px+)**: Full 7-column grid, generous padding (32px+)

### Tab Switching
JavaScript handler:
1. Click tab button
2. Hide all tabs with `hidden` class
3. Remove active state from all buttons
4. Show selected tab
5. Add active state to clicked button
6. Update border color

### Mobile Menu
- Hidden on mobile, shown on md+ breakpoint
- Toggle button for mobile navigation
- Sticky nav on games pages

### Theme Toggle
- Light/Dark mode switching
- Persists to localStorage
- Icons (sun/moon) update based on theme
- PromptForge keeps dark theme as default

---

## Content Strategy

### L1-L3 Implementation
Fully designed with:
- 3 quests per level + mini-boss + final boss
- XP rewards tied to PROMPTFORGE.md spec
- Real-world build examples
- Clear progression path

### L4-L7 Skeleton
Locked views showing:
- Level titles and descriptions
- Unlock requirements
- XP amounts (from spec)
- Future-proofing for expansion

### Quest Library
Each quest includes:
- Objective (what to build)
- Success criteria (how to validate)
- XP reward (100-400 range)
- Proof submission mechanism
- Build guide (optional)

---

## XP Economy (PromptForge-Specific)

| Action | XP | Notes |
|---|---|---|
| Quest 1 | 100 | Basic objective |
| Quest 2 | 100 | Building skills |
| Quest 3 | 150+ | Complex challenge |
| Mini-Boss | 300-500 | Integration test |
| Final-Boss | 700-1200 | Level completion |
| Daily Login | 25 | Habit reward |
| 7-Day Streak | 500 | Consistency bonus |

**Total per level**: ~1500-2000 XP (varies)
**Total to Godmode**: ~156,000 XP (across all 5 games + multipliers)

---

## Next Steps

### Phase 2: Interactive Features
- [ ] Quest submission system (file upload or text form)
- [ ] Validation engine (checking build requirements)
- [ ] XP animation (number fly-up on award)
- [ ] Boss difficulty scaling (based on player stats)
- [ ] Leaderboard integration (XP rankings)

### Phase 3: Gamification
- [ ] Achievement badges (unlock on milestones)
- [ ] Skill tree animations (nodes glow when unlocked)
- [ ] Boss arena effects (visual intensity increases)
- [ ] Level-up screen (celebratory modal)
- [ ] Progress notifications (push/toast)

### Phase 4: Advanced Systems
- [ ] Procedural quest generation (varied challenges)
- [ ] Difficulty modes (casual/hard)
- [ ] Multiplayer leaderboard (cross-game rankings)
- [ ] Community builds (share prompt systems)
- [ ] API integration (validate real AI responses)

### Phase 5: Other Games
- [ ] Agent Engineer (game-2)
- [ ] Automation Forge (game-3)
- [ ] Creator OS (game-4)
- [ ] Startup Builder (game-5)

---

## File Checklist

✅ `promptforge.html` - Main game hub
✅ `promptforge-level.html` - Level detail page
✅ `PROMPTFORGE.md` - Original design spec
✅ `PROMPTFORGE_DESIGN.md` - This document
⚠️ CSS optimizations (consolidate game-theme.css styles)
⚠️ JavaScript state management (move to separate file)
⚠️ API endpoints (backend integration)

---

## Testing Checklist

### Visual Testing
- [ ] All grid layouts responsive on mobile/tablet/desktop
- [ ] Color contrast meets WCAG 4.5:1 ratio
- [ ] Icons render correctly across browsers
- [ ] Animations smooth (no jank)
- [ ] Fonts load correctly (no FOUT)

### Interaction Testing
- [ ] Tab switching works smoothly
- [ ] Hover effects visible and responsive
- [ ] Buttons click-able and feedback visible
- [ ] Locked items properly disabled
- [ ] No console errors

### Content Testing
- [ ] All XP values match PROMPTFORGE.md
- [ ] All quest descriptions correct
- [ ] Boss requirements match spec
- [ ] Rank titles consistent
- [ ] Grade progression logical

---

## Deployment Notes

1. **Performance**: Use CSS animations (no JS animations) for smoothness
2. **Accessibility**: Ensure keyboard navigation works (tab-focus rings visible)
3. **Browsers**: Test on Chrome, Firefox, Safari, Edge (minimum support)
4. **Mobile**: Test on iOS Safari and Android Chrome (primary mobile users)
5. **Dark Mode**: Default to dark, light mode optional

---

## Brand Consistency

PromptForge uses:
- **Primary Color**: Neural Spectrum Teal (#26E6C8)
- **Secondary**: Neural Spectrum Blue (#2A8CFF)
- **Accent**: Momentum Orange (#FF8A00) for CTAs
- **Typography**: Space Grotesk bold for titles, Inter for body
- **Icons**: Emoji (🎯 for game, 🧠 for mind tree, etc.)
- **Gradients**: 135deg neural-spectrum multi-color

All consistent with AGENT.md Section 3 (Brand Colors).

---

## Contact & Iteration

For design questions or feature requests, refer to:
- `AGENT.md` - Master brand and design guidelines
- `PROMPTFORGE.md` - Original game specification
- GitHub issues (feature requests)

Last updated: Dec 29, 2025
