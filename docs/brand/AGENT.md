# AGENT.md

**SixtySeven AI – Core Agent Contract**

## 1. Tech Stack (The Correct Stack for SixtySeven AI)

This fits your gamified AI learning platform perfectly:

| Layer     | Tool                          |
| --------- | ----------------------------- |
| Frontend  | GitHub Pages (free, CDN, fast)|
| Backend   | Cloudflare Workers            |
| Database  | Supabase                      |
| Auth      | Supabase Auth                 |
| Payments  | Stripe                        |
| Storage   | Supabase Storage              |
| CMS       | Sanity / Notion API           |

---

## 2. Platform Identity (Non-Negotiable)

SixtySeven AI is **not a course website**.
It is a **Skill Game Engine**.

All features must support:

* Games
* Levels
* Quests
* XP
* Badges
* Powers
* Player progression

No "blog-style" or "course-style" UX is allowed.

---

## 3. UI Zones (Must Remain Separate)

There are two permanent universes:

| Zone                 | Purpose                                |
| -------------------- | -------------------------------------- |
| Power Up             | Discovery, trending, featuring content |
| GAMES                | Skill progression engine               |

They must never mix.

---

## 4. Brand Colors & Gradients (Lock These)

### PRIMARY BRAND GRADIENT: Neural Spectrum

| Color             | Hex       | Role                 |
| ----------------- | --------- | -------------------- |
| Human Teal        | `#26E6C8` | Learning / Curiosity |
| Intelligence Blue | `#2A8CFF` | Trust / Logic        |
| Builder Violet    | `#7B3FE4` | Depth / Systems      |
| Growth Pink       | `#FF4FD8` | Energy / Creativity  |
| Momentum Orange   | `#FF8A00` | Action / Power       |

### CORE BRAND COLORS

| Role                | Color         | Hex       |
| ------------------- | ------------- | --------- |
| Primary Dark (Text) | Neural Navy   | `#0F172A` |
| Primary Light       | Pure White    | `#FFFFFF` |
| Surface Gray        | Soft Graphite | `#E5E7EB` |
| System Black        | Void Black    | `#000000` |

### ACTION COLORS

| Action        | Color             | Hex       |
| ------------- | ----------------- | --------- |
| Primary CTA   | Momentum Orange   | `#FF8A00` |
| Secondary CTA | Intelligence Blue | `#2A8CFF` |
| Success       | Neural Green      | `#22C55E` |
| Secondary Success | Vibrant Purple | `#A855F7` |
| Warning       | Signal Yellow     | `#FACC15` |
| Error         | Alert Red         | `#EF4444` |

### UI BACKGROUND SYSTEM

| Usage           | Color         | Hex       |
| --------------- | ------------- | --------- |
| Main Background | Pure White    | `#FFFFFF` |
| Dark Mode       | Neural Navy   | `#0F172A` |
| Cards           | Soft Snow     | `#F9FAFB` |
| Borders         | Soft Graphite | `#E5E7EB` |

### GRADIENT PRESETS

| Usage          | CSS                                                                    |
| -------------- | ---------------------------------------------------------------------- |
| Brand          | `linear-gradient(135deg, #26E6C8, #2A8CFF, #7B3FE4, #FF4FD8, #FF8A00)` |
| XP Bars        | `linear-gradient(90deg, #2A8CFF, #FF8A00)`                             |
| Boss Levels    | `linear-gradient(135deg, #0F172A, #000000)`                            |
| Unlock Effects | `linear-gradient(90deg, #FF8A00, #26E6C8)`                             |
| Hero Sections  | `linear-gradient(135deg, #26E6C8, #2A8CFF, #7B3FE4)`                   |
| CTA Buttons    | `linear-gradient(90deg, #FF8A00, #FF4FD8)`                             |

### COLOR USAGE RULES

* All logos use **dark, saturated versions** of brand colors
* Minimum contrast ratio: **4.5:1** against any background
* Never use light, washed-out, or pastel variations
* Neural Spectrum gradient only (all 5 colors in sequence)
* Never lighten brand colors for "modern" aesthetics
* Never use dull corporate blues or pale palettes
* Always use gradient for "AI" zones
* Flat colors for text/UI clarity
* No additional colors without design lead approval

---

## 5. SixtySeven Ascension Ladder (CANONICAL IDENTITY NAMING)

Players don't acquire "levels." They ascend through mythic identity ranks.

This is how SixtySeven becomes **culture**, not content.

### The 7-Level Ascension Hierarchy

| Rank   | Title     | Philosophy                        | Meaning                              |
| ------ | --------- | --------------------------------- | ------------------------------------ |
| **L1** | Noob      | "I have entered the system."      | Entry-level, learning basics         |
| **L2** | User      | "I can operate tools."            | Operating with competence           |
| **L3** | Hacker    | "I can bend systems."             | Mastering unconventional solutions   |
| **L4** | Engineer  | "I can build systems."            | Building production-grade solutions  |
| **L5** | Architect | "I can design machines."          | Designing complex systems & flows    |
| **L6** | Overlord  | "I command automation armies."    | Managing large-scale operations      |
| **L7** | Godmode   | "I define the future systems."    | Creating new paradigms               |

### Ascension Philosophy

**L1–L6**: Power acquisition (learning → mastery → leadership)
**L7**: Power creation (defining new futures)

### Why This Works

- **Instantly understandable**: Every player knows what a "Hacker" is
- **Meme-able**: Players want to say "I hit Godmode," not "I completed Level 7"
- **Culture-forming**: Creates shared language across all games
- **Scalable**: Same ladder applies to every game (Prompt Architect, Agent Engineer, etc.)
- **Mythical L7**: Makes reaching Godmode feel transcendent, not just "max level"

### Brand Language (Never Say)

❌ "You finished Level 4"
✅ "You hit Engineer rank"

❌ "You're on Level 6"
✅ "You're an Overlord"

❌ "Unlock at Level 7"
✅ "Unlock at Godmode"

### Dashboard Display Example

```
Prompt Architect
└─ Level 4 (Rank: Engineer)
   [Progress Bar: 60%]

Agent Engineer
└─ Level 2 (Rank: User)
   [Progress Bar: 25%]

Automation Forge
└─ Level 6 (Rank: Overlord)
   [Progress Bar: 90%]
   ⚡ BOSS LEVEL UNLOCKED

Startup Builder
└─ LOCKED
   Unlock at Godmode
```

### XP Thresholds to Ascend

| Ascension  | XP Required | Cumulative | Meaning                    |
| ---------- | ----------- | ---------- | -------------------------- |
| L1 → L2    | 500         | 500        | First competency           |
| L2 → L3    | 800         | 1,300      | System mastery begins      |
| L3 → L4    | 1,200       | 2,500      | Engineering capability     |
| L4 → L5    | 1,600       | 4,100      | Architectural thinking     |
| L5 → L6    | 2,000       | 6,100      | Leadership tier            |
| L6 → L7    | 4,400       | **10,500** | **Godmode achieved**       |

### Godmode Unlock Rules

Reaching L7 (Godmode) requires:

- **Game-Specific**: Achieve L7 in at least 1 game
- **Cross-Game**: Maintain L5+ (Architect) across 2+ games
- **Portfolio Proof**: Publish portfolio with 3+ projects
- **XP Accumulation**: Total 10,500 XP across all games

Once Godmode is achieved:

✅ All locked games become playable
✅ Exclusive "Godmode" badge on profile
✅ Access to "Meta Quests" (cross-game challenges)
✅ Ability to mentor other players
✅ Lifetime 1.5× XP multiplier

---

## 6. Card System (Mandatory)

All content must render as cards.

| Card Type  | Rule                                         |
| ---------- | -------------------------------------------- |
| Game Card  | Gradient background, glow, START button      |
| Level Card | Navy background, XP bar, lock states         |
| Quest Card | Black background, dashed cyan border         |
| Boss Card  | Black→Navy gradient, gold border, glow pulse |

---

## 7. SixtySeven XP & Multiplier Engine (Core Logic)

This engine is what turns SixtySeven AI from a content platform into a **behavior-shaping operating system**.

Everything below is designed to:
- Create long-term compounding
- Make power feel permanent
- Make Godmode mythical
- Drive daily return behavior

### Core XP Equation

Every action produces XP through a multiplicative formula:

```
XP Earned = Base XP × Level Multiplier × Streak Multiplier × Power-Up Multiplier × Meta Bonuses
```

This creates a real progression economy where early actions compound into exponential late-game power gains.

### Base XP Sources

| Action            | XP   | Purpose                        |
| ----------------- | ---- | ------------------------------ |
| Complete Quest    | 100  | Standard progression reward    |
| Mini Boss         | 300  | Milestone achievement          |
| Final Boss        | 700  | Major rank advancement         |
| Daily Login       | 25   | Habit reinforcement            |
| Streak Completion | 50   | Dedication bonus               |
| Power-Up Session  | 75   | Multiplied by active power-ups |
| Build Deploy      | 500  | Real-world production proof    |
| Monetization Proof| 1,000 | Portfolio milestone (Godmode path) |

### Level Multipliers (Ascension Impact)

Each rank amplifies all XP earned:

| Rank      | Multiplier | Philosophy                |
| --------- | ---------- | ------------------------- |
| Noob      | 1.0×       | Entry-level baseline      |
| User      | 1.1×       | Early acceleration        |
| Hacker    | 1.25×      | System mastery begins     |
| Engineer  | 1.4×       | Production-grade power    |
| Architect | 1.6×       | Design authority          |
| Overlord  | 2.0×       | Leadership tier           |
| Godmode   | 3.0×       | Exponential tier (rare)   |

### Level-Up XP Requirements

Total XP required to advance through the Ascension Ladder:

