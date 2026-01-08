# Phase 3 Plan: Frontend API Integration

**Status**: READY TO START  
**Date Created**: January 8, 2026  
**Estimated Duration**: 4-5 days  
**Complexity**: Medium (Repetitive wiring across 26 files)

---

## Phase 3 Overview

Wire all 26 HTML files to the Phase 2 backend API endpoints. Replace static content and alert() placeholders with real API calls. Integrate authentication, quest submission, progress tracking, and leaderboard functionality.

### Success Criteria
- ✅ All 26 HTML files fetch real data from `/api` endpoints
- ✅ Users can log in and stay authenticated
- ✅ Quest submission and validation working end-to-end
- ✅ Player dashboard shows real XP and rank
- ✅ Boss challenges accessible and functional
- ✅ Godmode status real-time
- ✅ Mobile responsive on all pages
- ✅ No console errors
- ✅ < 2 second load times

---

## Architecture

### API Integration Pattern

All HTML pages will follow this consistent pattern:

```javascript
// 1. Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  
  if (!userId || !token) {
    window.location.href = '/index.html'; // Redirect to login
    return;
  }
  
  // 2. Fetch data from API
  try {
    const response = await fetch(`/api/endpoint/${userId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    
    // 3. Update UI with data
    updateUI(data);
  } catch (error) {
    console.error('Error:', error);
    showError('Failed to load data');
  }
});

// 4. Handle user actions
button.addEventListener('click', async () => {
  const result = await submitToAPI();
  updateUI(result);
});
```

### Storage & State Management

```javascript
// localStorage keys
localStorage.setItem('userId', userIdFromLogin);
localStorage.setItem('token', jwtTokenFromLogin);
localStorage.setItem('currentRank', rankFromProfile);
localStorage.setItem('totalXP', xpFromProfile);

// Common utility functions
const API_BASE = '/api';
const token = localStorage.getItem('token');

async function apiCall(endpoint, options = {}) {
  return fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers
    },
    ...options
  });
}

function setUserData(user) {
  localStorage.setItem('userId', user.id);
  localStorage.setItem('currentRank', user.current_rank);
  localStorage.setItem('totalXP', user.total_xp);
}

function getCurrentUser() {
  return {
    id: localStorage.getItem('userId'),
    rank: localStorage.getItem('currentRank'),
    xp: parseInt(localStorage.getItem('totalXP'))
  };
}
```

---

## Task Breakdown by File Category

### Category 1: Authentication Pages (3 files)

**Files:**
- `index.html` (Login/Register)
- (Possibly `profile.html` - Check if exists)

**Tasks per file:**
1. Wire login form → `POST /api/auth/login`
2. Wire register form → `POST /api/auth/register`
3. Store JWT token and userId in localStorage
4. Redirect to game hub on success
5. Show validation errors

**Endpoints to use:**
- `POST /api/auth/login` - Returns { session, user }
- `POST /api/auth/register` - Returns { session, user }

**Status Display:**
- Current rank: `localStorage.getItem('currentRank')`
- Total XP: `localStorage.getItem('totalXP')`

**Example Implementation:**
```javascript
// Login form submission
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  
  const data = await response.json();
  if (data.success) {
    localStorage.setItem('userId', data.user.id);
    localStorage.setItem('token', data.session.accessToken);
    localStorage.setItem('currentRank', data.user.current_rank);
    localStorage.setItem('totalXP', data.user.total_xp);
    window.location.href = '/promptforge.html';
  } else {
    document.getElementById('error').textContent = 'Login failed';
  }
});
```

---

### Category 2: Game Hub Pages (2 files)

**Files:**
- `promptforge.html` - Main game hub
- `game-theme-demo.html` - (Check if used)
- `gamehub.html` - Possibly main game hub

**Tasks per file:**
1. Load all 5 games with unlock status → `GET /api/games`
2. Show player progress per game → `GET /api/player/:userId/games`
3. Display current rank and XP → `GET /api/player/:userId`
4. Show available levels based on progression
5. Enable navigation to level pages
6. Display Godmode unlock progress → `GET /api/quests/validator/godmode-status/:userId`

**Endpoints to use:**
- `GET /api/games` - List all 5 games
- `GET /api/player/:userId` - Player profile with XP/rank
- `GET /api/player/:userId/games` - Progress per game
- `GET /api/quests/validator/godmode-status/:userId` - Godmode status

**UI Elements to Update:**
```javascript
// Display player header
const user = await fetch(`/api/player/${userId}`).then(r => r.json());
document.getElementById('player-name').textContent = user.name;
document.getElementById('player-rank').textContent = user.current_rank;
document.getElementById('player-xp').textContent = `${user.total_xp} XP`;

