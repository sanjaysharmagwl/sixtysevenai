# PROMPTFORGE™ SYSTEM ARCHITECTURE

## Site Map

```
gamehub.html
    ↓
    └─→ [PROMPT ARCHITECT CARD] "ENTER GAME"
            ↓
            promptforge.html (Main Game Hub)
            ├─→ LEVELS Tab (Default)
            │   ├─→ L1: Signal Rookie ✓
            │   ├─→ L2: Command User ✓
            │   ├─→ L3: Command Hacker ▶ (Active)
            │   ├─→ L4: Prompt Engineer 🔒
            │   └─→ L5-L7: Locked
            │
            ├─→ SKILL TREES Tab
            │   ├─→ 🧠 Mind Tree (Intelligence)
            │   ├─→ ⚙️ Systems Tree (Control)
            │   ├─→ ⚡ Output Tree (Leverage)
            │   └─→ 🛡️ Meta Tree (Power)
            │
            └─→ QUESTS Tab
                ├─→ Quest 1 ✓
                ├─→ Quest 2 ⟳ (Active)
                ├─→ Quest 3 🔒
                ├─→ Mini-Boss ▶
                └─→ Final-Boss 🔒
                    ↓
                    promptforge-level.html (Level Detail)
                    ├─→ Quest Sequence
                    │   ├─→ Quest 1: Role Injection ✓
                    │   ├─→ Quest 2: Chain Control ⟳
                    │   └─→ Quest 3: Behavior Override 🔒
                    │
                    ├─→ Mini-Boss Arena
                    │   └─→ Behavior Stability Test
                    │
                    └─→ Final-Boss Arena
                        └─→ Behavior Control Engine
```

---

## Directory Structure

```
sixtysevenai/
├── index.html                 (Homepage)
├── gamehub.html              (Games Hub with all cards)
├── promptforge.html          (Game 1: Main Hub) ✨ NEW
├── promptforge-level.html    (Game 1: Level Detail) ✨ NEW
├── profile.html              (Player Profile)
├── leaderboard.html          (Rankings)
├── powerup.html              (Power-Up Marketplace)
│
├── PROMPTFORGE.md            (Original Game Spec) ✨ NEW
├── PROMPTFORGE_DESIGN.md     (Design & Architecture) ✨ NEW
├── PROMPTFORGE_QUICKSTART.md (Player Guide) ✨ NEW
├── PROMPTFORGE_LAUNCH.md     (Launch Summary) ✨ NEW
├── PROMPTFORGE_ARCHITECTURE.md (This file) ✨ NEW
│
├── AGENT.md                  (Master Brand Guide)
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── game-theme.css
│   │   └── mobile-responsive.css
│   ├── images/
│   │   └── logo.png
│   └── fonts/ (Tailwind loads externally)
│
└── .github/
    └── workflows/ (Auto-deploy)
```

---

## Component Hierarchy

### promptforge.html

```
<body>
├─ <nav>                          (Sticky navigation)
│  ├─ Logo (back to home)
│  ├─ Nav links (hidden on mobile)
│  └─ Theme toggle
│
├─ <section class="hero-section">
│  ├─ Game title
│  ├─ Game tagline
│  └─ Quick stats (Level, XP, Quests)
│
├─ <section class="game-interface">
│  ├─ Game state overview
│  │  ├─ Rank display
│  │  ├─ Level ring (animated circle)
│  │  └─ XP progress bar
│  │
│  ├─ <div class="tab-system">
│  │  ├─ Tab buttons (LEVELS, TREES, QUESTS)
│  │  │
│  │  ├─ <div id="levels-tab" class="tab-content">
│  │  │  └─ Grid of 7 level cards (responsive)
│  │  │     ├─ L1 ✓ Complete
│  │  │     ├─ L2 ✓ Complete
│  │  │     ├─ L3 ▶ Active (highlighted)
│  │  │     ├─ L4 🔒 Locked
│  │  │     └─ L5-L7 🔒 Locked
│  │  │
│  │  ├─ <div id="trees-tab" class="tab-content hidden">
│  │  │  └─ 2x2 grid of 4 skill trees
│  │  │     ├─ Mind Tree
│  │  │     ├─ Systems Tree
│  │  │     ├─ Output Tree
│  │  │     └─ Meta Tree
│  │  │
│  │  └─ <div id="quests-tab" class="tab-content hidden">
│  │     ├─ Active quests list
│  │     ├─ Mini-boss section
│  │     └─ Final-boss arena
│  │
│  └─ <footer>
│
```