| Transition         | XP Needed | Cumulative | Philosophy                    |
| ------------------ | --------- | ---------- | ----------------------------- |
| Noob → User        | 1,000     | 1,000      | First competency gate         |
| User → Hacker      | 3,000     | 4,000      | System bending mastery        |
| Hacker → Engineer  | 7,000     | 11,000     | Production engineering entry  |
| Engineer → Architect | 15,000  | 26,000     | Design thinking unlocked      |
| Architect → Overlord | 30,000  | 56,000     | Leadership tier entry         |
| Overlord → Godmode | 100,000   | **156,000** | **Exponential difficulty** |

**Key Design Principle**: Godmode is not 2× harder than Overlord. It is **exponentially harder** (4× more XP than the entire Noob→Overlord path). This makes L7 mythical, rare, and deeply respected.

### Streak Multiplier (Daily Habit Engine)

Consecutive daily play multiplies all XP earned:

| Daily Streak | Multiplier | Gate                          |
| ------------ | ---------- | ----------------------------- |
| 1–3 days     | 1.0×       | Baseline (no bonus)           |
| 4–7 days     | 1.1×       | Early discipline bonus        |
| 8–14 days    | 1.25×      | Habit formation engaged       |
| 15–30 days   | 1.5×       | Deep engagement tier          |
| 30+ days     | 2.0×       | Master habit tier             |

**Streak Reset Rule**: Missing a single day resets the streak to 0 (harsh penalty for engagement loss). However, Meta Tree nodes (Streak Shield) can protect 1 missed day without reset.

### Power-Up Multipliers (Active Boost Stack)

Active Power-Ups multiplicatively stack (capped at 3× total to prevent broken economies):

| Power-Up      | Multiplier | Duration |
| ------------- | ---------- | -------- |
| Focus Mode    | +20% XP    | 25 min   |
| Memory Lock   | +25% XP    | 30 min   |
| XP Multiplier | +50% XP    | 60 min   |
| Time Warp     | +75% XP    | 45 min   |

**Stacking Rule**: Multipliers stack multiplicatively and are capped at 3× total to prevent broken economies.

**Stacking Example**:
- Activate XP Multiplier (+50%) + Focus Mode (+20%) = 1.5 × 1.2 = 1.8× total
- Cap prevents abuse: Maximum 3.0× from Power-Ups alone

### Meta Tree Bonuses (Permanent Upgrades)

Skill Tree nodes in the **🛡️ Meta Tree** permanently modify XP economics:

| Node               | Effect                           | Unlock Level |
| ------------------ | -------------------------------- | ------------ |
| Streak Shield      | Miss 1 day without losing streak | L3 (Hacker)  |
| XP Booster         | Permanent +10% to all XP earned  | L4 (Engineer)|
| Godmode Gate       | Unlock Godmode eligibility       | L5+ required |
| Ascension Seal     | L7 prestige badge on profile     | L7 (Godmode) |

### Stacking All Bonuses Example (End-game Godmode Player)

```
Base XP: 100 (Daily Login)
× 3.0 (Godmode rank multiplier)
× 2.0 (30+ day streak)
× 1.8 (XP Multiplier + Focus Mode active)
× 1.1 (XP Booster node)
= 100 × 3.0 × 2.0 × 1.8 × 1.1 = 1,188 XP per login

vs. Noob with no streak:
100 × 1.0 × 1.0 × 1.0 × 1.0 = 100 XP
```

This **11.8× gap** creates status hierarchy and long-term engagement incentive.

### Godmode Requirement (Not Optional)

Reaching L7 (Godmode) is not just an XP threshold. It requires **proof of mastery**:

**All five conditions must be met**:

1. **XP Accumulation**: 100,000 XP (Overlord → Godmode threshold)
2. **Level 6 Final Bosses**: Complete all 5 games at L6+ and defeat their Final Boss
3. **Public Deployment**: Deploy a real-world, production system (open-source GitHub repo, API deployment, or published tool)
4. **Authority Review**: Submit portfolio for human review (proof of real skill, not just game farming)
5. **Ascension Seal**: Receive the Ascension Seal badge (grants Godmode privileges permanently)

**Why This Matters**:
- **No fake progression**: L7 players have demonstrated real-world mastery
- **Portfolio-driven**: Godmode is a career credential, not just a game badge
- **Human validation**: Authority review prevents gaming the system
- **Mythical status**: Only ~1–5% of players reach Godmode (creates cultural respect)

### Ascension Ranks (Full Mapping)

Each game's progression maps to the 7-Level Ascension Ladder with XP thresholds:

- **L1 (Noob)**: 0–1,000 XP → "I have entered the system."
- **L2 (User)**: 1,000–4,000 XP → "I can operate tools."
- **L3 (Hacker)**: 4,000–11,000 XP → "I can bend systems."
- **L4 (Engineer)**: 11,000–26,000 XP → "I can build systems."
- **L5 (Architect)**: 26,000–56,000 XP → "I can design machines."
- **L6 (Overlord)**: 56,000–156,000 XP → "I command automation armies."
- **L7 (Godmode)**: 156,000+ XP → "I define the future systems." (Requires cross-game mastery + portfolio proof)

### Total Graduation Path

**Single game L7**: 156,000 XP (with multipliers in effect)
**Cross-game Godmode** (all 5 games at L5+ + portfolio): ~300,000+ cumulative XP (extreme end-game achievement)

### XP Economics Philosophy

The SixtySeven XP engine is **not fake points**. It is a **real progression economy** where:

✅ Early grind is rewarding (Noob→Engineer phase is accessible)
✅ Late game is exponentially harder (Godmode requires proof, not just time)
✅ Streaks are powerful (2.0× multiplier at 30+ days creates habit loops)
✅ Power-Ups accelerate (stackable multipliers in active play sessions)
✅ Skill Trees are permanent (Meta Tree bonuses compound forever)
✅ Portfolio proof is required (Godmode is a real credential)

---

## 8. Typography (Lock)

| Use      | Font           |
| -------- | -------------- |
| Headings | Space Grotesk  |
| UI       | Inter          |
| Numbers  | JetBrains Mono |

---

## 9. Experience Law (Core Design Philosophy)

Every game element must:

* Produce something real
* Increase player power
* Unlock visible abilities
* Create portfolio output
* Feel like forward progress
* Reinforce the game/skill progression narrative

UI elements must include game visual language: glows, gradients, badges, XP bars.
Boss levels, level locks, and progression states must be visible at all times.
Even discovery zones (read/audio/video) must have subtle game styling.

**No passive watching. No educational/course-like layouts. Theme violations are bugs.**

---

## 10. Naming Rules

Never use:

* Course
* Lesson
* Chapter
* Module

Always use:

* Game
* Level
* Quest
* Boss
* Power

---

## 11. Design Authority

If any future change conflicts with this file, **this file wins.**

---

## 12. Homepage Layout Grid

The homepage is the entry point to the platform—it must immediately communicate the game structure and drive navigation into either Power Up or GAMES zones.

### Grid Structure (Desktop: 12-column, Mobile: 4-column, Tablet: 8-column)

| Section      | Grid Span | Height   | Purpose                                      |
| ------------ | --------- | -------- | -------------------------------------------- |
| Hero Zone    | Full      | 60vh     | Neural Spectrum gradient, headline, "START"  |
| Identity Block | Full    | Auto     | What is SixtySeven (not course, is skill-forging) |
| Games Hub    | Full      | Auto     | 5 game cards in responsive grid (1–2–5 layout) |
| Core Pillars | Full      | Auto     | 3 pillar cards: Game-Structured, AI-Native, Real Power |
| CTA Zone     | Full      | 40vh     | Dark hero section with final call-to-action  |

### Hero Zone Specifications

**Background**: Neural Spectrum gradient (`linear-gradient(135deg, #26E6C8, #2A8CFF, #7B3FE4, #FF4FD8, #FF8A00)`)

