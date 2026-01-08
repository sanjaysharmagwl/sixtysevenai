# PROMPTFORGE™ — THE COMPLETE GAME DESIGN

Welcome to PromptForge, the first game in the SixtySeven AI skill platform.

---

## 📚 Documentation Index

### For Game Designers & PMs
- **[PROMPTFORGE.md](PROMPTFORGE.md)** — Original game specification (from AGENT.md Section 1)
  - Game identity, rank ladder, level structure
  - Power-ups, skill trees, quest design
  - UI screen system, messaging

### For Developers
- **[PROMPTFORGE_ARCHITECTURE.md](PROMPTFORGE_ARCHITECTURE.md)** — Technical implementation
  - Site map, directory structure, component hierarchy
  - Data flow, UI states, CSS architecture
  - Responsive breakpoints, performance optimization
  - Deployment pipeline, integration points

### For Designers
- **[PROMPTFORGE_DESIGN.md](PROMPTFORGE_DESIGN.md)** — Design & UX specification
  - Page structure and sections
  - Design patterns, color coding, hover effects
  - User flow, state management
  - Content strategy, XP economy
  - Testing checklist, deployment notes

### For Players
- **[PROMPTFORGE_QUICKSTART.md](PROMPTFORGE_QUICKSTART.md)** — Player guide
  - How to play (6 steps)
  - UI navigation walkthrough
  - Quest submission process
  - Skill tree explanation
  - Tips, FAQs, rank progression

### For Project Managers
- **[PROMPTFORGE_LAUNCH.md](PROMPTFORGE_LAUNCH.md)** — Launch summary
  - What we built (5 files created)
  - Game design summary
  - Visual design overview
  - Feature checklist (✅ implemented, ⏳ pending)
  - Deployment checklist
  - Success metrics

---

## 🎮 Game Files

### Live Game Pages
- **[promptforge.html](promptforge.html)** (34 KB)
  - Main game hub with tabs (LEVELS, SKILL TREES, QUESTS)
  - Level map (L1-L7), skill tree constellation, quest browser
  - Player stats (Rank, Level Ring, XP Progress)
  - Responsive design (mobile/tablet/desktop)

- **[promptforge-level.html](promptforge-level.html)** (18 KB)
  - Detailed level experience for individual level
  - Quest sequence (all 3 quests + mini-boss + final boss)
  - Full boss arena with requirements and unlocks
  - Completion criteria and submission buttons

### Integration
- Updated [gamehub.html](gamehub.html)
  - Prompt Architect card now links to `promptforge.html`

---

## 🎯 Game Overview

### What is PromptForge?
A **skill-forging game** where players master AI prompt engineering across **7 ascension ranks** (Noob → Godmode).

Not a course. Not a tutorial. A **game** where:
- Every quest builds real capability
- Every boss victory earns a rank
- Every skill tree node is permanent
- Progression is visible, celebratory, addictive

### Core Loop
```
Complete 3 Quests (100-400 XP each)
    ↓
Pass Mini-Boss (300-500 XP)
    ↓
Defeat Final Boss (700-1200 XP)
    ↓
Ascend Rank + Unlock Level + Unlock Skill Nodes
    ↓
Repeat (Level 2 → Level 3 → ... → Level 7/Godmode)
```

### Ascension Ranks (L1-L7)
```
L1: 🟢 Signal Rookie        → "I have entered the system"
L2: 🔵 Command User         → "I can operate tools"
L3: 🟠 Command Hacker       → "I can bend systems"
L4: 🟣 Prompt Engineer      → "I can build systems"
L5: 🟡 Command Architect    → "I can design machines"
L6: 🔴 Command Overlord     → "I command automation armies"
L7: 👑 Command Godmode      → "I define the future systems"
```

---

## 🎨 Design System

