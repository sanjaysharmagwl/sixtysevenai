# Power-Up Navigation - NOW ACTIVE ✅

Power-Up navigation has been integrated into **promptforge-l1.html**. Here's where to find it:

---

## 🎯 3 NAVIGATION POINTS

### 1️⃣ **Header Power-Ups Button** (MOBILE)
**Location:** Top of page, in navigation bar
- **Desktop (sm+):** Hidden
- **Mobile:** Shows "⚡ POWER-UPS" button in header
- **Link:** `promptforge-powerup.html?return=quest-1`

```html
<!-- Mobile: Power-Up Button in Header -->
<div class="sm:hidden flex justify-center gap-2 mt-3">
    <a href="promptforge-powerup.html?return=quest-1" class="...">
        ⚡ POWER-UPS
    </a>
</div>
```

---

### 2️⃣ **Active Power-Ups HUD** (DESKTOP)
**Location:** Below the "L1 — SIGNAL ROOKIE" title in header
- **Desktop (sm+):** Shows active power-ups with countdown timers
- **Mobile:** Hidden
- **Shows:** "⚡ ACTIVE POWERS: [Icon Name (Xm)] [Manage]"
- **Link:** Click "[Manage]" → `promptforge-powerup.html?return=header`

```html
<!-- Bottom Row: Active Power-Ups HUD (Desktop Only) -->
<div class="hidden sm:flex items-center justify-center gap-2 px-4 py-2 bg-neural-navy/50 rounded-lg border border-neural-spectrum-teal/30 mt-3">
    <span class="text-xs font-mono text-white/60">⚡ ACTIVE POWERS:</span>
    <div id="activeHUD" class="flex gap-2 flex-wrap justify-center">
        <!-- Updated by JavaScript -->
    </div>
    <a href="promptforge-powerup.html?return=header" class="...">
        [Manage]
    </a>
</div>
```

**JavaScript:** Updates every 1 second with remaining time
- Reads from `localStorage.activePowers`
- Auto-removes expired powers
- Shows "None active" if no active powers

---

### 3️⃣ **Quest Power-Up Buttons** (ALL SIZES)
**Location:** Before each quest/mini-boss/final-boss submit button

#### Quest 1: Signal Calibration
```html
<div class="flex flex-col sm:flex-row gap-3 mb-4">
    <button class="... bg-neural-spectrum-teal ...">
        SUBMIT SIGNAL CALIBRATION
    </button>
    <a href="promptforge-powerup.html?return=quest-1" class="... bg-neural-spectrum-orange ...">
        ⚡ BOOST QUEST
    </a>
</div>
```
- **Link:** `promptforge-powerup.html?return=quest-1`
- **Button Color:** Orange

#### Mini-Boss Challenge
```html
<div class="flex flex-col sm:flex-row gap-3">
    <button class="... disabled">RUN TEST (...)</button>
    <a href="promptforge-powerup.html?return=miniboss" class="... bg-neural-spectrum-pink ...">
        ⚡ POWER UP
    </a>
</div>
```
- **Link:** `promptforge-powerup.html?return=miniboss`
- **Button Color:** Pink

#### Final Boss
```html
<div class="flex flex-col sm:flex-row gap-4 justify-center">
    <button class="... disabled">SUBMIT FOR ASCENSION</button>
    <a href="promptforge-powerup.html?return=finalboss" class="... bg-neural-spectrum-violet ...">
        ⚡ FINAL POWER UP
    </a>
    <button class="...">STUDY GUIDE</button>
</div>
```
- **Link:** `promptforge-powerup.html?return=finalboss`
- **Button Color:** Violet

---

### 4️⃣ **Streak Nudge** (POST-QUEST)
**Location:** After the "ASCENSION COMPLETE" section
- **Visibility:** Hidden by default (`hidden` class)
- **Triggered:** When quest is submitted (shows after 500ms)
- **Message:** "Power-Up Available - Install a boost to protect your 7-day streak"
- **Link:** "OPEN POWER-UPS →" → `promptforge-powerup.html?return=quest-2`

```html
<!-- Streak Nudge (Power-Up Engagement) -->
<div id="streakNudge" class="mt-8 mb-8 p-8 sm:p-10 rounded-xl text-center hidden" 
     style="background: linear-gradient(135deg, #FF8A00, #FF4FD8); color: white;">
    <div style="font-size: 40px; margin-bottom: 16px;">⚡</div>
    <h3 class="text-2xl sm:text-3xl font-bold font-grotesk mb-3">Power-Up Available</h3>
    <p class="text-base sm:text-lg mb-6 opacity-95">
        Install a boost to protect your 7-day streak and amplify your next quest.
    </p>
    <a href="promptforge-powerup.html?return=quest-2" class="...">
        OPEN POWER-UPS →
    </a>
</div>
```