**Text**: 
- Headline: Space Grotesk, 64px (desktop), bold, Neural Navy (#0F172A)
- Subheadline: Inter, 24px, Neural Navy
- CTA Button: Gradient background (`linear-gradient(90deg, #FF8A00, #FF4FD8)`), white text, 18px Inter bold, min 48px height, glow effect

**Layout**: Center-aligned, 80% max-width, 60px padding top/bottom

### Identity Block Specifications

**Background**: Pure White (#FFFFFF)

**Grid**: 2 columns (desktop), 1 column (mobile)

**Content Left**: 
- Headline: "This is not a course platform. This is a skill-forging engine."
- Body: 3–4 sentences differentiating SixtySeven
- Font: Space Grotesk (headline), Inter (body)
- Color: Neural Navy (#0F172A)

**Content Right**:
- Table: Traditional Learning vs SixtySeven AI (6 rows)
- Use monospace (JetBrains Mono) for comparison items
- Left column: dim gray (#999), right column: Intelligence Blue (#2A8CFF)

**Spacing**: 80px padding, 40px column gap

### Games Hub Grid

**Background**: Soft Snow (#F9FAFB)

**Layout**: 5 game cards responsive (5 cols on desktop, 2 cols tablet, 1 col mobile)

**Card Grid**: Max 1200px width, centered, 20px gap

**Padding**: 60px top/bottom, 40px sides

---

## 13. Games Hub Card System

Game cards are the **power-forging interface** of SixtySeven AI. They must feel like games, quests, status symbols, skill factories, and career-defining machines—not courses.

### Game Card Structure (Base Anatomy)

```
┌────────────────────────────────────┐
│   GAME ICON        LEVEL BADGE     │
│                                    │
│   GAME NAME                        │
│   Short identity tagline           │
│                                    │
│   YOUR PROGRESS BAR                │
│   [■■■■■■■□□□□□□]   Level 3 / 10   │
│                                    │
│   UNLOCKS                          │
│   • Tools                          │
│   • Systems                        │
│   • Monetizable builds             │
│                                    │
│   SKILL TREE PREVIEW               │
│   ⚙️  🧠  ⚡  💰                     │
│                                    │
│   [ ENTER GAME ]                   │
└────────────────────────────────────┘
```

### Card Rarity Tiering System

Games are ranked by progression level to signal status and investment:

| Tier      | Visual Frame         | Meaning                   | Unlock              |
| --------- | -------------------- | ------------------------- | ------------------- |
| Starter   | Flat clean border    | Entry-level games         | Immediate access    |
| Advanced  | Soft glow edge       | Career builders           | Level 5+ completion |
| Elite     | Gradient frame       | Professional mastery      | Level 10+ completion |
| Master    | Animated frame       | Life-level power          | Portfolio published |

### Game Identity Language (Visual & Emotional)

Each game has a distinct visual vibe that communicates its power level:

| Game              | Visual Vibe        | Emotion                  | Primary Gradient                            |
| ----------------- | ------------------ | ------------------------ | ------------------------------------------- |
| Prompt Architect  | Teal / Navy        | Precision power          | `linear-gradient(135deg, #26E6C8, #2A8CFF)` |
| Agent Engineer    | Purple / Indigo    | Control                  | `linear-gradient(135deg, #2A8CFF, #7B3FE4)` |
| Automation Forge  | Orange / Red       | Production               | `linear-gradient(135deg, #7B3FE4, #FF4FD8)` |
| Creator OS        | Pink / Blue        | Influence                | `linear-gradient(135deg, #FF4FD8, #FF8A00)` |
| Startup Builder   | Gold / Black       | Wealth & leverage        | `linear-gradient(135deg, #FF8A00, #26E6C8)` |

### Game Card Anatomy (Full Spec)

| Element              | Specification                                   |
| -------------------- | ----------------------------------------------- |
| **Background**       | Game-specific gradient (135deg variation)       |
| **Border**           | 2–3px solid, gradient (90deg matching game)    |
| **Border Radius**    | 12px                                            |
| **Padding**          | 28px (desktop), 20px (mobile)                   |
| **Min Height**       | 360px (desktop), 300px (mobile)                 |
| **Glow Effect**      | `box-shadow: 0 0 40px rgba([game-color], 0.4)` |
| **Hover State**      | Scale 1.08, glow intensifies, shadow deepens    |
| **Lock State**       | 50% opacity, lock icon overlay, dim text        |
| **Unlocked State**   | Full opacity, glowing border, interactive       |

### Game Card Layout (Vertical Stack)

```
┌──────────────────────────────────────┐
│  [Game Icon: 48x48]  [Level Badge]   │  Icon left, badge top-right
│                                      │
│  GAME TITLE                          │  Space Grotesk, 28px, bold
│  Short identity tagline              │  Inter, 14px, game-color secondary
│                                      │
│  PROGRESS BAR                        │
│  [■■■■■■■□□□□] Level 4 / 10         │  XP Gradient, JetBrains Mono labels
│                                      │
│  UNLOCKS (Skill Tree)                │  Inter, 13px, Neural Navy
│  • Tool frameworks                   │  Bullet points, icons optional
│  • Advanced systems                  │
│  • Monetizable outputs               │
│                                      │
│  SKILL ICONS (Preview)               │
│  ⚙️  🧠  ⚡  💰                        │  4 representative skill icons
│                                      │
│  [ ENTER GAME ]                      │  Full-width CTA, 48px height
└──────────────────────────────────────┘
```

### Progress Bar Specifications

**Container**:
- Height: 8px
- Background: #E5E7EB (light gray)
- Border radius: 4px
- Margin bottom: 12px

**Fill**:
- Gradient: Game-specific (use primary gradient)
- Animation: Smooth fill on card load
- Label: JetBrains Mono, 11px, "Level X / Y"

**Semantics**:
- 0–20%: Not started
- 20–50%: Early progression
- 50–75%: Mid-game mastery
- 75–99%: Near completion
- 100%: Boss level unlocked

### Unlocks Section (Feature List)

**Typography**:
- Heading: "UNLOCKS" (Inter, 11px, caps, Neural Navy #0F172A)
- Items: Inter, 13px, Neural Navy
- Max 3 items per card (maintain clean look)

**Content Examples**:
- For Prompt Architect: "Prompt frameworks", "Reusable command packs", "AI thinking models"
- For Agent Engineer: "Task agents", "Memory agents", "Self-healing workflows"
- For Automation Forge: "Lead engines", "Sales bots", "Ops automation"
- For Creator OS: "Content blueprints", "Audience engagement", "Monetization templates"
- For Startup Builder: "Product-market fit", "Funding pitches", "Revenue models"

### Skill Tree Preview Icons

**Position**: Below unlocks list, horizontal row

**Icons** (4 emoji/SVG):
- ⚙️ Systems
- 🧠 Intelligence
- ⚡ Speed
- 💰 Value

**Spacing**: 12px gap, centered

**Interaction**: Hover shows tooltip of what skill level is (e.g., "Systems: Level 4")

### ENTER GAME Button (CTA)

**Style**:
- Background: Game-specific gradient (`linear-gradient(90deg, [game-primary], [game-secondary])`)
- Text: Pure White (#FFFFFF), Inter 16px bold
- Height: 48px (minimum touch target)
- Width: 100% of card padding
- Border: None
- Border Radius: 6px
- Cursor: pointer
- Default glow: `box-shadow: 0 0 20px rgba([game-color], 0.3)`

**Hover State**:
- Glow intensifies: `0 0 30px rgba([game-color], 0.6)`
- Scale: 1.02 (subtle lift)
- Brightness: +5%

**Interaction**:
- Click → Navigate to `/games/[game-slug].html`
- Locked card: Button disabled, shows lock icon + "Unlock at Level X"

### Level Badge (Top-Right Corner)

**Position**: Absolute, top-right, 12px margin

**Style**:
- Background: Game-specific color (primary gradient start)
- Text: Pure White
- Font: JetBrains Mono, 11px, bold
- Padding: 6px 10px
- Border Radius: 4px
- Content: "Level X" or "LOCKED 🔒"

**For Starter Cards**: "FREE"
**For Advanced Cards**: "LEVEL 5+"
**For Elite Cards**: "LEVEL 10+"
**For Master Cards**: "LEVEL 25+"

### Locked State Rendering

When a card is locked (prerequisites not met):

- **Opacity**: 50% (`opacity: 0.5`)
- **Lock Icon**: Large centered overlay (32x32)
- **Lock Text**: "Unlock at Player Level X" (Center, Inter 12px)
- **Button**: Disabled, shows "LOCKED 🔒" text
- **Border**: Dimmed (50% opacity of normal)
- **Glow**: Removed

### Example Cards (Full Render)

#### PROMPT ARCHITECT (Starter)

```
┌──────────────────────────────────────────┐
│  🎯                    [LEVEL 1]          │
│                                          │
│  PROMPT ARCHITECT                        │
│  Build elite command systems              │
│                                          │
│  [■■■■■■■■□□]  Level 4 / 10              │
│                                          │
│  UNLOCKS                                 │
│  • Prompt frameworks                     │
│  • Reusable command packs                │
│  • AI thinking models                    │
│                                          │
│  ⚙️  🧠  ⚡  💰                            │
│                                          │
│  [ ENTER GAME ]                          │
└──────────────────────────────────────────┘
```

#### AGENT ENGINEER (Advanced)

```
┌──────────────────────────────────────────┐
│  🤖                    [LEVEL 5+]         │
│                                          │
│  AGENT ENGINEER                          │
│  Build autonomous AI workers              │
│                                          │
│  [■■■□□□□□□□]  Level 2 / 12              │
│                                          │
│  UNLOCKS                                 │
│  • Task agents                           │
│  • Memory agents                         │
│  • Self-healing workflows                │
│                                          │
│  ⚙️  🧠  ⚡  💰                            │
│                                          │
│  [ ENTER GAME ]                          │
└──────────────────────────────────────────┘
```

#### AUTOMATION FORGE (Elite)

```
┌──────────────────────────────────────────┐
│  🔧                    [LEVEL 10+]        │
│                                          │
│  AUTOMATION FORGE                        │
│  Build business machines                  │
│                                          │
│  [■□□□□□□□□□□□□□□]  Level 1 / 15         │
│                                          │
│  UNLOCKS                                 │
│  • Lead engines                          │
│  • Sales bots                            │
│  • Ops automation                        │
│                                          │
│  ⚙️  🧠  ⚡  💰                            │
│                                          │
│  [ ENTER GAME ]                          │
└──────────────────────────────────────────┘
```

#### STARTUP BUILDER (Master - LOCKED)

```
┌──────────────────────────────────────────┐
│  💰                    [LOCKED]           │
│                                          │
│  STARTUP BUILDER         [50% opacity]   │
│  Build monetizable AI companies           │
│                                          │
│  [□□□□□□□□□□□□□□□]  Locked               │
│                                          │
│  UNLOCKS                                 │
│  • Fundraising frameworks                │
│  • Go-to-market machines                 │
│  • Revenue multiplication                │
│                                          │
│  ⚙️  🧠  ⚡  💰                            │
│                                          │
│  [ UNLOCK AT LEVEL 25 ]                  │
└──────────────────────────────────────────┘
```

### Interaction Design & Psychology

| Event          | UI Behavior                                    | Purpose                       |
| -------------- | ---------------------------------------------- | ----------------------------- |
| **Hover**      | Card lifts (scale 1.08), border glows brighter | Signals interactivity         |
| **Focus**      | Keyboard focus ring, glow intensifies          | Accessibility + engagement    |
| **Locked**     | Dimmed (50%), lock icon, locked button text    | Shows progression requirement |
| **Level Up**   | Card flashes (2x brief pulse), unlock animation | Celebration + status update   |
| **Mastery**    | Crown icon appears, gold accent, intensified   | Signals achievement           |
| **Mouse Down** | Brief scale (0.98), color shift                | Tactile feedback              |

### Psychological Loop (Why These Cards Work)

Games feel:
- **Collectible**: Rarity tiers create status hierarchy
- **Rankable**: Progress bars show mastery levels  
- **Identity Defining**: Each game signals a skill/power
- **Socially Shareable**: Players want to showcase their tier
- **Career-Advancing**: Unlocks map to real, monetizable skills

**Player Behavior**:
1. Sees Starter games → Immediately accessible, low friction
2. Completes Level 1 → Sees Advanced cards unlock
3. Pursues next game → Feels progression + status growth
4. Reaches Elite/Master → Extreme social proof + identity
5. Portfolio publish → 1000 XP + "Master" badge = Permanent status

Players don't "take courses". They **own games**. They **forge skills**. They **advance their career**.

### Card Layout Specs (Detailed)

**Dimensions**:
- Min width: 280px
- Max width: 420px
- Min height: 360px (desktop), 300px (mobile)
- Padding: 28px (desktop), 20px (mobile)
- Border radius: 12px
- Gap between cards: 20px (desktop), 12px (mobile)

**Spacing Within Card**:
- Icon to title: 16px
- Title to tagline: 4px
- Tagline to progress bar: 12px
- Progress bar to unlocks: 16px
- Unlocks to skill icons: 12px
- Skill icons to button: 16px

**Typography**:
- Title: Space Grotesk, 28px, bold, game-color
- Tagline: Inter, 14px, game-color secondary (60% opacity)
- Unlocks label: Inter, 11px, caps, Neural Navy
- Unlocks items: Inter, 13px, Neural Navy
- Button: Inter, 16px, bold, white
- Level badge: JetBrains Mono, 11px, bold

### Responsive Behavior

| Breakpoint | Columns | Card Width | Gap  | Min Height |
| ---------- | ------- | ---------- | ---- | ---------- |
| Mobile     | 1       | Full       | 12px | 300px      |
| Tablet     | 2       | Auto       | 16px | 320px      |
| Desktop    | 5       | Auto       | 20px | 360px      |

**Mobile Card Adjustments**:
- Padding: 20px (reduced from 28px)
- Title font: 24px (reduced from 28px)
- Tagline font: 13px
- Icon size: 40x40 (reduced from 48x48)
- Button height: 44px (touch target minimum)

### CSS Variables (Recommended)

```css
--game-card-padding-desktop: 28px;
--game-card-padding-mobile: 20px;
--game-card-radius: 12px;
--game-card-min-width: 280px;
--game-card-max-width: 420px;
--game-card-min-height-desktop: 360px;
--game-card-min-height-mobile: 300px;

--game-card-glow-starter: 0 0 30px rgba(38, 230, 200, 0.3);
--game-card-glow-advanced: 0 0 40px rgba(42, 140, 255, 0.35);
--game-card-glow-elite: 0 0 50px rgba(123, 63, 228, 0.4);
--game-card-glow-master: 0 0 60px rgba(255, 79, 216, 0.45);

--progress-bar-height: 8px;
--progress-bar-gradient: linear-gradient(90deg, #2A8CFF, #FF8A00);

--button-height-desktop: 48px;
--button-height-mobile: 44px;
```

### Validation Checklist

- [ ] All cards use game-specific locked gradients
- [ ] Progress bars animate on card load
- [ ] Hover state scales 1.08, glow intensifies
- [ ] Locked cards show 50% opacity + lock icon
- [ ] Level badge visible, tier-specific text
- [ ] Unlocks section shows 3 features max
- [ ] Skill icons (4) render horizontally
- [ ] ENTER GAME button is 48px (44px mobile)
- [ ] Cards responsive: 1 col mobile, 2 col tablet, 5 col desktop
- [ ] No card overflow at any breakpoint
- [ ] Psychological loop clear: progression → status → identity

---

## 14. Skill Tree System (Permanent Progression Framework)

Skill Trees are the **permanent brain upgrade system** of SixtySeven AI. Each game contains **four immutable skill trees** that never reset. Players evolve through specialization, not repetition.

### Core Philosophy

Players do not "learn topics." They **evolve their brain map** through permanent identity growth.

Each tree unlocks visible abilities, tools, and multipliers that persist across all games.

### Universal Tree Structure

Every game uses the same 4-tree logic—this creates a consistent OS that players internalize:

```
                GODMODE CORE
                     ▲
        ┌────────────┼────────────┐
        │            │            │
    SYSTEMS      INTELLECT      OUTPUT     (Meta Layer)
        ▲            ▲            ▲
   CORE SKILLS – CORE SKILLS – CORE SKILLS
```

### The Four Trees (Non-Negotiable)

| Tree            | Icon | What it upgrades             | Identity          | Psychological Role                |
| --------------- | ---- | ---------------------------- | ----------------- | --------------------------------- |
| **Mind Tree**   | 🧠   | Thinking models, clarity     | Intelligence      | How you think (metacognition)     |
| **Systems Tree** | ⚙️   | Workflows, agents, automation | Control           | How you build (engineering power) |
| **Output Tree** | ⚡   | Speed, production, leverage  | Leverage          | How you multiply (productivity)   |
| **Meta Tree**   | 🛡️   | XP, streaks, unlock privileges | Power            | How you grow (progression hacks)  |

### Node Types (Core Mechanics)

| Node Type    | Effect                                  | Visual                   |
| ------------ | --------------------------------------- | ------------------------ |
| **Skill Node** | Adds permanent ability/technique        | Teal pulse, upgrades UI  |
| **Tool Node**  | Unlocks systems, templates, frameworks | Blue glow, adds buttons  |
| **Boost Node** | Multiplies performance (XP, speed, etc.) | Gold shimmer, animates bar |
| **Gate Node**  | Level lock, blocks progression          | Red shadow, locked icon  |
| **Godmode Node** | Only accessible at L7, rewrites core   | Godmode gradient, pulse  |

### Tree Evolution Across Ascension Ranks

Trees evolve as players advance through the 7-Level Ascension Ladder:

| Level (Rank)     | Tree State                            | Unlock Behavior                |
| ---------------- | ------------------------------------- | ------------------------------ |
| **L1 (Noob)**    | Core root nodes visible               | 3 core nodes per tree unlock   |
| **L2 (User)**    | Branching begins                      | 2 new branches per tree        |
| **L3 (Hacker)**  | Specialization paths open             | 3 advanced nodes per tree      |
| **L4 (Engineer)** | System chaining unlocked              | Cross-tree connections visible |
| **L5 (Architect)** | Full-tree visibility                  | All non-Godmode nodes visible  |
| **L6 (Overlord)** | Meta stacking (multiplier chains)     | Advanced multiplier nodes      |
| **L7 (Godmode)** | Core rewrites & public frameworks     | Golden core + authority badges |

### Example: Prompt Architect Skill Trees

#### 🧠 Mind Tree (Intelligence)
**L1–L2 Root**:
- Prompt Logic
- Reasoning Chains
- Prompt Compression

**L3–L5 Branches**:
- Meta Prompting
- Few-Shot Learning
- Chain-of-Thought Mastery
- Constitutional AI Thinking

**L7 Godmode**:
- Custom Language Models
- Authority Framework Publishing

#### ⚙️ Systems Tree (Control)
**L1–L2 Root**:
- Prompt OS
- Multi-Agent Chains
- Memory Systems

**L3–L5 Branches**:
- Error Self-Heal
- Agent Orchestration
- Persistent Knowledge Bases
- Workflow Automation

**L7 Godmode**:
- Meta Agent Factory
- Public System Templates

#### ⚡ Output Tree (Leverage)
**L1–L2 Root**:
- Speed Multiplier (basic)
- Prompt Packs
- Product Templates

**L3–L5 Branches**:
- Monetization Nodes
- API Integration
- Batch Processing
- Scaling Automation

**L7 Godmode**:
- 10× Output Multiplier
- Commercial Framework Rights

#### 🛡️ Meta Tree (Power)
**L1–L2 Root**:
- XP Multiplier
- Streak Shield
- Daily Bonus

**L3–L5 Branches**:
- Godmode Gate (L7 unlock requirement)
- Authority Badge
- Portfolio Boost
- Cross-Game XP Share

**L7 Godmode**:
- Godmode Core Rewrite
- Mentorship Powers
- 1.5× Lifetime XP Multiplier

### Visual UI Concept

Skill Trees are displayed as **glowing neural constellations**:

```
┌─────────────────────────────────────────┐
│  MIND TREE (Intelligence)  [★★★★★☆]   │
├─────────────────────────────────────────┤
│                                         │
│      [Prompt Logic]  ─────  [Reasoning] │  (Connected by lines)
│           ▲                     ▲       │
│           │                     │       │
│      [Compression] ◄─────────────       │
│                                         │
│  ┌──────────────────────────┐           │
│  │  L4: Meta Prompting      │ (locked)  │
│  │  Unlock at L4: Engineer  │           │
│  └──────────────────────────┘           │
│                                         │
│  [NODES UNLOCKED: 3/12] [Progress: 25%]│
├─────────────────────────────────────────┤
│  Selected Node Details:                 │
│  Prompt Logic                           │
│  ✓ Permanent ability                    │
│  ✓ +15% clarity on all prompts          │
│  ✓ Unlocked at: L1 (Noob)               │
└─────────────────────────────────────────┘
```

**Visual States**:
- **Available node**: Pulses with tree color, clickable
- **Locked node**: Shadowed, locked icon overlay, tooltip shows unlock condition
- **Godmode node**: Golden border, animated glow pulse, L7 only
- **Connected nodes**: Lines show dependency chains
- **Hover**: Reveals permanent upgrades and mechanics

### Tree Unlocking Sequence

**When player completes each level**:

1. Level 1 → Core nodes unlock + visual pop animation
2. Level 2 → First branch unlocks, connection lines appear
3. Level 3 → Specialization paths become available
4. Level 4 → Cross-tree connections visible
5. Level 5 → All nodes visible (except Godmode)
6. Level 6 → Meta stacking multipliers unlock
7. Level 7 → Godmode core becomes interactive

**XP Rewards for Node Unlock**:
- Skill Node: +0 XP (automatic at level)
- Tool Node: +50 XP
- Boost Node: +100 XP
- Godmode Node: +1000 XP (L7 only)

### Psychological Loop

**Why This Works**:
- **Permanent Identity**: Unlocks feel like identity evolution, not course completion
- **Constellation Metaphor**: Players see their "brain constellation" grow over time
- **Cross-Game Consistency**: Same trees in all games create unified progression OS
- **Authority Feeling**: Each unlock adds visible power to profile
- **Meta Reward**: Boost nodes that multiply XP/speed create win-feeling loops

**Player Behavior Loop**:
1. Completes Level X
2. Sees new nodes light up in trees
3. Explores and unlocks new Skill Node
4. Feels identity upgrade (e.g., "I unlocked Meta Prompting")
5. Uses new ability in next game/quest
6. Sees XP multiplier from Boost Node
7. Chases next unlock for more power

### Skill Tree Interaction Rules

**On Desktop**:
- Click node → Side panel shows details
- Hover node → Tooltip appears (0.3s delay)
- Click "Unlock" → Node activates, animation plays
- Progress bar shows trees completion % per level

**On Mobile**:
- Tap node → Full-screen modal with details
- Swipe between trees (horizontal carousel)
- Collapse/expand tree sections for mobile readability
- Progress rings instead of bars

### Cross-Game Tree Sharing (Advanced)

**Godmode Tier Only**:

When a player reaches L7 (Godmode) in one game, advanced nodes **port to other games**:

| Node Ported | Effect | Example |
| --- | --- | --- |
| Mind nodes | Thinking clarity carries over | "Meta Prompting" applies to Agent thinking |
| Systems nodes | Automation patterns reusable | "Error Self-Heal" becomes cross-game healing |
| Output nodes | Multipliers stack | "Speed Multiplier" applies to all games |
| Meta nodes | Authority extends | "Mentorship" power applies universally |

This creates **end-game progression** where Godmode is a **living achievement**, not a static badge.

### Tree Reset Policy (SACRED)

**NEVER reset Skill Trees.** Reset is cultural death for SixtySeven AI.

If a game is redesigned:
- Old tree nodes → Archive (shows history on profile)
- New tree nodes → Unlocks alongside archived nodes
- Player keeps all earned upgrades permanently
- Portfolio shows "Legacy Node" badge

### Validation Checklist

- [ ] All 4 trees present in every game
- [ ] Node progression matches Ascension Ladder (L1–L7)
- [ ] Godmode nodes visible only at L7
- [ ] Cross-tree connections visible at L4+
- [ ] Boost nodes multiply XP/speed/output
- [ ] Trees never reset (permanent design rule)
- [ ] Visual state (locked/available/completed) always clear
- [ ] Mobile responsiveness (tap, carousel, modal)
- [ ] XP rewards assigned for unlock actions
- [ ] Psychological loop reinforced at each unlock

---

## 15. Level 1 Onboarding Flow

When a player enters a game, Level 1 must hook them immediately, establish game rules, and deliver their first win within 5 minutes.

### Level 1 Container Specs

**Background**: Dark Mode (Neural Navy #0F172A) with subtle grid pattern

**Layout**: Center container, max-width 900px, 60px padding

**Typography**: Space Grotesk headings, Inter body text, all text Pure White (#FFFFFF)

### Level 1 Flow (4 Screens)

#### Screen 1: Level Intro

```
┌─────────────────────────────────┐
│  LEVEL 1: [Game-Specific Name]  │  (Space Grotesk, 48px)
│  The Foundation                 │  (Subheadline, 24px)
├─────────────────────────────────┤
│  [32x32 Level Icon]             │
├─────────────────────────────────┤
│  Description (2–3 sentences)    │  (Inter, 16px, #E5E7EB)
│  What you'll build & unlock     │
├─────────────────────────────────┤
│  [NEXT → Button]                │  (CTA Gradient)
└─────────────────────────────────┘

Duration: Auto-advance after 3s or click NEXT
```

#### Screen 2: Mission Brief

```
┌─────────────────────────────────┐
│  YOUR MISSION                   │  (Space Grotesk, 32px)
├─────────────────────────────────┤
│  [Mission Icon]                 │
├─────────────────────────────────┤
│  Primary Task                   │  (Inter, 18px bold)
│  [Checkbox] Subtask 1           │
│  [Checkbox] Subtask 2           │
│  [Checkbox] Subtask 3           │
├─────────────────────────────────┤
│  XP REWARD: 100 XP              │  (JetBrains Mono, Momentum Orange)
│  [ACCEPT MISSION →]             │  (CTA Gradient)
└─────────────────────────────────┘

Interaction: Checkboxes are visual only; cannot be checked yet
```

#### Screen 3: Tutorial / First Action

```
┌─────────────────────────────────┐
│  YOUR FIRST POWER-UP            │  (Space Grotesk, 32px)
├─────────────────────────────────┤
│  [Video/GIF: 4-second demo]     │  (Max 640px width)
├─────────────────────────────────┤
│  Guided Action (Game-Specific)  │  (Inter, 16px)
│  Click the orange button below  │
│  or fill the form               │
├─────────────────────────────────┤
│  [Primary Interactive Element]  │  (Styled per game)
│  [Helper Text / Tooltip]        │
└─────────────────────────────────┘

Interaction: Player completes the first real task
```

#### Screen 4: Completion & Unlock

```
┌─────────────────────────────────┐
│  MISSION COMPLETE 🎮            │  (Space Grotesk, 40px)
├─────────────────────────────────┤
│  +100 XP                        │  (Animated: fly from center, JetBrains Mono, 32px)
│  [Progress Bar: 100/1000]       │  (XP Bar gradient, smooth animation)
├─────────────────────────────────┤
│  POWER UNLOCKED:                │  (Space Grotesk, 24px)
│  [Power Icon] [Power Name]      │  (Vibrant Purple badge)
├─────────────────────────────────┤
│  Next Level Available           │
│  [PLAY LEVEL 2 →]              │  (CTA Gradient, primary button)
│  [View Leaderboard]             │  (Secondary link)
└─────────────────────────────────┘

Animation: XP counter animates up, progress bar fills, power badge glows
```

### Level 1 Timing & Progression

| Screen | Duration      | Trigger                    |
| ------ | ------------- | -------------------------- |
| 1      | 3s auto / tap | Auto-advance or click NEXT |
| 2      | Until click   | ACCEPT MISSION button      |
| 3      | Until task    | Complete the interactive element |
| 4      | 4s auto       | Auto-advance to Level 2 or stay for celebration |

### Game-Specific Level 1 Variations

Each game's Level 1 must customize **Screen 3** and the **mission definition**:

| Game             | Screen 3 Task                               | Output                |
| ---------------- | ------------------------------------------- | --------------------- |
| Prompt Architect | Write a 3-sentence system prompt            | Prompt string         |
| Agent Engineer   | Define an agent's goal in 1 sentence        | Goal definition       |
| Automation Forge | Connect 2 tools via a workflow diagram      | Visual workflow       |
| Creator OS       | Build a 5-step content outline              | Outline list          |
| Startup Builder  | Define your AI product in 2 sentences       | Product statement     |

### Level 1 XP Rewards (Override Section 5)

| Completion         | XP    |
| ------------------ | ----- |
| Level 1 Complete   | 100   |
| Bonus: Sub-3min    | +25   |
| Bonus: Perfect     | +50   |
| **Total L1 Max**   | **175** |

### Lock States & Visibility Rules

**During Level 1**:
- All future levels appear as **LOCKED** (Navy background, 30% opacity)
- Locked level cards show lock icon, "Level 2" text, no progress bar
- Leaderboard shows only Level 1 entries

**After Level 1 Complete**:
- Level 2 becomes **AVAILABLE** (full color, clickable)
- XP bar updates globally
- Badge "Level 1 Player" appears on profile

---

## 16. Mobile & Responsive Design (All Pages)

All pages must be fully responsive and mobile-friendly across all breakpoints.

### Breakpoints & Grid

**Tailwind Breakpoints**:
- `sm`: 640px (small phones)
- `md`: 768px (tablets)
- `lg`: 1024px (large tablets/desktops)
- `xl`: 1280px (full desktops)

### Navigation (Mobile-First)

**Mobile (< 768px)**:
- Logo: `h-8` (28px)
- Navigation links: Hidden
- Mobile menu toggle button: Visible (hamburger icon)
- Gap: `gap-2` minimal spacing
- Padding: `px-3 py-3` reduced

**Tablet (md, 768px+)**:
- Logo: `h-12` (48px)
- Navigation links: Visible
- Mobile menu toggle: Hidden
- Gap: `gap-6 md:gap-12` increases
- Padding: `px-6 py-4`

**Desktop (lg+)**:
- Logo: `h-16 md:h-20` (64-80px)
- Full navigation visible
- Gap: `lg:gap-8` generous spacing
- Font: `lg:text-sm` larger readable text

### Typography Scaling

All headings must use `clamp()` or responsive classes:

```
Heading Patterns:
- Mobile: text-3xl
- Tablet (sm): text-4xl
- Desktop (md): text-5xl
- Large (lg): text-6xl
```

Example: `<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">`

Body text: Always responsive
- Mobile: `text-sm sm:text-base md:text-lg`
- Default: DO NOT use `text-lg` directly on mobile

### Spacing Consistency

**Padding (Sections)**:
- Mobile: `px-4 py-12` or `px-4 py-16`
- Tablet: `sm:px-6 sm:py-16` or `sm:py-20`
- Desktop: `md:py-24` for large sections

**Gaps (Grids)**:
- Mobile: `gap-2` or `gap-3` (minimal)
- Tablet: `sm:gap-4` or `sm:gap-6`
- Desktop: `lg:gap-5` or `lg:gap-8`

**Margins**: Follow gap patterns, scale vertically

### Cards & Grids (Mobile-First)

**Standard Layout**:
```
Mobile: grid-cols-1 (full width)
Tablet: sm:grid-cols-2 (2 columns)
Desktop: lg:grid-cols-3 xl:grid-cols-5 (5 columns max)
```

Example 5-column grid:
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
```

Card padding scales with breakpoint:
```html
<div class="p-4 sm:p-6 md:p-8">
```

### Mobile Menu Pattern

All pages must implement:

1. **Toggle Button** (hidden on md+):
```html
<button id="mobile-menu-toggle" class="md:hidden p-2 rounded-lg bg-gray-700/40" aria-label="Toggle mobile menu">
    <svg class="w-5 h-5 text-white"><!-- hamburger icon --></svg>
</button>
```

2. **Navigation Links** (hidden on mobile, shown on md+):
```html
<div class="hidden md:flex gap-4 lg:gap-8 items-center">
    <!-- nav links -->
</div>
```

3. **JavaScript Handler**:
```javascript
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
mobileMenuToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.hidden.md\\:flex');
    navLinks.classList.toggle('hidden');
});
```

### Footer Responsiveness

**Mobile**:
- `py-8 px-4` (reduced padding)
- `flex-col` (stacked vertical)
- `gap-4` (tight spacing)
- `text-xs` (small text)

**Desktop**:
- `sm:py-10 sm:px-6` (increase padding)
- `sm:flex-row` (side-by-side)
- `sm:gap-6` (loose spacing)
- `sm:text-base` (readable)

### Buttons & CTAs (Mobile-First)

Button padding scales:
```html
<button class="py-3 px-6 sm:py-4 sm:px-8 text-base sm:text-lg">
```

CTA buttons minimum height: **48px** on all devices
Touch targets (mobile): Minimum **44px × 44px**

### Images & Media Responsive

All images must have `max-width` on mobile:
```html
<img src="..." class="w-full max-w-2xl">
<video style="max-width: 100%;">
```

Hero heights responsive:
```html
<section class="min-h-screen md:min-h-[60vh]">
```

### Tables (Mobile-Friendly)

Tables must NOT overflow on mobile:

```html
<div class="overflow-x-auto">
    <table class="w-full text-sm sm:text-base">
        <!-- table content -->
    </table>
</div>
```

Reduce table font on mobile to prevent overflow:
- Mobile: `text-xs` or `text-sm`
- Desktop: `text-base`

### Testing & QA Checklist

Before shipping any page:

- [ ] Mobile (375px): No horizontal scroll, readable text, tappable buttons
- [ ] Tablet (768px): Proper 2-column layouts, images scale
- [ ] Desktop (1024px+): 3-5 column grids, full feature set
- [ ] Touch targets: All buttons ≥ 44px
- [ ] Legibility: Text readable at all sizes
- [ ] Navigation: Menu toggle works, links accessible
- [ ] Spacing: No overlapping elements at any breakpoint
- [ ] Dark mode: All text visible in both themes
- [ ] Performance: Images optimized, no layout shifts

### Logo Sizing Reference

Consistent logo sizing across breakpoints:

```html
<img src="assets/images/logo.png" 
     class="h-8 sm:h-12 md:h-16 lg:h-20 w-auto">
```

- Mobile: 32px
- Tablet: 48px
- Small desktop: 64px
- Large desktop: 80px

---

## 17. Power-Up Card UI System

Power-Ups are the daily engagement engine. They must feel installable, collectible, and create addictive interaction loops without manipulation.

### Power-Up Philosophy

Power-Ups must:
- Feel like installable upgrades to player abilities
- Be visually collectible and progressive
- Activate fast (one tap)
- Show immediate effect/status
- Drive daily engagement and streaks
- Never feel like paywalls or artificial grind

### Card Anatomy (Non-Negotiable)

Each Power-Up card uses the same internal structure:

```
┌─────────────────────────────┐
│  ICON     POWER-UP NAME     │  (Space Grotesk, bold, Neural Navy)
│  Short tagline              │  (Inter, 14px, gray)
│                             │
│  BOOST BAR (animated)       │  (XP Gradient: #2A8CFF → #FF8A00)
│  [■■■■■■■■■■■■■■■■□□]  80%   │  (JetBrains Mono, 12px)
│                             │
│  What this upgrades:        │  (Inter, 12px, Neural Navy)
│  • Thinking Speed           │
│  • Focus                    │
│  • Memory                   │
│                             │
│  ACTIVE DURATION            │  (Inter, 13px, gray)
│  ⏱ 25 min session           │
│                             │
│  [ ACTIVATE ]               │  (CTA Gradient, 48px height)
└─────────────────────────────┘
```

### Card Rarity System

| Rarity    | Border Style        | Visual Effect | Purpose                  |
| --------- | ------------------- | ------------- | ------------------------ |
| Common    | Thin light border   | Static        | Daily utility            |
| Rare      | Neon glow edge      | Pulse glow    | Performance boosters     |
| Epic      | Gradient frame      | Animated edge | Streak & XP multipliers  |
| Legendary | Animated frame      | Glow + pulse  | Meta upgrades & unlocks  |

### Power-Up Color Language (Locked to SixtySeven)

| Power Type    | Gradient                                    | Icon Color     |
| ------------- | ------------------------------------------- | -------------- |
| Focus / Deep Work | `linear-gradient(135deg, #0F172A, #26E6C8)` | Human Teal     |
| Memory        | `linear-gradient(135deg, #7B3FE4, #2A8CFF)` | Builder Violet |
| Speed         | `linear-gradient(135deg, #2A8CFF, #26E6C8)` | Intelligence Blue |
| Creativity    | `linear-gradient(135deg, #FF4FD8, #FF8A00)` | Growth Pink    |
| Meta Boost    | `linear-gradient(135deg, #FF8A00, #FACC15)` | Momentum Orange |

### Core Power-Up Examples

#### FOCUS MODE (Common)
- **Tagline**: Deep work tunnel vision
- **Boosts**: Focus +30%, Distraction resistance, Task clarity
- **Duration**: 25 min
- **Color**: Navy → Teal
- **Unlock**: Level 1 completion
- **Activation**: 1 tap

#### MEMORY LOCK (Rare)
- **Tagline**: What you learn sticks
- **Boosts**: Retention +50%, Recall speed, Learning compression
- **Duration**: 30 min
- **Color**: Purple → Indigo
- **Unlock**: Level 3 completion
- **Activation**: 1 tap
- **Glow Effect**: Neon pulse

#### XP MULTIPLIER (Epic)
- **Tagline**: Level up faster
- **Boosts**: XP ×1.5, Streak protection, Faster unlocks
- **Duration**: 60 min
- **Color**: Gold → Yellow
- **Unlock**: 7-day streak
- **Activation**: 1 tap
- **Glow Effect**: Animated gradient edge

#### TIME WARP (Legendary)
- **Tagline**: One hour becomes three
- **Boosts**: Execution speed ×3, Output multiplier, Task compression
- **Duration**: 45 min
- **Color**: Orange → Pink
- **Unlock**: Portfolio publish
- **Activation**: 1 tap
- **Glow Effect**: Animated frame + pulse

### Card Layout Specs

**Dimensions**:
- Min width: 280px
- Max width: 400px
- Min height: 320px
- Padding: 24px
- Border radius: 12px

**Spacing**:
- Icon to title: 12px
- Title to tagline: 4px
- Tagline to boost bar: 16px
- Boost bar to boosts list: 16px
- Boosts list to duration: 16px
- Duration to button: 20px

**Typography**:
- Title: Space Grotesk, 20px, bold, Neural Navy
- Tagline: Inter, 14px, #666
- Boost bar label: JetBrains Mono, 11px
- Boosts list: Inter, 13px, Neural Navy
- Duration text: Inter, 13px, #666
- Button: Inter, 14px, bold, white

### Boost Bar Specs

**Container**:
- Height: 6px
- Background: #E5E7EB
- Border radius: 3px
- Margin bottom: 4px

**Fill**:
- Gradient: `linear-gradient(90deg, #2A8CFF, #FF8A00)`
- Animation: Smooth fill on card mount
- Percentage label: JetBrains Mono, 12px, right-aligned

### Interaction States

| State     | Behavior                                            | Duration |
| --------- | --------------------------------------------------- | -------- |
| Default   | Static card, visible all properties                | N/A      |
| Hover     | Scale 1.05, glow pulses, button highlights        | N/A      |
| Active    | Screen tints to card's primary color (10% opacity) | On       |
| Running   | Progress ring animates around card icon            | Duration |
| End       | "Power faded" animation (card fades out 2 sec)     | 2s       |
| Streak    | Card evolves visually (gold border glow)          | Persistent |

### Activation Flow

1. **User sees dashboard** → Power-Up cards display in carousel/grid
2. **User hovers/taps** → Card lifts, glow pulses, CTA highlighted
3. **User activates** → ACTIVATE button shows loading state (2s)
4. **Power activates** → Screen tints, notification appears, timer starts
5. **Running state** → Animated progress ring around icon, countdown visible
6. **Duration ends** → "Power faded" animation, returns to dashboard

### Daily Habit Loop (Drives Engagement)

1. Player opens dashboard
2. Selects Power-Up based on next game
3. Activates (1 tap)
4. Plays a Game for 25–60 min
5. Gains XP + Power bonus
6. Sees streak grow
7. Next day: New Power-Up available

**Result**: Non-manipulative addiction loop that reinforces game progression.

### Power-Up Unlock Rules

| Milestone         | Power Unlock                        | XP Reward |
| ----------------- | ----------------------------------- | --------- |
| Level 1 Complete  | FOCUS MODE (Common)                 | +0 (free) |
| Level 3 Complete  | MEMORY LOCK (Rare)                  | +50       |
| Level 5 Complete  | SPEED BURST (Rare)                  | +50       |
| 7-Day Streak      | XP MULTIPLIER (Epic)                | +200      |
| 14-Day Streak     | CREATIVITY SURGE (Epic)             | +200      |
| Portfolio Publish | TIME WARP (Legendary)               | +500      |
| Boss Level Complete | LEGENDARY POWER (Game-specific)    | +300      |

### Mobile Responsiveness

**Mobile (< 768px)**:
- Card width: Full container, max 350px
- Padding: 20px (reduced)
- Font sizes: -2px all text
- Boost bar height: 5px
- Button height: 44px (touch target)

**Tablet (768px+)**:
- Card width: Max 380px
- Padding: 24px
- Font sizes: Standard
- Boost bar height: 6px
- Button height: 48px

**Desktop (1024px+)**:
- Card width: Max 400px
- Padding: 24px
- Font sizes: Standard
- Boost bar height: 6px
- Button height: 48px

### CSS Variables (Recommended)

```css
--power-card-padding: 24px;
--power-card-radius: 12px;
--power-card-min-width: 280px;
--power-card-max-width: 400px;
--power-card-min-height: 320px;

--boost-bar-height: 6px;
--boost-bar-gradient: linear-gradient(90deg, #2A8CFF, #FF8A00);

--power-glow-common: 0 0 20px rgba(38, 230, 200, 0.2);
--power-glow-rare: 0 0 30px rgba(42, 140, 255, 0.3);
--power-glow-epic: 0 0 40px rgba(123, 63, 228, 0.3);
--power-glow-legendary: 0 0 50px rgba(255, 79, 216, 0.4);
```

### Validation Checklist

- [ ] All cards use locked color gradients
- [ ] Boost bars animate on load
- [ ] Hover state scales and glows
- [ ] Duration timer is always visible
- [ ] ACTIVATE button is 48px+ height
- [ ] Card rarity system is visually distinct
- [ ] Mobile cards scale properly, no overflow
- [ ] Activation animation completes in < 2s
- [ ] Power-Up unlocks align with game progression
- [ ] Daily habit loop encourages 25–60 min sessions

---

## 18. Player Profile UI System

The player profile is a **digital identity card** and **progression dashboard**. It anchors player identity, power, and mastery across all games.

### Profile Philosophy

Every player's profile must:
- **Anchor identity**: Show who they are now (rank, name, avatar)
- **Anchor progression**: Show where they're going (Godmode gate, level ring)
- **Anchor power**: Show active upgrades (power-ups, skill tree unlocks)
- **Anchor mastery**: Show multi-domain expertise (games, achievements, skills)
- **Create social proof**: Show public validation (achievements, streak, rank badge)
- **Drive engagement**: Show clear next-step paths (missions, level unlocks, Godmode progress)

### Profile Layout (Vertical Mobile-First)

```
┌──────────────────────────────────────────┐
│   AVATAR      PLAYER NAME                │
│               Rank: HACKER               │
│                                          │
│   LEVEL RING (animated)                  │
│      ◉─────── LEVEL 3 ───────◉           │
│                                          │
│   TOTAL XP        STREAK                 │
│   12,480 XP      🔥 14 Days               │
│                                          │
│   ACTIVE POWER-UPS                       │
│   [ Focus ] [ Memory ] [ XP+ ]            │
│                                          │
│   CURRENT GAMES                          │
│   Prompt Architect   L3 Hacker           │
│   Automation Forge   L1 Noob              │
│                                          │
│   SKILL TREE CORE                        │
│   🧠  ⚙️  ⚡  🛡                             │
│                                          │
│   ACHIEVEMENTS                           │
│   ▪ First Build                          │
│   ▪ 7-Day Streak                         │
│   ▪ Mini-Boss Slayer                     │
│                                          │
│   GODMODE GATE (locked)                  │
│   24% Complete                           │
│                                          │
│   [ ENTER GAMES HUB ]                    │
└──────────────────────────────────────────┘
```

### Core Components

#### 1. Identity Header

**Location**: Top of profile

**Shows**:
- Avatar (120px circle, bordered with game-primary gradient)
- Player Name (Space Grotesk, 32px, Neural Navy)
- Rank Title (Inter, 16px, game-primary color)
- Edit Profile link (secondary, top-right)

**Specs**:
- Background: Pure White (#FFFFFF) or Soft Snow (#F9FAFB)
- Padding: 24px
- Border-radius: 8px
- Avatar border: 3px gradient matching player's highest-rank game

**Example**:
```
┌────────────────────────────┐
│  [Avatar]  SanjayS         │
│            Rank: Hacker    │
│            [Edit Profile]  │
└────────────────────────────┘
```

#### 2. Level Ring

**Location**: Below identity header

**Shows**:
- Animated glowing circular progress ring
- Current XP count (JetBrains Mono, 20px)
- Rank progress percentage (12,480 / 26,000 XP = 48%)
- Next rank unlock text (Inter, 12px)

**Specs**:
- Ring size: 180px diameter
- Ring thickness: 12px
- Gradient: Game-specific (primary to secondary)
- Fill animation: Smooth 2s on page load
- Center text: JetBrains Mono, bold
- Glow effect: `box-shadow: 0 0 30px rgba([game-color], 0.4)`

**Interaction**:
- On XP gain: Ring pulses (1s scale 1.1)
- On level-up: Ring flashes (3x pulse + 2s scale 1.2)

**Example**:
```
        ◉─────── LEVEL 3 (Hacker) ───────◉
       /  12,480 / 26,000 XP (48%)      \
      /   Next: Engineer (2,520 XP left)  \
```

#### 3. XP & Streak Strip

**Location**: Below level ring

**Shows**:
- Total XP earned (JetBrains Mono, 18px)
- Streak counter with flame icon (🔥)
- Streak day count (JetBrains Mono, 18px)
- Multiplier status (if active)

**Specs**:
- Layout: 2-column grid (desktop), 1-column (mobile)
- Background: Soft Snow (#F9FAFB)
- Padding: 16px
- Border-radius: 8px
- Typography: JetBrains Mono, 14px body, 18px value

**Streak states**:
- 1–3 days: Flame gray (`#999`)
- 4–7 days: Flame yellow (`#FACC15`)
- 8–14 days: Flame orange (`#FF8A00`)
- 15–30 days: Flame gold (`#FFA500`)
- 30+ days: Flame red (`#EF4444`) with pulse animation

**Example**:
```
┌──────────────────────────────┐
│ TOTAL XP: 12,480  STREAK: 🔥 14 Days │
│ Multiplier: 1.5× (Habit Tier) │
└──────────────────────────────┘
```

#### 4. Active Power-Ups Strip

**Location**: Below XP strip

**Shows**:
- Up to 3 active power-up badges
- Each badge shows: icon, name, remaining time
- Empty state: "Activate a Power-Up to boost your session"

**Specs**:
- Layout: Horizontal flex row, wrap on mobile
- Padding: 12px
- Border-radius: 8px
- Gap: 8px between badges

**Badge specs** (each):
- Background: Power-up's primary gradient
- Height: 44px
- Padding: 8px 16px
- Border-radius: 6px
- Font: Inter, 12px, bold white
- Content: `[Icon] Name (15m 23s left)`
- Animation: Countdown timer updates every second, fades at 30s remaining

**Example**:
```
┌────────────────────────────────────────┐
│ ACTIVE POWER-UPS                       │
│ [🧠 Memory Lock (8m)]  [⚡ Speed+] ... │
└────────────────────────────────────────┘
```

#### 5. Current Games Panel

**Location**: Below power-ups

**Shows**:
- List of all 5 games player is enrolled in
- Each game shows: icon, name, current level, rank, progress bar
- Locked games show: lock icon, unlock condition

**Specs**:
- Background: Pure White (#FFFFFF)
- Layout: Stack (1 column)
- Padding: 20px
- Border-radius: 8px
- Gap: 12px between game rows

**Game row specs** (each):
- Layout: Icon (40px) + Game info + Progress bar
- Icon size: 40x40
- Game name: Space Grotesk, 14px, Neural Navy, bold
- Rank badge: JetBrains Mono, 11px, game-primary bg
- Progress bar: 120px width, 6px height, XP gradient
- CTA: "Continue Game" link (secondary, right-aligned)

**Example**:
```
┌────────────────────────────────────────┐
│ CURRENT GAMES                          │
├────────────────────────────────────────┤
│ 🎯 Prompt Architect [L3 Hacker]       │
│    [■■■■■■■■□□□□]  45% to L4         │
│    [Continue Game →]                   │
│                                        │
│ 🤖 Agent Engineer [L1 Noob]           │
│    [■■□□□□□□□□□□]  18% to L2         │
│    [Continue Game →]                   │
└────────────────────────────────────────┘
```

#### 6. Skill Tree Core

**Location**: Below games panel

**Shows**:
- 4 skill tree icons: 🧠 🎮 ⚡ 🛡️
- Each icon is clickable, opens full constellation view
- Tooltip shows: "Tree Name (X/Y nodes unlocked)"

**Specs**:
- Layout: 4-column grid, centered
- Icon size: 56x56
- Background: Light circle, gradient border
- Padding: 40px section top/bottom
- Gap: 20px between icons
- Font: Inter, 12px body under each icon

**Icon styling**:
- Background: Subtle gradient (tree color at 10% opacity)
- Border: 2px solid tree color
- Glow on hover: `box-shadow: 0 0 20px rgba([tree-color], 0.3)`
- Scale on hover: 1.1

**Example**:
```
┌────────────────────────────────────────┐
│ SKILL TREE CORE                        │
├────────────────────────────────────────┤
│   🧠          ⚙️         ⚡         🛡️    │
│  Mind Tree   Systems    Output      Meta │
│  (6/12)      (4/10)      (3/8)      (2/6) │
│  [Open Tree] [Open Tree] ...            │
└────────────────────────────────────────┘
```

#### 7. Achievements Panel

**Location**: Below skill tree core

**Shows**:
- Grid of achievement badges (2–4 per row)
- Each badge: icon, title, unlock date
- Locked achievements show: lock icon, unlock condition (grayed out)
- Achievement count: "6 / 24 Achievements"

**Specs**:
- Background: Soft Snow (#F9FAFB)
- Layout: Grid (auto-fit, minmax(120px, 1fr))
- Padding: 20px
- Border-radius: 8px
- Gap: 12px

**Badge specs** (each):
- Size: 120px square (mobile), 140px (desktop)
- Background: Game-primary gradient (earned) or gray (locked)
- Border: 2px solid game-color
- Border-radius: 8px
- Content: Icon (32px) + Title (Inter, 10px, centered below)
- Hover: Scale 1.08, glow pulses
- Locked: 50% opacity, lock icon overlay

**Achievement types**:
- First Build
- 7-Day Streak
- Mini-Boss Slayer
- Final Boss Conqueror
- Portfolio Published
- Cross-Game Master
- Godmode Unlocked

**Example**:
```
┌────────────────────────────────────────┐
│ ACHIEVEMENTS (6 / 24)                  │
├────────────────────────────────────────┤
│ [🎯 First Build]  [🔥 7-Day]  [🏆 Boss] │
│ [📚 Portfolio]    [🎓 Master]  [🔒]     │
└────────────────────────────────────────┘
```

#### 8. Godmode Gate

**Location**: Below achievements

**Shows**:
- Large animated ring (locked state)
- Godmode progress percentage
- Remaining conditions to unlock (1–5)
- Final unlock button (when 100% complete)

**Specs**:
- Ring size: 220px diameter
- Ring thickness: 14px
- Gradient: Dark (locked) → Gold (unlocking)
- Center text: "Godmode Gate" + "X% Complete"
- Font: Space Grotesk, 18px, bold
- Background: Neural Navy (#0F172A) section with 10% opacity white card

**Unlocking conditions checklist**:
- [✓] XP Accumulation (100,000 XP)
- [ ] Level 6+ Final Bosses (3/5 games)
- [ ] Public Deployment (Portfolio GitHub)
- [ ] Authority Review (Pending human review)
- [ ] Ascension Seal (Not yet awarded)

**Lock animation**:
- Ring pulses slowly (1.5s cycle) when locked
- Ring fills smoothly when condition met
- Gold glow intensifies as % increases

**Example**:
```
┌────────────────────────────────────────┐
│ GODMODE GATE (24% Complete)            │
│        ◉─────────────────────◉         │
│   24% (6,240 / 10,500 XP req)          │
├────────────────────────────────────────┤
│ REQUIREMENTS:                          │
│ [✓] XP: 6,240 / 10,500                 │
│ [✓] Final Boss: 3 / 5 games            │
│ [ ] Portfolio: Pending                 │
│ [ ] Authority Review: Not submitted     │
│ [ ] Ascension Seal: Locked             │
└────────────────────────────────────────┘
```

#### 9. Primary CTA

**Location**: Below Godmode gate

**Shows**:
- Primary button: "Enter Games Hub"
- Secondary button: "View Leaderboard"

**Specs**:
- Button 1: Full-width, CTA gradient, 48px height, Inter 16px bold white
- Button 2: Full-width, secondary style, 44px height, Inter 14px Neural Navy
- Gap: 12px between buttons
- Padding: 20px section

### Micro-Interactions

| Event              | UI Behavior                                 | Duration | Purpose                       |
| ------------------ | ------------------------------------------- | -------- | ----------------------------- |
| **XP gain**        | Level ring pulses (scale 1.1)              | 1s       | Celebrate progress            |
| **Level up**       | Ring flashes (3x), screen brightens        | 2s       | Major achievement milestone   |
| **Power activated**| Power badge appears, pulses                 | 0.8s     | Confirm activation            |
| **Power ends**     | Power badge fades out                      | 1s       | Subtle notification           |
| **Streak saved**   | Flame icon sparkles, multiplier glows      | 1.2s     | Reward consistency            |
| **Godmode unlock** | Ring fills gold, entire section glows      | 3s       | Transcendent moment           |
| **Achievement**    | Badge pops in with scale + rotate          | 0.6s     | Social proof celebration      |
| **Hover profile**  | Card lifts (scale 1.02), shadow deepens    | 0.2s     | Interaction readiness         |

### Profile Responsive Behavior

**Mobile (< 768px)**:
- Avatar: 100px (reduced from 120px)
- Level ring: 140px (reduced from 180px)
- Components: Stack vertically, full width with 16px padding
- Font sizes: -2px all text
- Game rows: Single column layout
- Achievement grid: 2 columns

**Tablet (768px–1024px)**:
- Avatar: 110px
- Level ring: 160px
- Components: 80% max-width, centered
- Font sizes: Standard
- Game rows: Can expand horizontally if needed
- Achievement grid: 3 columns

**Desktop (1024px+)**:
- Avatar: 120px
- Level ring: 180px
- Components: 90% max-width (max 900px), centered
- Font sizes: Standard
- Game rows: 2-column layout (game info + progress)
- Achievement grid: 4 columns

### Profile Data Model

**Player profile object**:
```json
{
  "id": "user_id",
  "name": "SanjayS",
  "avatar": "avatar_url",
  "totalXP": 12480,
  "currentRank": "Hacker",
  "rankXP": 12480,
  "rankXPRequired": 26000,
  "streak": 14,
  "streakMultiplier": 1.5,
  "activePowerUps": [
    {
      "id": "power_1",
      "name": "Memory Lock",
      "icon": "🧠",
      "remainingTime": 503000, // ms
      "gradient": "linear-gradient(135deg, #7B3FE4, #2A8CFF)"
    }
  ],
  "games": [
    {
      "gameId": "game_1",
      "name": "Prompt Architect",
      "level": 3,
      "levelXP": 12480,
      "levelXPRequired": 26000,
      "rank": "Hacker",
      "icon": "🎯"
    }
  ],
  "skillTrees": {
    "mind": { unlocked: 6, total: 12 },
    "systems": { unlocked: 4, total: 10 },
    "output": { unlocked: 3, total: 8 },
    "meta": { unlocked: 2, total: 6 }
  },
  "achievements": [
    {
      "id": "ach_1",
      "title": "First Build",
      "icon": "🎯",
      "unlockedAt": "2025-12-15T10:30:00Z",
      "locked": false
    }
  ],
  "godmodeProgress": {
    "percentage": 24,
    "xpAccumulated": 6240,
    "xpRequired": 10500,
    "conditions": {
      "xpAccumulation": true,
      "finalBosses": { completed: 3, required: 5 },
      "publicDeployment": false,
      "authorityReview": false,
      "ascensionSeal": false
    }
  }
}
```

### CSS Variables

```css
--profile-avatar-size: 120px;
--profile-avatar-mobile: 100px;
--profile-avatar-border: 3px;

--profile-level-ring-size: 180px;
--profile-level-ring-mobile: 140px;
--profile-level-ring-thickness: 12px;
--profile-level-ring-glow: 0 0 30px rgba(42, 140, 255, 0.4);

--profile-godmode-ring-size: 220px;
--profile-godmode-ring-thickness: 14px;

--profile-card-padding: 20px;
--profile-card-padding-mobile: 16px;
--profile-card-radius: 8px;
--profile-card-gap: 12px;

--profile-section-spacing: 24px;
--profile-section-spacing-mobile: 16px;

--power-badge-height: 44px;
--power-badge-padding: 8px 16px;
--power-badge-radius: 6px;

--achievement-badge-size: 140px;
--achievement-badge-size-mobile: 120px;
--achievement-badge-radius: 8px;
```

### Validation Checklist

- [ ] Avatar displays with game-primary gradient border
- [ ] Level ring animates smoothly on load
- [ ] XP counter uses JetBrains Mono, correct values
- [ ] Streak flame changes color at each tier
- [ ] Active power-ups show countdown timer
- [ ] Power-up badges fade when 30s remaining
- [ ] Games panel shows correct level/rank/progress
- [ ] Skill tree icons are clickable, open full view
- [ ] Achievements display correctly (locked/unlocked)
- [ ] Godmode gate fills to correct percentage
- [ ] Godmode conditions list updates in real-time
- [ ] All micro-interactions trigger correctly
- [ ] Profile is fully responsive at all breakpoints
- [ ] Mobile: No horizontal scroll, tappable CTAs (≥44px)
- [ ] Tablet/Desktop: Proper spacing, readable fonts

---

## 19. Component naming conventions

## 20. Folder architecture for developers

- Component naming conventions
- Folder architecture for developers
