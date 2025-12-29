# Critical Fixes: Code Examples

## Issue 1: Hero Zone Missing Primary CTA

**Location:** Line 403-420

**Problem:** Hero zone headline + description but NO main call-to-action button in the left content area.

**Current Code:**
```html
<div class="space-y-4 sm:space-y-6 md:space-y-8">
    <div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk leading-tight mb-3 sm:mb-4 md:mb-6 text-white mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            Don't learn AI.<br>Level up inside it.
        </h1>
        <p class="text-sm sm:text-base md:text-lg text-white/90 max-w-lg font-inter leading-relaxed">
            <strong>You don't just play games. You install Power-Ups for your brain.</strong><br><br>
            Games build your core abilities. Power-Ups amplify your daily performance.<br><br>
            <span class="block space-y-1 sm:space-y-2">
                • Master AI skills in games<br>
                • Unlock permanent abilities<br>
                • Amplify with Power-Ups<br>
                • Multiply your execution
            </span><br>
            This is a complete operating system for the AI age.
        </p>
    </div>
</div>
```

**Fixed Code:**
```html
<div class="space-y-4 sm:space-y-6 md:space-y-8">
    <div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-grotesk leading-tight mb-3 sm:mb-4 md:mb-6 text-white mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            Don't learn AI.<br>Level up inside it.
        </h1>
        <p class="text-sm sm:text-base md:text-lg text-white/90 max-w-lg font-inter leading-relaxed">
            <strong>You don't just play games. You install Power-Ups for your brain.</strong><br><br>
            Games build your core abilities. Power-Ups amplify your daily performance.<br><br>
            <span class="block space-y-1 sm:space-y-2">
                • Master AI skills in games<br>
                • Unlock permanent abilities<br>
                • Amplify with Power-Ups<br>
                • Multiply your execution
            </span><br>
            This is a complete operating system for the AI age.
        </p>
        
        <!-- ADD THIS BUTTON -->
        <button onclick="document.getElementById('games-hub').scrollIntoView({ behavior: 'smooth' })" 
                class="cta-button px-6 sm:px-10 py-3 sm:py-4 text-white font-bold font-grotesk rounded-lg hover:shadow-lg transition-all duration-300 mt-8 inline-block">
            START YOUR FIRST GAME →
        </button>
    </div>
</div>
```

**Why:** AGENT.md Section 4 (Hero Zone) requires a CTA button with "START" text. Currently missing from left content.

---

## Issue 2: Two Systems Bottom Callout - Wrong Gradient

**Location:** Line 589-593

**Problem:** Bottom callout card should have a Navy→Black gradient background, not solid Navy.

**Current Code:**
```html
<div class="mt-12 sm:mt-16 bg-neural-navy text-center rounded-xl p-8 sm:p-12">
    <p class="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
        <strong>This is not a course platform. This is an operating system.</strong> Games build your power. Power-Ups multiply it.
    </p>
</div>
```

**Fixed Code:**
```html
<div class="mt-12 sm:mt-16 bg-gradient-to-r from-neural-navy to-black text-center rounded-xl p-8 sm:p-12 border border-neural-graphite/30">
    <p class="text-lg sm:text-xl text-white max-w-2xl mx-auto leading-relaxed font-grotesk font-bold">
        <strong>This is not a course platform. This is an operating system.</strong><br>
        <span class="text-white/80">Games build your power. Power-Ups multiply it.</span>
    </p>
</div>
```

**Why:** AGENT.md Section 2 (Brand Colors) specifies boss-level cards use Navy→Black gradient. This is a key differentiator card.

---

## Issue 3: Game Cards Missing Minimum Height

**Location:** Lines 613, 636, 649, 662, 675 (all 5 game cards)

**Problem:** Game cards have no enforced minimum height, causing inconsistent card heights.

**Current Code (Card 1):**
```html
<div class="game-card relative rounded-xl p-8 border-2 border-transparent overflow-hidden cursor-pointer" 
     style="background: linear-gradient(135deg, #26E6C8, #2A8CFF); border-color: rgba(38, 230, 200, 0.5);" 
     onclick="openLevel1Modal('prompt-architect')">
```

**Fixed Code:**
```html
<div class="game-card relative rounded-xl p-8 border-2 border-transparent overflow-hidden cursor-pointer min-h-[280px]" 
     style="background: linear-gradient(135deg, #26E6C8, #2A8CFF); border-color: rgba(38, 230, 200, 0.5);" 
     onclick="openLevel1Modal('prompt-architect')">
```

**Apply to ALL 5 cards:**
- Line 613: Prompt Architect → Add `min-h-[280px]`
- Line 636: Agent Engineer → Add `min-h-[280px]`
- Line 649: Automation Forge → Add `min-h-[280px]`
- Line 662: Creator OS → Add `min-h-[280px]`
- Line 675: Startup Builder → Add `min-h-[280px]`

**Why:** AGENT.md Section 11 (Games Hub Card System) specifies "Min Height: 280px" for game cards.

---

## Issue 4: CTA Zone Text Color Contrast

**Location:** Lines 833-838

**Problem:** Text is Neural Navy on Neural Spectrum gradient background = poor contrast. Should be WHITE.

**Current Code:**
```html
<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-grotesk text-neural-navy mb-4 sm:mb-6">
    Your brain is the console.<br>SixtySeven AI is the operating system.
</h2>
<p class="text-sm sm:text-base md:text-lg text-neural-navy/90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
    The future rewards operators—people who can command machines, design systems, create leverage, and move faster. You don't just learn AI. You become AI-native.
</p>
```

