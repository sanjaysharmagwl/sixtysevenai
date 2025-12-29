# Index.html Layout Analysis & Fix Guide

## Page Structure Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVIGATION BAR (Fixed)                   │
│  Logo (left) ──────────────────── NavLinks (right)          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    SECTION 1: HERO ZONE                      │
│                    (60vh - Full Gradient)                   │
│                                                              │
│  [LEFT]                               [RIGHT]               │
│  Headline: "Don't learn AI"           6 >>> 7 Animation     │
│  Subline: "Level up inside it"        (Level transition)    │
│  Features + CTA                                              │
│                                   [Downward arrows below]   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              SECTION 2: IDENTITY BLOCK (White BG)            │
│                                                              │
│  Headline: "This is not a course..."                        │
│                                                              │
│  [LEFT: Content]          [RIGHT: Comparison Table]        │
│  "Why different?"         Traditional vs SixtySeven         │
│  Body text...                                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│           SECTION 3: TWO SYSTEMS (White BG)                  │
│                                                              │
│  Headline: "Built on Two Engines"                           │
│                                                              │
│  [Games Hub Card]  [Power-Up Layer Card]                   │
│   🎮 Content       ⚡ Content                               │
│                                                              │
│     [Dark Hero CTA]                                         │
│     "Not a course, it's an OS"                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│           SECTION 4: GAMES HUB (Light Snow BG)              │
│                                                              │
│  Headline: "Games Hub"                                       │
│  5 Game Cards in Responsive Grid                            │
│  [Card][Card][Card][Card][Card]  (desktop: 5 cols)         │
│  [Card][Card]                    (tablet: 2 cols)          │
│  [Card]                          (mobile: 1 col)           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│        SECTION 5: POWER-UP LAYER (White BG)                │
│                                                              │
│  Headline: "Install Power-Ups"                              │
│  6 Mode Cards (3x2 grid)                                    │
│  [Read] [Watch] [Listen]                                   │
│  [Focus] [Builder] [Prompt]                                │
│                                                              │
│     [Callout Card]                                          │
│     "Power-Ups aren't content, they're upgrades"           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          SECTION 6: CORE PILLARS (White BG)                 │
│                                                              │
│  Headline: "Core Pillars"                                   │
│  [Game-Structured] [AI-Native] [Real Power Projects]       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 SECTION 7: CTA ZONE                          │
│                (40-50vh - Full Gradient)                    │
│                                                              │
│  Headline: "Your brain is the console"                      │
│  Body text                                                  │
│  [Dual CTA Buttons]                                         │
│     "Choose First Game" | "Install Power-Up"               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              MODAL: LEVEL 1 ONBOARDING                       │
│  (Screen 1-4 swappable inside modal)                        │
└─────────────────────────────────────────────────────────────┘
```

---

## Section-by-Section Fix Instructions

### **SECTION 1: HERO ZONE (Lines 398-451)**

**Current Issues:**
- ✓ Good layout structure
- ✓ Gradient is correct
- ⚠️ Text color on gradient should be PURE WHITE (currently white but could contrast check)
- ⚠️ CTA button not visible in hero zone's left section

**What to do:**
```html
<!-- BEFORE: Hero has only headline but no primary CTA button -->
<div>
    <h1 class="text-white">Don't learn AI...</h1>
    <p class="text-white/90">Description...</p>
</div>

<!-- AFTER: Add primary CTA button after description -->
<div>
    <h1 class="text-white">Don't learn AI...</h1>
    <p class="text-white/90">Description...</p>
    
    <!-- ADD THIS BUTTON -->
    <button class="cta-button px-10 py-4 text-white font-bold rounded-lg inline-block mt-6">
        START LEARNING →
    </button>
</div>
```

**Spec Check:**
- Text: Space Grotesk heading ✓, Inter body ✓
- Color: Neural Navy text on gradient ✓
- CTA: Gradient background ✓, glow on hover ✓
- Height: 60vh ✓

---

### **SECTION 2: IDENTITY BLOCK (Lines 474-536)**

**Current Issues:**
- ✓ Good 2-column layout
- ✓ Comparison table is correct format
- ⚠️ Table styling: left column text should be DIM GRAY (#999), right should be INTELLIGENCE BLUE (#2A8CFF)
- ⚠️ Missing monospace font on table cells
- ⚠️ Border color on table cells should match spec

**What to fix:**
```css
/* CURRENT (Lines 153-171) */
.comparison-table td:first-child {
    color: #999;              /* ✓ Correct */
    font-family: 'JetBrains Mono', monospace;  /* ✓ Correct */
}

.comparison-table td:last-child {
    color: #2A8CFF;           /* ✓ Correct */
    font-family: 'JetBrains Mono', monospace;  /* ✓ Correct */
}

/* ISSUE: Missing styling for table appearance */
/* ADD THIS: */
.comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
}

.comparison-table tr {
    border-bottom: 1px solid #E5E7EB;
}

.comparison-table td {
    padding: 16px;           /* Increase from 12px */
    text-align: left;
}

