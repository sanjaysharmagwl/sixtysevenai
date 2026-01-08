# Phase 2 API Reference - Quest System

## Base URL
```
Local Dev: http://localhost:8787
Production: https://api.yourdomain.com
```

---

## Quest Submission APIs

### POST /api/quests/submit
Submit a quest answer for validation.

**Request:**
```json
{
  "userId": "user-123",
  "gameId": "promptforge",
  "levelNumber": 1,
  "questNumber": 1,
  "answer": "Your answer text here..."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "submission": {
    "id": "sub-456",
    "user_id": "user-123",
    "status": "validated",
    "validation_score": 85,
    "validation_feedback": [],
    "submitted_at": "2026-01-08T10:00:00Z",
    "validated_at": "2026-01-08T10:00:01Z"
  },
  "validation": {
    "valid": true,
    "score": 85,
    "feedback": [],
    "isHighQuality": true
  }
}
```

**Response (400 Bad Request):**
```json
{
  "error": "Validation error",
  "details": [{ "code": "too_short", "message": "Answer must be at least 10 characters" }]
}
```

---

### GET /api/quests/:questSubmissionId
Get details of a submitted quest.

**Response:**
```json
{
  "id": "sub-456",
  "user_id": "user-123",
  "game_id": "promptforge",
  "level_number": 1,
  "quest_number": 1,
  "answer": "...",
  "status": "validated",
  "validation_score": 85,
  "validation_feedback": [],
  "xp_awarded": null,
  "submitted_at": "2026-01-08T10:00:00Z"
}
```

---

### POST /api/quests/:questSubmissionId/validate
Validate a submission and award XP if high quality.

**Request:** (empty body)

**Response (200 OK):**
```json
{
  "success": true,
  "submission": { ... },
  "validation": {
    "valid": true,
    "score": 85,
    "feedback": []
  },
  "xpAwarded": 185,
  "user": {
    "id": "user-123",
    "total_xp": 2850,
    "current_rank": "User"
  },
  "transaction": {
    "id": "tx-789",
    "user_id": "user-123",
    "base_xp": 100,
    "total_xp": 185,
    "created_at": "2026-01-08T10:00:01Z"
  }
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "submission": { ... },
  "validation": {
    "valid": false,
    "score": 45,
    "feedback": ["Answer must be at least 50 characters"]
  },
  "message": "Submission did not meet quality standards"
}
```

---

### GET /api/quests/user/:userId/all
Get all submissions for a user (optionally filtered by game).

**Query Parameters:**
- `gameId` (optional): Filter by game

**Response:**
```json
[
  {
    "id": "sub-456",
    "user_id": "user-123",
    "game_id": "promptforge",
    "level_number": 1,
    "quest_number": 1,
    "status": "approved",
    "validation_score": 85,
    "xp_awarded": 185,
    "submitted_at": "2026-01-08T10:00:00Z",
    "approved_at": "2026-01-08T10:00:01Z"
  },
  ...
]
```

---

### GET /api/quests/user/:userId/level/:levelNumber
Get completion status for a specific level.

**Response:**
```json
{
  "userId": "user-123",
  "levelNumber": 1,
  "completedQuests": 2,
  "totalQuests": 3,
  "isLevelComplete": false,
  "submissions": [
    { "quest_number": 1, "status": "approved" },
    { "quest_number": 2, "status": "approved" }
  ]
}
```

---

## Boss Challenge APIs

### POST /api/quests/validator/mini-boss
Attempt the mini-boss challenge for a level.

**Request:**
```json
{
  "userId": "user-123",
  "levelNumber": 1
}
```

**Response (200 OK) - Success:**
```json
{
  "success": true,
  "minibossPassed": true,
  "xpAwarded": 325,
  "totalXP": 3175,
  "previousRank": "User",
  "newRank": "User",
  "rankedUp": false,
  "bossChallenges": [
    { "constraint": "Must handle empty input gracefully" },
    { "constraint": "Must work with special characters" },
    { "constraint": "Must preserve formatting" }
  ],
  "nextChallenge": "Final Boss - Unlock the truth"
}
```

**Response (400 Bad Request) - Prerequisites not met:**
```json
{
  "success": false,
  "message": "Must complete all 3 quests before facing mini-boss",
  "questsCompleted": 2,
  "questsRequired": 3
}
```

---

### POST /api/quests/validator/final-boss
Attempt the final boss challenge for a level.

**Request:**
```json
{
  "userId": "user-123",
  "levelNumber": 1
}
```