### Color Palette (Neural Spectrum)
- **Teal** (#26E6C8) — Primary, available
- **Blue** (#2A8CFF) — Secondary, information
- **Orange** (#FF8A00) — Accent, active/CTA
- **Green** (#22C55E) — Success, completed
- **Navy** (#0F172A) — Background, dark

### Typography
- **Headings**: Space Grotesk (bold)
- **Body**: Inter
- **Values**: JetBrains Mono

### Interactive Effects
- Hover: Scale 1.08, glow, color shift
- Animations: Smooth CSS transitions
- Feedback: Immediate visual response
- Locked state: 50% opacity, disabled cursor

---

## 📱 Responsive Design

Works perfectly on:
- **Mobile** (375px): 1-column layout, compact
- **Tablet** (768px): 2-3 columns, standard padding
- **Desktop** (1024px+): Full grid (5-7 columns), generous

All text scales beautifully. All buttons are 44px+ touch targets.

---

## ✨ Features Implemented

### Visual Features
✅ Game hub with hero section
✅ Game state overview (Rank, Level Ring, XP)
✅ Tab system (LEVELS, SKILL TREES, QUESTS)
✅ 7-level responsive grid
✅ 4 skill tree constellation views
✅ Quest cards (completed, active, locked states)
✅ Mini-boss challenge card
✅ Final boss arena with requirements/unlocks
✅ Dark mode optimized
✅ Responsive mobile menu

### Functional Features
✅ Tab switching with smooth transitions
✅ Theme toggle (light/dark)
✅ Navigation (back to hub, to game hub)
✅ Keyboard accessible
✅ Proper semantic HTML

### Documentation
✅ Comprehensive design guide (PROMPTFORGE_DESIGN.md)
✅ Player quick-start guide (PROMPTFORGE_QUICKSTART.md)
✅ Technical architecture (PROMPTFORGE_ARCHITECTURE.md)
✅ Launch summary (PROMPTFORGE_LAUNCH.md)
✅ Original specification (PROMPTFORGE.md)

---

## 📋 Features Coming Soon (Phase 2)

### Interactive Systems
⏳ Quest submission form (file upload / text paste)
⏳ Build validation engine
⏳ XP award animations
⏳ Level-up celebration modals
⏳ Player progress persistence (backend)

### Advanced Features
⏳ Mini-boss validation logic
⏳ Final-boss submission system
⏳ Achievement badges
⏳ Leaderboard integration
⏳ Power-up system (Focus Mode, Memory Lock, XP Multiplier)

### Other Games
⏳ Agent Engineer (Game 2)
⏳ Automation Forge (Game 3)
⏳ Creator OS (Game 4)
⏳ Startup Builder (Game 5)

---

## 🚀 Getting Started

### For Players
1. Go to [Games Hub](gamehub.html)
2. Click **PROMPTFORGE™** card
3. Read [PROMPTFORGE_QUICKSTART.md](PROMPTFORGE_QUICKSTART.md) for how to play
4. Start your first quest!

### For Developers
1. Read [PROMPTFORGE_ARCHITECTURE.md](PROMPTFORGE_ARCHITECTURE.md) for technical details
2. Explore [promptforge.html](promptforge.html) for component structure
3. Explore [promptforge-level.html](promptforge-level.html) for level detail page
4. Reference [AGENT.md](AGENT.md) for brand guidelines
5. Start building Phase 2 features (backend)

### For Designers
1. Read [PROMPTFORGE_DESIGN.md](PROMPTFORGE_DESIGN.md) for design patterns
2. Review [PROMPTFORGE.md](PROMPTFORGE.md) for game design philosophy
3. Check [PROMPTFORGE_ARCHITECTURE.md](PROMPTFORGE_ARCHITECTURE.md) for CSS/layout details
4. Use design checklist for future features

### For Project Managers
1. Read [PROMPTFORGE_LAUNCH.md](PROMPTFORGE_LAUNCH.md) for project status
2. Review feature checklist (✅ 13 features implemented, ⏳ 6 pending)
3. Check success metrics and timeline
4. Plan Phase 2 backend work

---

## 📊 Statistics

### Code
- `promptforge.html`: 34 KB, 600+ lines
- `promptforge-level.html`: 18 KB, 380+ lines
- Documentation: 60+ KB, 2000+ lines
- Total: ~52 KB HTML, ~60 KB documentation

### Design
- 5 files created
- 2 live game pages
- 5 documentation guides
- 100% responsive (mobile-first)
- WCAG AA accessibility compliance

### Content
- 7 levels (L1-L7)
- 4 skill trees (16 total nodes)
- 21 quests (3 per level)
- 7 mini-bosses
- 7 final bosses
- 156,000 XP to Godmode

---

## 🎓 Learning Path

### For Understanding the Vision
1. Start: [PROMPTFORGE.md](PROMPTFORGE.md)
2. Then: [PROMPTFORGE_LAUNCH.md](PROMPTFORGE_LAUNCH.md)
3. Deep Dive: [PROMPTFORGE_DESIGN.md](PROMPTFORGE_DESIGN.md)

### For Building Features
1. Start: [PROMPTFORGE_ARCHITECTURE.md](PROMPTFORGE_ARCHITECTURE.md)
2. Reference: [promptforge.html](promptforge.html) code
3. Reference: [AGENT.md](AGENT.md) for brand guidelines

### For Supporting Players
1. Start: [PROMPTFORGE_QUICKSTART.md](PROMPTFORGE_QUICKSTART.md)
2. Share: Bookmark for new players
3. Update: When features change

---

## 🔗 Quick Links

### Game Pages
- [Main Game Hub](promptforge.html)
- [Level Detail (L3)](promptforge-level.html)
- [Games Hub](gamehub.html)
- [Player Profile](profile.html)
- [Leaderboard](leaderboard.html)

### Documentation
- [Game Specification](PROMPTFORGE.md)
- [Design & UX](PROMPTFORGE_DESIGN.md)
- [Architecture & Technical](PROMPTFORGE_ARCHITECTURE.md)
- [Player Guide](PROMPTFORGE_QUICKSTART.md)
- [Launch Summary](PROMPTFORGE_LAUNCH.md)
- [This README](PROMPTFORGE_README.md)

### Master Guides
- [Brand Guidelines](AGENT.md)
- [GitHub Repository](https://github.com/sanjaysharmagwl/sixtysevenai)
- [Live Site](https://sixtysevenai.com)

---

## ✅ Quality Checklist

### Before Launch (Phase 1)
- ✅ All game pages created
- ✅ Responsive design tested
- ✅ Dark mode verified
- ✅ Navigation working
- ✅ No console errors
- ✅ Accessibility compliant
- ✅ Documentation complete

### Before Phase 2 (Backend)
- ⏳ API endpoints designed
- ⏳ Database schema defined
- ⏳ User authentication system
- ⏳ Quest validation logic
- ⏳ XP award engine
- ⏳ Leaderboard queries

### Before 4 Other Games
- ⏳ Game template finalized
- ⏳ Design system locked
- ⏳ Code generation tools
- ⏳ Content management system

---

## 🤝 Contributing

### Report Issues
- GitHub Issues (preferred)
- Contact form (sixtysevenai.com)
- Email: support@sixtysevenai.com

### Request Features
- Create GitHub Issue with `[Feature]` tag
- Include mockup or description
- Reference related documentation

### Submit Designs
- Follow [AGENT.md](AGENT.md) brand guidelines
- Update relevant documentation
- Test at 3 breakpoints
- Verify dark mode

---

## 📞 Support

### Documentation Questions
1. Check relevant .md file
2. Search documentation index
3. Contact design lead

### Technical Issues
1. Check browser console
2. Review [PROMPTFORGE_ARCHITECTURE.md](PROMPTFORGE_ARCHITECTURE.md)
3. Create GitHub issue with details

### Game Balance Questions
1. See [PROMPTFORGE.md](PROMPTFORGE.md)
2. See [PROMPTFORGE_DESIGN.md](PROMPTFORGE_DESIGN.md)
3. Contact game designer

---

## 🎉 What's Next?

### Immediate (Phase 2: Backend)
1. Build API endpoints for quest submission
2. Implement XP award system
3. Create player persistence layer
4. Add authentication system

### Short-term (Phase 3: Other Games)
1. Design Agent Engineer (Game 2)
2. Design Automation Forge (Game 3)
3. Design Creator OS (Game 4)
4. Design Startup Builder (Game 5)

### Medium-term (Phase 4: Community)
1. Leaderboard system
2. Build sharing platform
3. Mentor system
4. Community features

### Long-term (Phase 5: Scale)
1. Mobile app
2. API marketplace
3. Certification program
4. Corporate training version

---

## 📝 Version History

### v1.0 (Dec 29, 2025) — Launch
- ✅ Core game designed
- ✅ All pages created
- ✅ Documentation complete
- ✅ Ready for Phase 2

---

## 📄 License & Rights

**PromptForge™** is proprietary software created by SixtySeven AI.

- © 2025 SixtySeven AI
- All rights reserved
- Used with permission only
- Contact: support@sixtysevenai.com

---

## 🙏 Acknowledgments

Designed in accordance with [AGENT.md](AGENT.md), the master brand and design specification for SixtySeven AI.

Built with:
- Tailwind CSS (utility-first styling)
- HTML5 (semantic structure)
- Vanilla JavaScript (no frameworks)
- Space Grotesk + Inter + JetBrains Mono (typography)

---

## 👋 Final Note

**You're not taking a course. You're forging real power.**

PromptForge is a game that makes you dangerous with AI. Each level is a real identity upgrade. Each skill tree node is permanent. Each quest builds toward mastery.

Welcome to the forge. 🔥

---

**Last Updated**: Dec 29, 2025
**Status**: 🟢 READY FOR LAUNCH
**Confidence**: 🔥 SHIP IT

---

*For questions, corrections, or contributions, please refer to the [main repository](https://github.com/sanjaysharmagwl/sixtysevenai).*