---

## 🔄 User Flow

```
Land on promptforge-l1.html
    ├─ [MOBILE] Click "⚡ POWER-UPS" in header
    │   └─ → promptforge-powerup.html?return=quest-1
    │
    ├─ [DESKTOP] See "⚡ ACTIVE POWERS: Focus (18m) [Manage]" in header
    │   └─ Click [Manage] → promptforge-powerup.html?return=header
    │
    ├─ [ALL DEVICES] Click "⚡ BOOST QUEST" before each quest
    │   ├─ Quest 1 → promptforge-powerup.html?return=quest-1
    │   ├─ Mini-Boss → promptforge-powerup.html?return=miniboss
    │   └─ Final Boss → promptforge-powerup.html?return=finalboss
    │
    └─ [AFTER SUBMIT] See "Power-Up Available" nudge
        └─ Click "OPEN POWER-UPS →" → promptforge-powerup.html?return=quest-2
```

---

## 📊 Return Navigation Map

| Entry | Return Param | Destination |
|---|---|---|
| Mobile header button | `quest-1` | Back to promptforge-l1.html |
| Desktop header [Manage] | `header` | Back to promptforge-l1.html |
| Quest 1 boost button | `quest-1` | Back to promptforge-l1.html#quest-1 |
| Mini-Boss boost button | `miniboss` | Back to promptforge-l1.html#miniboss |
| Final Boss boost button | `finalboss` | Back to promptforge-l1.html#finalboss |
| Streak nudge button | `quest-2` | Back to promptforge-l1.html#quest-2 |

---

## 🧪 Test the Navigation

1. **Open promptforge-l1.html**
2. **Mobile (< 768px):**
   - See "⚡ POWER-UPS" button in header
   - Click it → opens promptforge-powerup.html
3. **Desktop (≥ 768px):**
   - See "⚡ ACTIVE POWERS: None active [Manage]" in header
   - Click [Manage] → opens promptforge-powerup.html
   - Scroll down to Quest 1, see "⚡ BOOST QUEST" button
   - Click it → opens promptforge-powerup.html
4. **After quest submit:**
   - Click "SUBMIT SIGNAL CALIBRATION"
   - After 2 seconds, "Power-Up Available" nudge appears
   - Click "OPEN POWER-UPS →" → opens promptforge-powerup.html

---

## 💾 LocalStorage Integration

The HUD reads from `localStorage.activePowers` (updated by promptforge-powerup.html):

```javascript
// Format stored in localStorage
{
    "activePowers": [
        {
            "id": 1,
            "name": "Command Focus",
            "icon": "⚡",
            "startTime": 1735000000000,
            "duration": 1500000,  // 25 minutes in milliseconds
            "timeLeft": "25m"
        }
    ]
}
```

---

## ⚙️ JavaScript Functions

### Update HUD (runs every 1 second)
```javascript
function updateActivePowerUpsHUD() {
    // Reads localStorage
    // Filters expired powers
    // Updates #activeHUD div with remaining time
}
```

### Show Streak Nudge (triggered on quest submit)
```javascript
function showStreakNudge() {
    // Removes 'hidden' class from #streakNudge
    // Triggers slideInUp animation
}
```

---

## 🎨 Visual States

### Desktop (sm+)
- Header shows active powers in teal badge
- 4 orange/pink/violet boost buttons visible
- Streak nudge gradient (orange → pink)

### Mobile (< 768px)
- "⚡ POWER-UPS" button in header
- Same boost buttons below quests
- Full-width streak nudge

---

## ✅ Summary

- ✓ 3 navigation entry points (mobile button, desktop HUD, quest buttons)
- ✓ Streak nudge appears after quest submission
- ✓ HUD updates in real-time with countdown timers
- ✓ All links go to `promptforge-powerup.html` with return parameters
- ✓ Mobile & desktop responsive layouts
- ✓ LocalStorage integration for persistent power-up state
- ✓ Animations (slideInUp for streak nudge, pulse for HUD)

**All changes in:** `/Users/sanjaysharma/Desktop/gh/sixtysevenai/promptforge-l1.html`