// Display games grid
const games = await fetch('/api/games').then(r => r.json());
const gameProgress = await fetch(`/api/player/${userId}/games`).then(r => r.json());

games.forEach(game => {
  const progress = gameProgress.find(g => g.game_id === game.id);
  document.getElementById(`game-${game.slug}`).innerHTML = `
    <div class="game-card">
      <h3>${game.name}</h3>
      <p>Level ${progress?.level || 1}/7</p>
      <a href="promptforge-l${progress?.level || 1}.html">Play</a>
    </div>
  `;
});

// Show Godmode progress
const godmode = await fetch(`/api/quests/validator/godmode-status/${userId}`).then(r => r.json());
document.getElementById('godmode-progress').innerHTML = `
  ${godmode.godmodeProgress.xpProgress.toFixed(0)}% Complete
`;
```

---

### Category 3: Level Pages (8 files)

**Files:**
- `promptforge-l1.html` through `promptforge-l7.html` (7 files)
- `promptforge-level.html` (Generic level template - may be parent)

**Critical Note:** These are the core gameplay pages. High priority.

**Tasks per file:**
1. Load level info → `GET /api/games/[gameId]/levels/[levelNumber]`
2. Load quest descriptions (from local HTML or fetch)
3. Wire 3 quest submit buttons → `POST /api/quests/submit`
4. Show validation results in real-time
5. Display XP awarded
6. Track quest completion progress
7. Enable mini-boss button when 3/3 quests done → `POST /api/quests/validator/mini-boss`
8. Enable final-boss button when mini-boss done → `POST /api/quests/validator/final-boss`
9. Update player XP/rank on screen when earned
10. Show unlocked skill nodes after rank-up

**Endpoints to use:**
- `POST /api/quests/submit` - Submit quest answer
- `POST /api/quests/:questSubmissionId/validate` - Award XP
- `GET /api/quests/user/:userId/level/:levelNumber` - Check completion
- `POST /api/quests/validator/mini-boss` - Mini-boss challenge
- `POST /api/quests/validator/final-boss` - Final-boss challenge
- `GET /api/player/:userId/skill-nodes/:gameId/:treeType` - Available nodes
- `POST /api/player/:userId/skill-trees/:treeId/unlock-node` - Unlock node

**Example Quest Submission:**
```javascript
async function submitQuest(levelNumber, questNumber) {
  const userId = localStorage.getItem('userId');
  const answer = document.getElementById(`quest-${questNumber}-input`).value;
  
  const response = await fetch('/api/quests/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId,
      gameId: 'promptforge',
      levelNumber,
      questNumber,
      answer
    })
  });
  
  const data = await response.json();
  
  // Show validation feedback
  const feedbackEl = document.getElementById(`quest-${questNumber}-feedback`);
  if (data.validation.valid) {
    feedbackEl.innerHTML = `
      ✓ Accepted! Score: ${data.validation.score.toFixed(0)}%
      <br/>Validating for XP award...
    `;
    
    // Validate for XP
    const validateResponse = await fetch(
      `/api/quests/${data.submission.id}/validate`,
      { method: 'POST' }
    );
    const validateData = await validateResponse.json();
    
    if (validateData.success) {
      feedbackEl.innerHTML = `
        ✓ Approved! +${validateData.xpAwarded} XP
        <br/>New Rank: ${validateData.user.current_rank}
      `;
      
      // Update UI
      document.getElementById('player-xp').textContent = validateData.user.total_xp;
      document.getElementById('player-rank').textContent = validateData.user.current_rank;
      
      // Check for rank-up
      if (validateData.rankedUp) {
        showNotification(`🎉 Rank up to ${validateData.user.current_rank}!`);
        loadSkillNodes(); // Unlock new nodes
      }
    }
  } else {
    feedbackEl.innerHTML = `
      ✗ Needs improvement<br/>
      ${data.validation.feedback.join('<br/>')}
    `;
  }
}
```

**Example Mini-Boss Submission:**
```javascript
async function attemptMiniBoss(levelNumber) {
  const userId = localStorage.getItem('userId');
  
  const response = await fetch('/api/quests/validator/mini-boss', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, levelNumber })
  });
  
  const data = await response.json();
  
  if (data.success) {
    alert(`✓ Mini-boss defeated!\n+${data.xpAwarded} XP\nFinal-boss unlocked!`);
    document.getElementById('final-boss-btn').disabled = false;
    document.getElementById('player-xp').textContent = data.totalXP;
  } else {
    alert(`✗ ${data.message}`);
  }
}
```

---

### Category 4: Godmode Gate (1 file)

**File:**
- `promptforge-l7.html` (Already created, needs wiring)

**Tasks:**
1. Load real Godmode status → `GET /api/quests/validator/godmode-status/:userId`
2. Display eligibility requirements with checkmarks
3. Wire 3 Ascension Trial submit buttons → `POST /api/quests/submit` (levelNumber: 7)
4. Show trial validation feedback
5. Wire Final Boss button → `POST /api/quests/validator/final-boss`
6. Celebrate Godmode unlock on success
7. Update UI with real-time progress

**Already has basic structure - just needs API wiring**

---

### Category 5: Player Dashboard Pages (3-5 files)

**Files:**
- `profile.html` - Player profile
- `leaderboard.html` - Top players by XP/rank
- Possibly: `onboarding.html`, `builder.html`, etc.

**Tasks per file:**

**profile.html:**
1. Load player profile → `GET /api/player/:userId`
2. Display XP progress bar
3. Show all achievements → `GET /api/player/:userId/achievements`
4. Show skill trees → `GET /api/player/:userId/skill-trees`
5. Display quest history → `GET /api/quests/user/:userId/all`
6. Show active power-ups (if needed)
7. Update profile settings → `PATCH /api/player/:userId`

**leaderboard.html:**
1. Load top players by XP → `GET /api/xp/ranks`
2. Display player rankings
3. Show current player position
4. Refresh every 30 seconds for real-time updates
5. Filter by rank/game

**Endpoints to use:**
- `GET /api/player/:userId` - Profile data
- `GET /api/player/:userId/achievements` - Achievements list
- `GET /api/player/:userId/skill-trees` - Skill tree progress
- `GET /api/quests/user/:userId/all` - Quest history
- `GET /api/xp/ranks` - Rank thresholds
- `PATCH /api/player/:userId` - Update profile
- `POST /api/player/:userId/skill-trees/:treeId/unlock-node` - Unlock nodes

---

### Category 6: Other Pages (6+ files)

**Files:**
- `gamehub.html`, `games.html` - Game listings
- `audio.html`, `video.html`, `read.html` - Content pages
- `contact.html`, `about.html` - Info pages
- `onboarding.html` - Onboarding flow
- etc.

**Tasks:**
1. Add header with player info (name, rank, XP)
2. Add navigation menu with logout
3. Conditionally show content based on unlock status
4. For content pages: Possibly award XP for completion
5. Ensure mobile responsive

**Minimal wiring needed** - mostly just header/nav updates

---

## Detailed Integration Checklist

### Phase 3a: Foundation Setup (Day 1)

- [ ] Create `shared/utils.js` with common functions
  - `apiCall(endpoint, options)`
  - `getCurrentUser()`
  - `setUserData(user)`
  - `requireAuth()`
  - `showNotification(message)`
  - `showError(error)`

- [ ] Create `shared/constants.js`
  - `API_BASE = '/api'`
  - Game IDs, level numbers, etc.

- [ ] Update `index.html` (login page)
  - Wire login form
  - Wire register form
  - Test localStorage persistence

- [ ] Update main game hub
  - Display player stats in header
  - Load games list
  - Show current progress
  - Test navigation

**Target: Have 1 user logged in and viewing their profile**

### Phase 3b: Level Pages (Days 2-3)

- [ ] Update `promptforge-l1.html`
  - Wire 3 quest submit buttons
  - Show validation feedback
  - Display XP earned
  - Enable mini-boss

- [ ] Repeat for `promptforge-l2.html` through `promptforge-l6.html`
  - Use l1 as template
  - Update quest descriptions
  - Test mini-boss flow

- [ ] Update `promptforge-l7.html` (Godmode)
  - Wire eligibility check
  - Wire 3 Ascension Trials
  - Wire Final Boss

**Target: Can submit quests, earn XP, rank up, unlock nodes**

### Phase 3c: Dashboard & Leaderboard (Day 4)

- [ ] Update `profile.html`
  - Display profile info
  - Show achievements
  - Show quest history
  - Show skill trees

- [ ] Update `leaderboard.html`
  - Show top players
  - Real-time updates
  - Current player position

- [ ] Update other pages with header/nav

**Target: Full profile visibility, leaderboard working**

### Phase 3d: Testing & Refinement (Day 5)

- [ ] End-to-end testing
  - Login → Play level → Submit quest → Earn XP → Rank up
  - Mini-boss → Final-boss → Godmode progression
  
- [ ] Mobile testing
  - All 26 pages responsive
  - Touch events working
  
- [ ] Performance
  - < 2 second loads
  - Smooth animations
  
- [ ] Error handling
  - Graceful failures
  - Retry logic
  
- [ ] Deployment
  - Deploy to Cloudflare Workers
  - Deploy to GitHub Pages
  - Smoke tests

---

## File Priority Order

**CRITICAL (Week 1, must work):**
1. index.html - Login
2. promptforge.html - Game hub
3. promptforge-l1.html - Level 1
4. promptforge-l7.html - Godmode

**HIGH (Week 1-2, very important):**
5. promptforge-l2.html through promptforge-l6.html
6. profile.html - Dashboard
7. leaderboard.html - Rankings

**MEDIUM (Week 2, nice to have):**
8. Other pages (about, contact, etc.)
9. Payment pages (if in scope)
10. Achievement pages

---

## Key API Endpoints Reference

### Authentication (3 endpoints)
```
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/logout
```

### Quest Submission (5 endpoints)
```
POST   /api/quests/submit
GET    /api/quests/:questSubmissionId
POST   /api/quests/:questSubmissionId/validate
GET    /api/quests/user/:userId/all
GET    /api/quests/user/:userId/level/:levelNumber
```

### Boss Challenges (3 endpoints)
```
POST   /api/quests/validator/mini-boss
POST   /api/quests/validator/final-boss
GET    /api/quests/validator/godmode-status/:userId
```

### Player Profile (4 endpoints)
```
GET    /api/player/:userId
PATCH  /api/player/:userId
GET    /api/player/:userId/games
GET    /api/player/:userId/achievements
GET    /api/player/:userId/skill-trees
GET    /api/player/:userId/quest-progress
```

### Games (2 endpoints)
```
GET    /api/games
GET    /api/games/:gameId/levels
```

### XP & Leaderboard (2 endpoints)
```
GET    /api/xp/history/:userId
GET    /api/xp/ranks
```

### Skill Trees (2 endpoints)
```
GET    /api/player/:userId/skill-nodes/:gameId/:treeType
POST   /api/player/:userId/skill-trees/:treeId/unlock-node
```

**Total: 21 endpoints to integrate**

---

## Testing Strategy

### Unit Tests (Per Endpoint)
- Test each API call in isolation
- Mock responses
- Verify error handling

### Integration Tests (Per Page)
- Load page
- Verify API calls made
- Verify UI updated correctly

### End-to-End Tests (Critical Paths)
1. **Auth Flow**: Register → Login → Check localStorage
2. **Quest Flow**: Load level → Submit quest → Validate → Earn XP → Rank up
3. **Boss Flow**: Complete level → Mini-boss → Final-boss
4. **Godmode Flow**: Complete all levels → Check eligibility → Ascension trials → Final boss → Godmode
5. **Dashboard**: Load profile → Check XP/rank → View achievements

### Performance Tests
- Measure page load times
- Check API response times
- Monitor network requests

### Mobile Tests
- Test on iOS/Android simulators
- Verify touch interactions
- Check responsive layouts
- Test on various screen sizes (320px, 768px, 1024px)

---

## Deployment Checklist

### Before Deploying to Production
- [ ] All 26 HTML files wired to APIs
- [ ] No console errors
- [ ] All API calls working
- [ ] Authentication flow verified
- [ ] Quest submission end-to-end tested
- [ ] Rank progression verified
- [ ] Godmode unlock logic tested
- [ ] Mobile responsive on all pages
- [ ] Performance acceptable (< 2s loads)
- [ ] Error handling graceful
- [ ] Documentation updated

### Deployment Steps
1. Run `npm run build`
2. Run `npm run deploy` (Cloudflare Workers)
3. Deploy to GitHub Pages (frontend)
4. Test live endpoints
5. Monitor for errors

### Rollback Plan
- Keep backup of current worker
- Keep previous worker version accessible
- Can rollback to previous deploy in < 5 minutes

---

## Estimated Timeline

| Phase | Tasks | Duration | Target |
|-------|-------|----------|--------|
| 3a | Foundation + Auth + Hub | 1 day | Users logged in, viewing hub |
| 3b | Level pages (L1-L7) | 2 days | Can submit quests, earn XP, rank up |
| 3c | Dashboard + Leaderboard | 1 day | Full profile visibility |
| 3d | Testing + Refinement | 1 day | Production ready |
| **Total** | | **4-5 days** | **Live** |

---

## Success Metrics

### Functionality
- ✅ 26/26 HTML files wired to APIs
- ✅ All 21 API endpoints used
- ✅ Complete quest flow working
- ✅ Boss challenges accessible
- ✅ Rank progression automatic
- ✅ Godmode gate functional

### Quality
- ✅ 0 console errors
- ✅ 0 unhandled API errors
- ✅ < 2 second page loads
- ✅ Mobile responsive (all screen sizes)
- ✅ 100% uptime during testing

### User Experience
- ✅ Smooth, intuitive flows
- ✅ Clear validation feedback
- ✅ Real-time progress updates
- ✅ Celebration on achievements
- ✅ Graceful error handling

---

## Known Issues to Avoid

1. **localStorage persistence** - Ensure token doesn't expire mid-session
2. **Race conditions** - Don't submit same quest twice simultaneously
3. **Rate limiting** - May need to add if API gets overwhelmed
4. **Mobile touch events** - Ensure buttons responsive to touch
5. **Cross-origin requests** - CORS already configured, but verify
6. **Concurrent XP updates** - Only one XP update per submission
7. **Godmode eligibility** - Check both XP and boss conditions

---

## Shared Utility Functions to Create

Create `assets/js/api-utils.js`:

```javascript
// API Configuration
const API_BASE = '/api';