### promptforge-level.html

```
<body>
├─ <nav>                         (Sticky header with back button)
│
├─ <section class="hero-banner">
│  ├─ Level title (L3 — COMMAND HACKER)
│  ├─ Mission statement
│  └─ XP progress bar
│
├─ <section class="main-content">
│  ├─ Quest sequence
│  │  ├─ Quest 1: Role Injection ✓ (completed)
│  │  │  ├─ Objective
│  │  │  ├─ Status: Complete ✓
│  │  │  ├─ Proof displayed
│  │  │  └─ Date completed
│  │  │
│  │  ├─ Quest 2: Chain Control ⟳ (active)
│  │  │  ├─ Objective
│  │  │  ├─ Progress: 2/3
│  │  │  └─ [SUBMIT CHAIN #3] button
│  │  │
│  │  └─ Quest 3: Behavior Override 🔒 (locked)
│  │     └─ "Unlock after completing Quest 2"
│  │
│  ├─ Mini-boss challenge
│  │  ├─ Icon and title
│  │  ├─ Requirements (checklist)
│  │  └─ [RUN TEST] button
│  │
│  └─ Final-boss arena
│     ├─ Boss title and lore
│     ├─ Requirements grid (left)
│     │  ├─ ✓ Requirement 1
│     │  ├─ ✓ Requirement 2
│     │  └─ ◯ Requirement 3
│     │
│     ├─ Unlocks grid (right)
│     │  ├─ → Skill Node 1
│     │  ├─ → Skill Node 2
│     │  └─ → Rank upgrade
│     │
│     ├─ Build instructions
│     └─ [SUBMIT FOR ASCENSION] button
│
└─ <footer>
```

---

## Data Flow

### Player State (Session)
```
LocalStorage / Backend
    ↓
Player Object
├─ id: "user_12345"
├─ currentLevel: 3
├─ totalXP: 6240
├─ rank: "Command Hacker"
├─ completedQuests: ["l1q1", "l1q2", "l1q3", "l2q1", "l2q2", "l2q3", "l3q1"]
├─ activeQuests: ["l3q2"]
├─ unlockedSkills: {
│  ├─ mind: ["prompt-logic", "instruction-precision", "reasoning-control"]
│  ├─ systems: ["prompt-os", "multi-agent-chains"]
│  ├─ output: ["speed-multipliers"]
│  └─ meta: ["xp-boost", "streak-shield"]
├─ activePowerUps: [{name: "Focus Mode", remaining: 1245000}]
└─ streak: 14
    ↓
Game renders UI based on state
```

### Quest Submission Flow (Future)
```
[SUBMIT BUILD] Button Click
    ↓
Show Upload Modal
    ↓
Player chooses file or pastes text
    ↓
Send to backend API
    ↓
Validate against criteria
    ├─ ✓ Pass → Award XP
    └─ ✗ Fail → Show feedback
    ↓
Update player state
    ↓
Unlock next quest (if all complete)
    ↓
Re-render UI
```

---

## UI States

### Level Card States
```
COMPLETED
├─ Background: rgba(34, 197, 94, 0.1)
├─ Border: Green (#22C55E)
├─ Status: ✓ COMPLETE
└─ Progress: 100% filled

ACTIVE
├─ Background: rgba(255, 138, 0, 0.1)
├─ Border: Orange (#FF8A00), glowing
├─ Status: ▶ ACTIVE
└─ Progress: Partial (62%)

LOCKED
├─ Background: rgba(107, 114, 128, 0.2)
├─ Border: Gray (#6B7280)
├─ Status: 🔒 LOCKED
├─ Opacity: 50%
└─ Cursor: not-allowed
```

