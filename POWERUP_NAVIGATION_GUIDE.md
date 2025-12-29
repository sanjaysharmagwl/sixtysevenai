# Power-Up Navigation Guide — Promptforge

## Overview

The Power-Up system integrates into Promptforge at 3 key user flow moments:

1. **Pre-Quest Launch** (Before starting a quest)
2. **Mid-Run Access** (Quick power-up toggle in header)
3. **Post-Completion** (Streak protection reminder)

---

## Navigation Architecture

```
Promptforge Level
    ├── [Before Quest Start]
    │   └── "Install Brain Upgrades" CTA
    │       └── → promptforge-powerup.html
    │
    ├── [During Quest (Header)]
    │   └── Active Power-Ups HUD
    │       └── "Manage" link → promptforge-powerup.html
    │
    └── [After Quest Complete]
        └── Streak Nudge
            └── "Open Power-Ups" CTA
                └── → promptforge-powerup.html
```

---

## Implementation 1: Pre-Quest Launch Button

Add a **"Power-Up Lobby"** button before players begin a quest.

### Location
In the Quest Item, before the submit button (promptforge-l1.html, line ~267):

```html
<!-- Before Quest Submit Button -->
<div class="flex gap-4 mb-4">
    <button class="px-6 py-2 bg-neural-spectrum-teal text-neural-navy font-mono font-bold rounded hover:bg-neural-spectrum-blue transition">
        SUBMIT SIGNAL CALIBRATION
    </button>
    <a href="promptforge-powerup.html?return=quest-1" class="px-6 py-2 bg-neural-spectrum-orange text-white font-mono font-bold rounded hover:bg-orange-600 transition flex items-center gap-2">
        ⚡ INSTALL POWER-UP
    </a>
</div>
```

### URL Pattern
```
promptforge-powerup.html?return=quest-1
promptforge-powerup.html?return=miniboss
promptforge-powerup.html?return=finalboss
```

The `return` param tells the power-up page which quest to return to after activation.

---

## Implementation 2: Active Power-Ups HUD (Header)

Add to the game level header (after title):

```html
<!-- In promptforge-l1.html header section (~line 172) -->
<div class="flex items-center gap-6">
    <h1 class="text-xl sm:text-2xl font-bold font-grotesk text-neural-spectrum-teal">L1 — SIGNAL ROOKIE</h1>
    
    <!-- Active Power-Ups HUD -->
    <div class="hidden md:flex items-center gap-3 px-4 py-2 bg-neural-navy/50 rounded-lg border border-neural-spectrum-orange/30">
        <span class="text-xs font-mono text-white/60">ACTIVE:</span>
        <div id="activeHUD" class="flex gap-2">
            <!-- Dynamically populated -->
        </div>
        <a href="promptforge-powerup.html?return=header" class="text-xs text-neural-spectrum-orange hover:text-neural-spectrum-orange/80 font-bold">
            [Manage]
        </a>
    </div>
    
    <button id="theme-toggle" class="p-2 rounded-lg bg-gray-700/40">...</button>
</div>
```

### JavaScript for HUD

```javascript
// Load active power-ups from localStorage
function loadActivePowerUps() {
    const activePowers = JSON.parse(localStorage.getItem('activePowers') || '[]');
    const hudContainer = document.getElementById('activeHUD');
    
    if (activePowers.length === 0) {
        hudContainer.innerHTML = '<span class="text-xs text-white/50">None active</span>';
        return;
    }
    
    hudContainer.innerHTML = activePowers.map(power => `
        <div class="flex items-center gap-1 px-2 py-1 bg-neural-spectrum-orange/20 rounded text-xs font-mono text-neural-spectrum-orange">
            <span>${power.icon}</span>
            <span>${power.timeLeft}</span>
        </div>
    `).join('');
}

// Update every second
setInterval(loadActivePowerUps, 1000);
loadActivePowerUps();
```

---

## Implementation 3: Post-Quest Streak Nudge

Add at the end of quest completion (after XP celebration):

```html
<!-- After quest submit success -->
<div id="streakNudge" class="mt-8 p-6 rounded-lg" style="
    background: linear-gradient(135deg, #FF8A00 0%, #FF4FD8 100%);
    color: white;
    text-align: center;
    display: none;
">
    <div style="font-size: 28px; margin-bottom: 12px;">⚡</div>
    <h4 style="font-weight: bold; margin-bottom: 8px; font-family: 'Space Grotesk';">Power-Up Available</h4>
    <p style="font-size: 14px; margin-bottom: 12px; opacity: 0.95;">
        Install a boost to protect your 7-day streak and amplify your next quest.
    </p>
    <a href="promptforge-powerup.html?return=quest-2" class="inline-block px-6 py-2 bg-white text-orange-600 font-bold rounded hover:bg-gray-100 transition">
        OPEN POWER-UPS →
    </a>
</div>
```

### Show Nudge After Submit

```javascript
// In quest submission handler
function onQuestComplete() {
    // Show XP first
    showXPAnimation(100);
    
    // Then show streak nudge
    setTimeout(() => {
        document.getElementById('streakNudge').style.display = 'block';
        document.getElementById('streakNudge').style.animation = 'slideInUp 0.4s ease';
    }, 2000);
}
```