**Response (200 OK) - Success:**
```json
{
  "success": true,
  "finalBossPassed": true,
  "xpAwarded": 700,
  "totalXP": 3875,
  "previousRank": "User",
  "newRank": "Hacker",
  "rankedUp": true,
  "levelComplete": true,
  "godmodeUnlocked": false,
  "message": "Level 1 conquered! Ready for the next challenge."
}
```

**Response (200 OK) - Godmode Unlocked:**
```json
{
  "success": true,
  "finalBossPassed": true,
  "xpAwarded": 2500,
  "totalXP": 158500,
  "previousRank": "Overlord",
  "newRank": "Godmode",
  "rankedUp": true,
  "godmodeUnlocked": true,
  "message": "🌟 GODMODE UNLOCKED! You have ascended to ultimate authority."
}
```

**Response (400 Bad Request) - Prerequisites not met:**
```json
{
  "success": false,
  "message": "Must defeat the mini-boss first"
}
```

---

### GET /api/quests/validator/godmode-status/:userId
Check Godmode eligibility status.

**Response:**
```json
{
  "userId": "user-123",
  "currentRank": "Overlord",
  "godmodeProgress": {
    "xpAccumulated": 145000,
    "xpRequired": 156000,
    "xpProgress": 92.95,
    "conditions": {
      "xpAccumulation": false,
      "finalBosses": {
        "completed": 5,
        "required": 6
      },
      "minRankMet": true
    }
  },
  "godmodeUnlocked": false,
  "message": "Continue your journey to Godmode mastery..."
}
```

**Response (Godmode Unlocked):**
```json
{
  "userId": "user-123",
  "currentRank": "Godmode",
  "godmodeProgress": {
    "xpAccumulated": 156500,
    "xpRequired": 156000,
    "xpProgress": 100.32,
    "conditions": {
      "xpAccumulation": true,
      "finalBosses": {
        "completed": 6,
        "required": 6
      },
      "minRankMet": true
    }
  },
  "godmodeUnlocked": true,
  "message": "🌟 You have proven yourself worthy of Godmode!"
}
```

---

## Player Progress APIs

### GET /api/player/:userId/quest-progress
Get quest completion progress aggregated by level.

**Response:**
```json
{
  "userId": "user-123",
  "progressByLevel": {
    "1": { "completed": 3, "total": 3, "isComplete": true },
    "2": { "completed": 2, "total": 3, "isComplete": false },
    "3": { "completed": 0, "total": 3, "isComplete": false },
    "4": { "completed": 0, "total": 3, "isComplete": false },
    "5": { "completed": 0, "total": 3, "isComplete": false },
    "6": { "completed": 0, "total": 3, "isComplete": false },
    "7": { "completed": 0, "total": 3, "isComplete": false }
  },
  "totalLevelsComplete": 1,
  "submissions": [ ... ]
}
```

---

### GET /api/player/:userId/skill-nodes/:gameId/:treeType
Get available and unlocked skill nodes for a tree.

**Parameters:**
- `gameId`: "promptforge" (game ID)
- `treeType`: "mind", "systems", "output", or "meta"

**Response:**
```json
{
  "userId": "user-123",
  "gameId": "promptforge",
  "treeType": "mind",
  "currentRank": "User",
  "currentLevel": 2,
  "availableNodes": [
    {
      "id": "node-1",
      "nodeName": "Lateral Thinking",
      "description": "Think outside the box",
      "unlockLevel": 1
    },
    {
      "id": "node-2",
      "nodeName": "Decomposition",
      "description": "Break problems into parts",
      "unlockLevel": 2
    }
  ],
  "unlockedNodes": [
    {
      "id": "node-1",
      "nodeName": "Lateral Thinking",
      "unlockLevel": 1
    }
  ]
}
```

---

### POST /api/player/:userId/skill-trees/:skillTreeId/unlock-node
Manually unlock an available skill node.

**Request:**
```json
{
  "nodeId": "node-2"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "unlockedNode": {
    "id": "unlock-1",
    "user_id": "user-123",
    "node_id": "node-2",
    "unlocked_at": "2026-01-08T10:00:00Z"
  }
}
```

**Response (400 Bad Request) - Already unlocked:**
```json
{
  "error": "Node already unlocked"
}
```

---

## XP & Rank APIs

### POST /api/xp/award
Award XP to a player (automatically progresses rank & unlocks nodes).