### Quest Card States
```
COMPLETED
├─ Border-left: Green
├─ Background: rgba(34, 197, 94, 0.1)
├─ Text: Normal
└─ Action: Display proof, read-only

ACTIVE
├─ Border-left: Orange, 4px
├─ Background: rgba(255, 138, 0, 0.1)
├─ Glow: box-shadow orange
├─ Action: [SUBMIT BUILD]

LOCKED
├─ Border-left: Gray
├─ Background: Dimmed
├─ Opacity: 50%
└─ Cursor: not-allowed
```

---

## CSS Architecture

### Tailwind + Custom Styles
```
Style.css
    ↓ Imports
├─ Tailwind (CDN)
├─ Google Fonts (3 fonts)
│  ├─ Space Grotesk (headings)
│  ├─ Inter (body)
│  └─ JetBrains Mono (values)
│
└─ Custom CSS (in <style> tags)
    ├─ Gradients
    ├─ Animations
    ├─ Interactive effects
    └─ Game-specific styling
```

### Key CSS Variables
```css
/* Colors */
--teal: #26E6C8
--blue: #2A8CFF
--violet: #7B3FE4
--pink: #FF4FD8
--orange: #FF8A00
--navy: #0F172A

/* Gradients */
--hero-gradient: linear-gradient(135deg, #26E6C8, #2A8CFF)
--xp-bar: linear-gradient(90deg, #2A8CFF, #FF8A00)

/* Sizing */
--level-ring: 180px
--level-ring-mobile: 140px
--card-padding: 24px
--card-padding-mobile: 20px

/* Effects */
--glow-teal: 0 0 30px rgba(38, 230, 200, 0.4)
--glow-orange: 0 0 40px rgba(255, 138, 0, 0.3)
```

---

## Responsive Breakpoints

```
Mobile (< 640px)
├─ Logo: h-12 (48px)
├─ Grid: 1 column
├─ Padding: px-4 (16px)
├─ Cards: min-height 300px
├─ Font: Reduced 2-4px
└─ Touch target: 44px minimum

Tablet (640-1024px)
├─ Logo: h-16 (64px)
├─ Grid: 2-3 columns
├─ Padding: px-6 (24px)
├─ Cards: min-height 320px
└─ Font: Standard size

Desktop (1024px+)
├─ Logo: h-20 (80px)
├─ Grid: 3-7 columns (full)
├─ Padding: px-8 (32px)
├─ Cards: min-height 360px
└─ Font: Standard + increased line-height
```

---

## Browser APIs Used

### JavaScript
```javascript
// No frameworks, vanilla JS only

// DOM Manipulation
document.querySelectorAll()
element.addEventListener()
element.classList.add/remove()
element.getAttribute()

// Local Storage
localStorage.setItem()
localStorage.getItem()

// CSS Animations (no JS animations)
// Transitions and keyframes in CSS only
```

### CSS
```css
/* Modern CSS features used */
- CSS Grid (responsive)
- CSS Flexbox (layouts)
- CSS Gradients (multi-color)
- CSS Animations (@keyframes)
- CSS Filters (glow effects)
- CSS Transforms (scale, translate)
- CSS Variables (custom properties)
- Media Queries (responsive)
- Backdrop Blur (modern browsers)
```

---

## Performance Optimizations

### Loading
- [ ] Code splitting (future)
- [x] Lazy font loading (Google Fonts with display=swap)
- [x] Minified CSS/JS
- [x] Image optimization
- [ ] WebP images (future)

### Rendering
- [x] CSS animations (GPU accelerated)
- [x] Will-change hints (for animated elements)
- [x] Reduced repaints (batch DOM updates)
- [ ] Virtual scrolling (for large grids)