---

## Return Navigation

When player closes power-up lobby, return to the quest they came from:

```javascript
// In promptforge-powerup.html JavaScript section
const urlParams = new URLSearchParams(window.location.search);
const returnPath = urlParams.get('return');

function goBack() {
    if (returnPath === 'quest-1') {
        window.location.href = 'promptforge-l1.html#quest-1';
    } else if (returnPath === 'miniboss') {
        window.location.href = 'promptforge-l1.html#miniboss';
    } else if (returnPath === 'finalboss') {
        window.location.href = 'promptforge-l1.html#finalboss';
    } else {
        window.history.back();
    }
}
```

---

## Data Storage (LocalStorage)

Power-Ups use browser localStorage to persist state:

```javascript
// Activate Power-Up
function installPowerUp(powerId) {
    const power = powerups.find(p => p.id === powerId);
    const activePowers = JSON.parse(localStorage.getItem('activePowers') || '[]');
    
    activePowers.push({
        id: power.id,
        name: power.name,
        icon: power.icon,
        startTime: Date.now(),
        duration: power.durationMinutes * 60 * 1000,
        timeLeft: power.durationMinutes + 'm'
    });
    
    localStorage.setItem('activePowers', JSON.stringify(activePowers));
    localStorage.setItem('playerXP', (playerXP + power.xpBoost).toString());
}

// Check for expired power-ups
function updateActivePowers() {
    const activePowers = JSON.parse(localStorage.getItem('activePowers') || '[]');
    const now = Date.now();
    
    const stillActive = activePowers.filter(power => {
        const elapsed = now - power.startTime;
        return elapsed < power.duration;
    });
    
    localStorage.setItem('activePowers', JSON.stringify(stillActive));
    return stillActive;
}

// Run every second
setInterval(updateActivePowers, 1000);
```

---

## URL Pattern Map

| Scenario | URL | Return Destination |
|---|---|---|
| Pre-Quest (Quest 1) | `promptforge-powerup.html?return=quest-1` | Back to Quest 1 section |
| Pre-Quest (Quest 2) | `promptforge-powerup.html?return=quest-2` | Back to Quest 2 section |
| Pre-Mini-Boss | `promptforge-powerup.html?return=miniboss` | Back to Mini-Boss |
| Pre-Final-Boss | `promptforge-powerup.html?return=finalboss` | Back to Final Boss |
| From Header | `promptforge-powerup.html?return=header` | Stay on current level |
| Direct Access | `promptforge-powerup.html` | Back button goes to history |

---

## User Flow Diagram

```
┌─────────────────────────────────┐
│  Level 1 (promptforge-l1.html)  │
└─────────────┬───────────────────┘
              │
              ├─ [BEFORE QUEST]
              │   ├─ "Install Power-Up" button
              │   └─ → promptforge-powerup.html?return=quest-1
              │
              ├─ [DURING QUEST]
              │   ├─ Header HUD shows active powers
              │   └─ [Manage] → promptforge-powerup.html?return=header
              │
              └─ [AFTER QUEST]
                  ├─ XP celebration animation
                  ├─ Streak nudge appears (2s delay)
                  └─ "Open Power-Ups" → promptforge-powerup.html?return=quest-2
```

---

## XP Rewards Integration

When power-up activates, add XP bonus:

```javascript
// Power-Up activation XP
const powerupXPBonuses = {
    'command-focus': 0,      // No XP bonus
    'clarity-boost': 0,
    'memory-lock': 25,       // +25 XP (rare rarity)
    'error-guard': 25,
    'xp-multiplier': 50,     // +50 XP (epic)
    'time-warp': 100,        // +100 XP (legendary)
    'pattern-master': 50,
    'execution-overdrive': 50
};

// Add to player XP on installation
function awardPowerUpXP(powerId) {
    const bonus = powerupXPBonuses[powerId] || 0;
    const currentXP = parseInt(localStorage.getItem('playerXP') || '0');
    localStorage.setItem('playerXP', currentXP + bonus);
    
    // Show "+XP" animation
    showXPGain(bonus);
}
```

---

## Mobile Responsiveness

On mobile, power-up navigation is:

1. **Full-width buttons** (not header HUD)
2. **Below each quest section**
3. **Accessible via bottom sheet or modal** (future)

```html
<!-- Mobile Power-Up Button (below quest) -->
<button class="w-full md:hidden px-4 py-3 bg-neural-spectrum-orange text-white font-bold rounded mt-4 mb-4">
    ⚡ BOOST THIS QUEST
</button>
```

---

## Summary

**3 Entry Points:**
1. Pre-quest button → Full power-up lobby
2. Header HUD → Quick manage link
3. Post-quest nudge → Engagement reminder

**Navigation Pattern:**
- `?return=` parameter ensures players return to correct section
- Back button respects context
- Data persists in localStorage

**User Experience:**
- Seamless power-up integration (no page load friction)
- Always-visible HUD shows active bonuses
- Streak protection nudge increases engagement