**Fixed Code:**
```html
<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-grotesk text-white mb-4 sm:mb-6">
    Your brain is the console.<br>SixtySeven AI is the operating system.
</h2>
<p class="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
    The future rewards operators—people who can command machines, design systems, create leverage, and move faster. You don't just learn AI. You become AI-native.
</p>
```

**Why:** AGENT.md Section 3 (Brand Colors) requires minimum contrast ratio of 4.5:1. White on gradient meets this.

---

## Issue 5: Identity Block Table Styling Missing

**Location:** Lines 515-532

**Problem:** Comparison table has correct colors but lacks proper padding, borders, and styling consistency.

**Current CSS:**
```css
.comparison-table {
    width: 100%;
    border-collapse: collapse;
}

.comparison-table td {
    padding: 12px 16px;
    border-bottom: 1px solid #E5E7EB;
}

.comparison-table td:first-child {
    color: #999;
    font-family: 'JetBrains Mono', monospace;
}

.comparison-table td:last-child {
    color: #2A8CFF;
    font-family: 'JetBrains Mono', monospace;
}
```

**Fixed CSS (Add to style.css):**
```css
.comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.comparison-table tbody {
    display: table-row-group;
}

.comparison-table tr {
    border-bottom: 1px solid #E5E7EB;
    transition: background-color 0.2s ease;
}

.comparison-table tr:hover {
    background-color: #F9FAFB;
}

.comparison-table tr:last-child {
    border-bottom: none;
}

.comparison-table td {
    padding: 16px 20px;
    text-align: left;
    font-size: 0.95rem;
    line-height: 1.6;
}

.comparison-table td:first-child {
    color: #999;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
    width: 40%;
}

.comparison-table td:last-child {
    color: #2A8CFF;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    width: 60%;
}

/* Add subtle alternating row colors */
.comparison-table tr:nth-child(even) {
    background-color: #FAFBFC;
}
```

**Why:** Spec requires monospace font, proper padding, and clear visual hierarchy between columns.

---

## Issue 6: Power-Up Cards Need Stronger Borders

**Location:** Lines 706-751 (all 6 power-up mode cards)

**Problem:** Borders are too subtle (border-neural-spectrum-blue/30). Should be more prominent on hover.

**Current Code (Card 1: Read Mode):**
```html
<div class="bg-neural-snow rounded-xl p-8 border-2 border-neural-spectrum-blue/30 hover:border-neural-spectrum-blue/60 hover:shadow-lg transition-all duration-300">
```

**Fixed Code:**
```html
<div class="bg-neural-snow rounded-xl p-8 border-2 border-neural-spectrum-blue/40 hover:border-neural-spectrum-blue/80 hover:shadow-xl hover:bg-white transition-all duration-300">
    <div class="text-4xl mb-4">📖</div>
    <h3 class="text-xl font-bold font-grotesk text-neural-navy mb-3">Read Mode</h3>
    <p class="text-xs sm:text-sm text-gray-600 mb-3 font-mono font-bold text-neural-spectrum-blue uppercase tracking-widest">
        Thinking Speed & Comprehension
    </p>
    <p class="text-sm text-gray-700 leading-relaxed">
        Parse complex documents faster. Synthesize ideas at scale. Compress information into actionable insights.
    </p>
</div>
```

**Apply to ALL 6 cards with matching spectrum colors:**
- Read Mode (706): `border-neural-spectrum-blue/40` → `/80`
- Watch Mode (714): `border-neural-spectrum-teal/40` → `/80`
- Listen Mode (722): `border-neural-spectrum-violet/40` → `/80`
- Focus Mode (730): `border-neural-spectrum-pink/40` → `/80`
- Builder Mode (738): `border-neural-spectrum-orange/40` → `/80`
- Prompt Mode (746): `border-neural-spectrum-pink/40` → `/80`

**Why:** AGENT.md Section 10 (Card System) specifies hover states with brightened borders and increased shadow depth.

---

## Issue 7: Modal XP Animation Verification

**Location:** Line 931

**Problem:** XP text uses `animate-xp-fly` class, but animation is defined in `<style>` tag (lines 40-58). Need to verify it's firing correctly.

**Current Code:**
```html
<div class="text-6xl font-bold font-mono text-neural-spectrum-orange mb-8 animate-xp-fly">
    +100 XP
</div>
```

**Verify Animation Exists (Lines 54-57):**
```css
'xp-fly': {
    '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
    '100%': { transform: 'translateY(-100px) scale(0.5)', opacity: '0' }
}
```

**This is CORRECT** ✓ – Animation will fire when screen 4 appears. No fix needed.

---

## Fix Priority Order

**🔴 Critical (Block page quality):**
1. Hero zone CTA button missing (Issue 1)
2. CTA zone text contrast (Issue 4)
3. Game cards missing height (Issue 3)

**🟡 Important (Visual polish):**
4. Two systems callout gradient (Issue 2)
5. Power-up card borders (Issue 6)
6. Identity table styling (Issue 5)

**🟢 Nice-to-have:**
7. Modal animation verification (Issue 7)

---

## Testing Checklist

After applying fixes:

- [ ] **Hero Zone:** CTA button appears and scrolls to games-hub
- [ ] **Games Hub:** All 5 cards have uniform height (280px minimum)
- [ ] **Game Cards:** Hover effect scales 1.05 and glow brightens
- [ ] **CTA Zone:** Text is readable (white on gradient)
- [ ] **Power-Up Cards:** Hover border brightens visibly
- [ ] **Two Systems:** Bottom callout has Navy→Black gradient
- [ ] **Identity Block:** Table has proper padding and styling
- [ ] **Responsive:** All breakpoints (mobile, tablet, desktop) render correctly
- [ ] **Modal:** Level 1 screen 4 shows XP animation
- [ ] **Contrast:** All text passes WCAG AA (4.5:1 ratio minimum)