.comparison-table tr:last-child {
    border-bottom: none;     /* Remove bottom border from last row */
}
```

**Spec Check:**
- Grid: 2-column ✓
- Background: White ✓
- Headline: Space Grotesk ✓
- Table colors: Left #999, Right #2A8CFF ✓
- Monospace: JetBrains Mono ✓

---

### **SECTION 3: TWO SYSTEMS (Lines 539-595)**

**Current Issues:**
- ✓ Headline correct
- ✓ 2-column grid correct
- ⚠️ Card styling incomplete: need borders, gradients per card
- ⚠️ Bottom callout card should have DARK hero background (Neural Navy #0F172A)

**What to fix:**
```html
<!-- ENGINE 1: GAMES HUB (Line 554) -->
<div class="bg-gradient-to-br from-neural-spectrum-blue/10 to-neural-spectrum-teal/10 rounded-xl p-8 border border-neural-spectrum-blue/30">
    <!-- ✓ This looks good -->
</div>

<!-- ENGINE 2: POWER-UP LAYER (Line 571) -->
<div class="bg-gradient-to-br from-neural-spectrum-orange/10 to-neural-spectrum-pink/10 rounded-xl p-8 border border-neural-spectrum-orange/30">
    <!-- ✓ This looks good -->
</div>

<!-- BOTTOM CALLOUT (Line 589) - FIX THIS -->
<!-- BEFORE: -->
<div class="mt-12 sm:mt-16 bg-neural-navy text-center rounded-xl p-8 sm:p-12">
    <!-- This is CLOSE but spec says: gradient background Neural Navy → Black -->

<!-- AFTER: -->
<div class="mt-12 sm:mt-16 bg-gradient-to-r from-neural-navy to-black text-center rounded-xl p-8 sm:p-12">
    <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto leading-relaxed">
        <strong>This is not a course platform. This is an operating system.</strong> Games build your power. Power-Ups multiply it.
    </p>
</div>
```

**Spec Check:**
- 2-column layout ✓
- Card borders: Gradient ✗ (currently solid, should be gradient)
- Bottom callout: Black background ✗ (should be Navy → Black gradient)
- Text color: White ✓

---

### **SECTION 4: GAMES HUB GRID (Lines 598-688)**

**Current Status: 95% CORRECT** ✓

**Issues Found:**
- ✓ Responsive grid: 5-cols (desktop), 2-cols (tablet), 1-col (mobile) — correct
- ✓ Game cards have gradient, glow, hover effects
- ✓ XP badges positioned correctly (top-right)
- ✓ START button has CTA gradient
- ⚠️ Card height inconsistency: min-height should be enforced
- ⚠️ Border gradient not fully visible

**Fix Applied:**
```html
<!-- Each Game Card (Example: Line 613) -->
<div class="game-card relative rounded-xl p-8 border-2 border-transparent overflow-hidden cursor-pointer min-h-[280px]" 
     style="background: linear-gradient(135deg, #26E6C8, #2A8CFF); border-color: rgba(38, 230, 200, 0.5);">
    <!-- ADD min-h-[280px] to enforce card height per spec (lines 10.4 of AGENT.md) -->
</div>
```

**Spec Check:**
- Grid: 5-2-1 layout ✓
- Card height: min 280px ✓ (ADD THIS)
- Glow: Orange shadow ✓
- Hover: Scale 1.05, glow brighten ✓
- XP Badge: Vibrant Purple ✓
- START Button: CTA gradient ✓

---

### **SECTION 5: POWER-UP LAYER (Lines 691-764)**

**Current Status: 90% CORRECT** ✓

**Issues Found:**
- ✓ 3-column grid layout (6 cards total)
- ✓ Each card has icon, title, subtitle, description
- ✓ Hover border effects on cards
- ⚠️ Card styling incomplete: need stronger borders, darker backgrounds per spec
- ⚠️ Subtitle text should be monospace + colored per spec
- ⚠️ Bottom callout gradient needs to be adjusted

**What to fix:**
```html
<!-- LINE 706: Read Mode Card -->
<!-- BEFORE: -->
<div class="bg-neural-snow rounded-xl p-8 border-2 border-neural-spectrum-blue/30 hover:border-neural-spectrum-blue/60 hover:shadow-lg transition-all duration-300">

<!-- AFTER: Add stronger styling per spec -->
<div class="bg-neural-snow rounded-xl p-8 border-2 border-neural-spectrum-blue/50 hover:border-neural-spectrum-blue/80 hover:shadow-xl transition-all duration-300 hover:bg-white">
    <div class="text-4xl mb-4">📖</div>
    <h3 class="text-xl font-bold font-grotesk text-neural-navy mb-2">Read Mode</h3>
    
    <!-- FIX: Make subtitle match spec color + styling -->
    <p class="text-sm text-gray-600 mb-3 font-mono font-bold text-neural-spectrum-blue">
        Thinking Speed & Comprehension
    </p>
    <!-- ✓ This is already correct -->
    
    <p class="text-sm text-gray-700">
        Parse complex documents faster. Synthesize ideas at scale. Compress information into actionable insights.
    </p>
</div>