### Network
- [x] Gzip compression
- [x] Cache busting (timestamps)
- [ ] HTTP/2 server push (future)
- [ ] Service workers (future)

---

## Testing Checklist

### Visual Testing
- [x] Hero section renders correctly
- [x] Tab switching works smoothly
- [x] Responsive layout at all breakpoints
- [x] Dark mode colors contrast properly
- [x] Hover effects visible
- [x] Locked state opacity at 50%
- [x] Border glows render
- [x] Font sizes scale appropriately

### Interaction Testing
- [x] Tab buttons toggle content
- [x] Back button works
- [x] Theme toggle changes colors
- [x] Mobile menu toggle works
- [x] Buttons have cursor feedback
- [x] Links navigate correctly

### Browser Testing
- [x] Chrome 90+
- [x] Firefox 88+
- [x] Safari 14+
- [x] Edge 90+
- [x] Mobile (iOS/Android)

### Accessibility
- [x] Semantic HTML
- [x] Keyboard navigation
- [x] Focus indicators
- [x] Color contrast (WCAG AA)
- [x] Alt text on images
- [x] ARIA labels where needed

---

## Deployment Pipeline

```
Local Development
    ↓
    promptforge.html (34 KB)
    promptforge-level.html (18 KB)
    ↓
Git Push
    ↓
GitHub Workflow (Auto)
    ├─ Run tests
    ├─ Build/minify
    └─ Deploy to GitHub Pages
    ↓
Live at: github.com/sanjaysharmagwl/sixtysevenai
    ↓
Available at: https://[domain]/promptforge.html
```

---

## Integration Points (Future)

### Backend API Endpoints (To Build)
```
POST /api/quests/:questId/submit
    └─ Upload build proof
    └─ Validate and award XP

GET /api/players/:playerId/progress
    └─ Fetch current state

PUT /api/players/:playerId/progress
    └─ Update XP, level, quests

GET /api/leaderboard
    └─ Top players by XP

POST /api/auth/login
    └─ Player authentication
```

### Data Models (To Define)
```
Player {
  id, name, email, avatar
  currentLevel, rank, totalXP
  completedQuests[], activeQuests[]
  unlockedSkills[]
  activePowerUps[]
  streak, lastLogin
  createdAt, updatedAt
}

Quest {
  id, levelId, number
  title, objective, description
  xpReward, criteria[]
  submittedAt, completedAt
}

SkillNode {
  id, treeType, name
  description, benefits[]
  unlockedAt
}
```

---

## Security Considerations

### Frontend
- No hardcoded secrets
- Input validation (future)
- XSS prevention (Tailwind + HTML escaping)
- CSRF tokens (future)

### Backend (To Implement)
- Rate limiting on quest submission
- Server-side validation (never trust client)
- File upload restrictions
- Authentication required for all mutations

---

## Success Metrics

### Performance
- First Paint: < 1s
- Interactive: < 1.5s
- Lighthouse Score: 90+

### User Engagement
- Level completion rate: 60%+
- Average session time: 20+ minutes
- Daily return rate: 30%+
- Boss defeat rate: 50%+

### Business
- 1000+ registered players
- 100+ players reach Godmode
- 50+ public portfolio projects
- 5+ featured builds

---

## Notes for Future Developers

### Code Style
- Use Tailwind classes first (utility-first CSS)
- Add custom CSS only when Tailwind insufficient
- Keep HTML semantic
- Use vanilla JS (no jQuery)
- Follow existing naming conventions

### Adding Features
- Update PROMPTFORGE_DESIGN.md
- Keep PROMPTFORGE_QUICKSTART.md current
- Test at 3 breakpoints (mobile/tablet/desktop)
- Verify dark mode works
- Check accessibility

### Extending Games
- Copy promptforge.html structure
- Change colors/icons for each game
- Update 4 skill trees per game
- Create 7 levels × 3 quests each
- Write custom documentation

---

**Architecture finalized: Dec 29, 2025**
**Ready for Phase 2: Backend Integration**
**Status**: ✅ PRODUCTION READY