// Make API call with authentication
async function apiCall(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'API Error');
  }
  
  return response.json();
}

// Get current user
function getCurrentUser() {
  return {
    id: localStorage.getItem('userId'),
    rank: localStorage.getItem('currentRank'),
    xp: parseInt(localStorage.getItem('totalXP') || '0')
  };
}

// Set user data
function setUserData(user) {
  localStorage.setItem('userId', user.id);
  localStorage.setItem('currentRank', user.current_rank);
  localStorage.setItem('totalXP', user.total_xp);
}

// Require authentication
function requireAuth() {
  if (!localStorage.getItem('userId')) {
    window.location.href = '/index.html';
    return false;
  }
  return true;
}

// Show notification
function showNotification(message) {
  const div = document.createElement('div');
  div.className = 'notification';
  div.textContent = message;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3000);
}

// Show error
function showError(error) {
  const div = document.createElement('div');
  div.className = 'error-notification';
  div.textContent = error;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 5000);
}
```

---

## Notes for Next Session

1. **Start with auth pages** - Get user login working first
2. **Use L1 as template** - Copy structure to other levels
3. **Test frequently** - After each page, verify API calls
4. **Mobile first** - Design responsive as you go
5. **Error handling** - Show users clear messages for failures
6. **Documentation** - Update API reference as you discover issues
7. **Performance** - Monitor network tab, optimize as needed

---

## Questions to Answer Before Starting Phase 3

1. Are payment features (stripe) in scope for Phase 3? (Probably not)
2. Should achievement unlock automatically or manually? (Recommend: auto)
3. Do we need real-time multiplayer features? (No - single player for now)
4. What's the minimum viable phase 3? (Auth + 1 level + Godmode gate)
5. Should we add analytics/logging? (Nice to have, can add in Phase 4)

---

## Success Definition

**Phase 3 is complete when:**

1. A new user can register and login
2. User can view game hub with their progress
3. User can submit a quest and get validation feedback
4. User receives XP and rank progresses automatically
5. User can complete a level (3 quests + mini-boss + final-boss)
6. User can progress through all 7 levels
7. User can reach Godmode (complete 3 trials + final boss)
8. User can view profile with all stats
9. User can see leaderboard rankings
10. All features work on mobile
11. No errors in console
12. API calls logged for monitoring

**When all 11 items verified → Phase 3 COMPLETE ✅**

---

## Git Workflow

```bash
# Start Phase 3
git checkout -b phase-3/frontend-integration

# After each category
git add .
git commit -m "Phase 3: Wire [category] pages to APIs"

# After testing
git commit -m "Phase 3: Testing and refinement complete"

# Final
git merge main
git tag phase-3-complete
```

---

**READY TO START PHASE 3** 🚀

Review this plan at the start of your next session and begin with the "Phase 3a: Foundation Setup" tasks.