<!-- REPEAT FOR ALL 6 CARDS with appropriate spectrum colors:
    Read Mode: BLUE (#2A8CFF)
    Watch Mode: TEAL (#26E6C8)
    Listen Mode: VIOLET (#7B3FE4)
    Focus Mode: PINK (#FF4FD8)
    Builder Mode: ORANGE (#FF8A00)
    Prompt Mode: PINK (#FF4FD8)
-->
```

**Spec Check:**
- Grid: 3-column, 6 items ✓
- Card styling: Border + hover ✓
- Colors: Per-mode gradient colors ✓
- Monospace: JetBrains Mono ✓

---

### **SECTION 6: CORE PILLARS (Lines 767-827)**

**Current Status: 100% CORRECT** ✓

**All specs met:**
- ✓ 3-column pillar layout
- ✓ Icons, titles, descriptions
- ✓ Subtle borders, light gray background
- ✓ Neural Navy text on white background
- ✓ Proper spacing and typography

---

### **SECTION 7: CTA ZONE (Lines 830-850)**

**Current Issues:**
- ⚠️ Text color: Should be NEURAL NAVY on gradient background (contrast issue)
- ✓ Dual CTAs present
- ⚠️ CTA button 2 color should be Intelligence Blue (#2A8CFF) not generic blue
- ⚠️ Font weight on headline could be stronger

**What to fix:**
```html
<!-- LINE 833: Headline color fix -->
<!-- BEFORE: -->
<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-grotesk text-neural-navy mb-4 sm:mb-6">

<!-- AFTER: Use WHITE text on gradient for better contrast -->
<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-grotesk text-white mb-4 sm:mb-6">
    Your brain is the console.<br>SixtySeven AI is the operating system.
</h2>

<!-- LINE 836: Subtext color -->
<!-- BEFORE: -->
<p class="text-sm sm:text-base md:text-lg text-neural-navy/90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">

<!-- AFTER: -->
<p class="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">

<!-- LINE 844: Second CTA button color -->
<!-- BEFORE: -->
<button class="px-6 sm:px-10 py-3 sm:py-4 bg-neural-spectrum-blue text-white font-bold font-grotesk rounded-lg ...">

<!-- AFTER: This is actually CORRECT as Intelligence Blue, but verify on display -->
<button class="px-6 sm:px-10 py-3 sm:py-4 bg-neural-spectrum-blue hover:bg-neural-spectrum-blue/90 text-white font-bold font-grotesk rounded-lg transition-all duration-300 ...">
    Install Your First Power-Up
</button>
```

**Spec Check:**
- Height: 40-50vh ✓
- Gradient: Neural Spectrum ✓
- Text: White ✓
- Dual CTAs: Present ✓
- Primary: Orange gradient ✓
- Secondary: Intelligence Blue ✓

---

### **LEVEL 1 MODAL (Lines 866-964)**

**Current Status: 95% CORRECT** ✓

**Issues Found:**
- ✓ 4-screen flow: Intro → Mission → Action → Completion
- ✓ Modal styling with gradient background
- ✓ Grid pattern overlay on container
- ⚠️ XP animation: Class says `animate-xp-fly` but should check if animation fires
- ⚠️ Progress bar XP styling should be checked

**Spec Check:**
- Background: Navy → Black gradient ✓
- Container: 900px max-width ✓
- Grid pattern overlay ✓
- Text color: White ✓
- Screen 4: XP counter, progress bar, power badge ✓

---

## Color Reference Table

| Element                | Color              | Hex       | Location         |
|------------------------|------------------|-----------|------------------|
| Hero gradient (primary)| Neural Spectrum  | Various   | Line 68          |
| XP badge background    | Vibrant Purple   | #A855F7   | Line 94          |
| CTA button gradient    | Orange→Pink      | #FF8A00   | Line 84          |
| XP bar gradient        | Blue→Orange      | #2A8CFF   | Line 148         |
| Modal background       | Navy→Black       | #0F172A   | Line 104         |
| Game card glow         | Orange shadow    | Orange/0.3| Line 74          |
| Table text (left)      | Dim Gray         | #999      | Line 164         |
| Table text (right)     | Intelligence Blue| #2A8CFF   | Line 169         |

---

## Responsive Behavior Checklist

- [ ] Mobile: All sections stack vertically
- [ ] Tablet: 2-column layouts (games: 2-cols, pillars: stacked)
- [ ] Desktop: Full layouts (games: 5-cols, pillars: 3-cols)
- [ ] Hero: 60vh on desktop, 100vh on mobile
- [ ] CTA Zone: 40-50vh scaling
- [ ] Padding: Scales with breakpoints (sm:, md:, lg:, xl:)

---

## Quick Fix Summary

1. **Section 1 (Hero)**: Add primary CTA button to left content area
2. **Section 2 (Identity)**: Strengthen table styling, padding, borders
3. **Section 3 (Two Systems)**: Fix bottom callout card to Navy→Black gradient
4. **Section 4 (Games)**: Add `min-h-[280px]` to game cards
5. **Section 5 (Power-Up)**: Strengthen card borders and hover states
6. **Section 7 (CTA)**: Change text color to white for gradient contrast
7. **Modal**: Verify `animate-xp-fly` animation fires on screen 4

