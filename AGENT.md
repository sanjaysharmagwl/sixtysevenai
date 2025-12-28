# AGENT.md

**SixtySeven AI – Core Agent Contract**

## 1. Platform Identity (Non-Negotiable)

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

## 2. UI Zones (Must Remain Separate)

There are two permanent universes:

| Zone                 | Purpose                                |
| -------------------- | -------------------------------------- |
| Power Up             | Discovery, trending, featuring content |
| GAMES                | Skill progression engine               |

They must never mix.

---

## 3. Brand Colors & Gradients (Lock These)

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

## 4. Card System (Mandatory)

All content must render as cards.

| Card Type  | Rule                                         |
| ---------- | -------------------------------------------- |
| Game Card  | Gradient background, glow, START button      |
| Level Card | Navy background, XP bar, lock states         |
| Quest Card | Black background, dashed cyan border         |
| Boss Card  | Black→Navy gradient, gold border, glow pulse |

---

## 5. XP & Progression Engine (Core Logic)

| Action            | XP      |
| ----------------- | ------- |
| Quest Complete    | 100–200 |
| Boss Mission      | 400     |
| Level Completion  | +250    |
| 7-Day Streak      | +500    |
| Portfolio Publish | +1000   |

Total graduation XP: **10,500**

---

## 6. Typography (Lock)

| Use      | Font           |
| -------- | -------------- |
| Headings | Space Grotesk  |
| UI       | Inter          |
| Numbers  | JetBrains Mono |

---

## 7. Experience Law (Core Design Philosophy)

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

## 8. Naming Rules

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

## 9. Design Authority

If any future change conflicts with this file, **this file wins.**

---

## TODO: Future Sections

- Component naming conventions
- Folder architecture for developers