**Request:**
```json
{
  "userId": "user-123",
  "gameId": "promptforge",
  "levelId": "promptforge-l1",
  "baseXP": 100,
  "multipliers": {
    "levelMultiplier": 1.1,
    "streakMultiplier": 1.0,
    "powerUpMultiplier": 1.0,
    "metaBonus": 1.0
  }
}
```

**Response:**
```json
{
  "success": true,
  "xpAwarded": 110,
  "totalXP": 2960,
  "previousRank": "User",
  "newRank": "Hacker",
  "rankedUp": true,
  "transaction": {
    "id": "tx-789",
    "user_id": "user-123",
    "total_xp": 110,
    "created_at": "2026-01-08T10:00:00Z"
  }
}
```

---

### GET /api/xp/history/:userId
Get XP transaction history.

**Query Parameters:**
- `limit` (optional): Max results (default: 50)

**Response:**
```json
[
  {
    "id": "tx-789",
    "user_id": "user-123",
    "game_id": "promptforge",
    "level_id": "promptforge-l1",
    "base_xp": 100,
    "total_xp": 110,
    "multipliers": { ... },
    "created_at": "2026-01-08T10:00:00Z"
  },
  ...
]
```

---

### GET /api/xp/ranks
Get all rank information.

**Response:**
```json
[
  {
    "id": "rank-1",
    "rank": "Noob",
    "rankOrder": 1,
    "totalXPRequired": 0,
    "multiplier": 1.0,
    "philosophy": "Every master was once a noob"
  },
  {
    "id": "rank-2",
    "rank": "User",
    "rankOrder": 2,
    "totalXPRequired": 1500,
    "multiplier": 1.15,
    "philosophy": "You have proven basic competency"
  },
  ...
]
```

---

## Error Handling

All endpoints return appropriate HTTP status codes:

- **200 OK** - Success
- **400 Bad Request** - Validation error or missing prerequisites
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server error

Error response format:
```json
{
  "error": "Error message",
  "details": {
    "field": "additional error context"
  }
}
```

---

## Authentication

Include JWT token in Authorization header:
```
Authorization: Bearer <token>
```

Token stored in localStorage after login.

---

## Example Frontend Integration

```javascript
// Submit a quest
async function submitQuest(levelNumber, questNumber, answer) {
  const userId = localStorage.getItem('userId');
  
  const response = await fetch('/api/quests/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      userId,
      gameId: 'promptforge',
      levelNumber,
      questNumber,
      answer
    })
  });

  const data = await response.json();
  
  if (data.success && data.validation.valid) {
    // Show success & score
    alert(`✓ Submission accepted! Score: ${data.validation.score.toFixed(0)}%`);
    
    // Validate for XP
    const validateResponse = await fetch(
      `/api/quests/${data.submission.id}/validate`,
      { method: 'POST' }
    );
    const validateData = await validateResponse.json();
    
    if (validateData.success) {
      alert(`+${validateData.xpAwarded} XP awarded!`);
    }
  } else {
    // Show validation feedback
    alert(`✗ Needs improvement: ${data.validation.feedback.join(', ')}`);
  }
}

// Check quest progress
async function loadQuestProgress(levelNumber) {
  const userId = localStorage.getItem('userId');
  const response = await fetch(
    `/api/quests/user/${userId}/level/${levelNumber}`
  );
  const data = await response.json();
  
  // Show: "Completed 2/3 quests"
  document.getElementById('progress').textContent = 
    `${data.completedQuests}/${data.totalQuests} quests completed`;
  
  // Enable mini-boss if level complete
  if (data.isLevelComplete) {
    document.getElementById('mini-boss-btn').disabled = false;
  }
}

// Check Godmode status
async function loadGodmodeStatus() {
  const userId = localStorage.getItem('userId');
  const response = await fetch(
    `/api/quests/validator/godmode-status/${userId}`
  );
  const data = await response.json();
  
  document.getElementById('godmode-progress').innerHTML = `
    XP: ${data.godmodeProgress.xpAccumulated} / ${data.godmodeProgress.xpRequired}
    Final Bosses: ${data.godmodeProgress.conditions.finalBosses.completed} / 6
    Status: ${data.godmodeUnlocked ? '🌟 UNLOCKED' : 'In Progress'}
  `;
}
```

---

## Rate Limiting

No rate limiting currently. Add as needed:
- Submissions: 10 per hour per user
- Boss challenges: 1 per hour per user
- Skill unlock: 1 per minute per user

---

## Version History

- **v1.0** (2026-01-08) - Initial Phase 2 release
  - Quest submission validation
  - Boss challenge validators
  - Automatic rank progression
  - Skill tree unlocking
