// Rule-based quest validator service
// Provides deterministic validation of quest submissions without AI

export interface QuestValidationRule {
  type: 'minLength' | 'maxLength' | 'containsKeywords' | 'excludesKeywords' | 'regex' | 'customFunction';
  condition: any;
  errorMessage: string;
}

export interface QuestValidationSchema {
  questId: string;
  gameId: string;
  levelNumber: number;
  rules: QuestValidationRule[];
  difficultyMultiplier: number;
}

// Default validation schemas for PromptForge quests (7 levels × 3 quests each)
const PROMPTFORGE_SCHEMAS: Record<number, Record<number, QuestValidationSchema>> = {
  1: {
    1: {
      questId: 'pf-l1-q1',
      gameId: 'promptforge',
      levelNumber: 1,
      difficultyMultiplier: 1,
      rules: [
        {
          type: 'minLength',
          condition: { min: 10 },
          errorMessage: 'Answer must be at least 10 characters'
        },
        {
          type: 'maxLength',
          condition: { max: 500 },
          errorMessage: 'Answer must not exceed 500 characters'
        },
        {
          type: 'containsKeywords',
          condition: { keywords: ['hello', 'world'], matchAll: false },
          errorMessage: 'Answer must contain at least one of: hello, world'
        }
      ]
    },
    2: {
      questId: 'pf-l1-q2',
      gameId: 'promptforge',
      levelNumber: 1,
      difficultyMultiplier: 1,
      rules: [
        {
          type: 'minLength',
          condition: { min: 20 },
          errorMessage: 'Answer must be at least 20 characters'
        },
        {
          type: 'maxLength',
          condition: { max: 1000 },
          errorMessage: 'Answer must not exceed 1000 characters'
        }
      ]
    },
    3: {
      questId: 'pf-l1-q3',
      gameId: 'promptforge',
      levelNumber: 1,
      difficultyMultiplier: 1.1,
      rules: [
        {
          type: 'minLength',
          condition: { min: 30 },
          errorMessage: 'Answer must be at least 30 characters'
        },
        {
          type: 'regex',
          condition: { pattern: '^[A-Za-z0-9\\s.,!?-]+$' },
          errorMessage: 'Answer contains invalid characters'
        }
      ]
    }
  },
  2: {
    1: {
      questId: 'pf-l2-q1',
      gameId: 'promptforge',
      levelNumber: 2,
      difficultyMultiplier: 1.2,
      rules: [
        {
          type: 'minLength',
          condition: { min: 50 },
          errorMessage: 'Answer must be at least 50 characters'
        },
        {
          type: 'maxLength',
          condition: { max: 2000 },
          errorMessage: 'Answer must not exceed 2000 characters'
        },
        {
          type: 'containsKeywords',
          condition: { keywords: ['command', 'prompt'], matchAll: false },
          errorMessage: 'Answer should demonstrate command/prompt understanding'
        }
      ]
    },
    2: {
      questId: 'pf-l2-q2',
      gameId: 'promptforge',
      levelNumber: 2,
      difficultyMultiplier: 1.2,
      rules: [
        {
          type: 'minLength',
          condition: { min: 60 },
          errorMessage: 'Answer must be at least 60 characters'
        },
        {
          type: 'excludesKeywords',
          condition: { keywords: ['bad', 'wrong', 'stupid'] },
          errorMessage: 'Answer contains inappropriate language'
        }
      ]
    },
    3: {
      questId: 'pf-l2-q3',
      gameId: 'promptforge',
      levelNumber: 2,
      difficultyMultiplier: 1.3,
      rules: [
        {
          type: 'minLength',
          condition: { min: 100 },
          errorMessage: 'Answer must be at least 100 characters'
        },
        {
          type: 'containsKeywords',
          condition: { keywords: ['structured', 'clear', 'organized'], matchAll: true },
          errorMessage: 'Answer must demonstrate structured, clear, organized thinking'
        }
      ]
    }
  },
  3: {
    1: {
      questId: 'pf-l3-q1',
      gameId: 'promptforge',
      levelNumber: 3,
      difficultyMultiplier: 1.4,
      rules: [
        {
          type: 'minLength',
          condition: { min: 100 },
          errorMessage: 'Answer must be at least 100 characters'
        },
        {
          type: 'maxLength',
          condition: { max: 3000 },
          errorMessage: 'Answer must not exceed 3000 characters'
        }
      ]
    },
    2: {
      questId: 'pf-l3-q2',
      gameId: 'promptforge',
      levelNumber: 3,
      difficultyMultiplier: 1.4,
      rules: [
        {
          type: 'minLength',
          condition: { min: 120 },
          errorMessage: 'Answer must be at least 120 characters'
        },
        {
          type: 'containsKeywords',
          condition: { keywords: ['engineer', 'design', 'optimize'], matchAll: false },
          errorMessage: 'Answer should demonstrate engineering thinking'
        }
      ]
    },
    3: {
      questId: 'pf-l3-q3',
      gameId: 'promptforge',
      levelNumber: 3,
      difficultyMultiplier: 1.5,
      rules: [
        {
          type: 'minLength',
          condition: { min: 150 },
          errorMessage: 'Answer must be at least 150 characters'
        },
        {
          type: 'regex',
          condition: { pattern: '^[\\s\\S]{150,}$' },
          errorMessage: 'Answer format is invalid'
        }
      ]
    }
  },
  4: {
    1: {
      questId: 'pf-l4-q1',
      gameId: 'promptforge',
      levelNumber: 4,
      difficultyMultiplier: 1.6,
      rules: [
        {
          type: 'minLength',
          condition: { min: 150 },
          errorMessage: 'Answer must be at least 150 characters'
        },
        {
          type: 'maxLength',
          condition: { max: 4000 },
          errorMessage: 'Answer must not exceed 4000 characters'
        }
      ]
    },
    2: {
      questId: 'pf-l4-q2',
      gameId: 'promptforge',
      levelNumber: 4,
      difficultyMultiplier: 1.6,
      rules: [
        {
          type: 'minLength',
          condition: { min: 180 },
          errorMessage: 'Answer must be at least 180 characters'
        },
        {
          type: 'containsKeywords',
          condition: { keywords: ['architecture', 'system', 'design'], matchAll: false },
          errorMessage: 'Answer should demonstrate architectural thinking'
        }
      ]
    },
    3: {
      questId: 'pf-l4-q3',
      gameId: 'promptforge',
      levelNumber: 4,
      difficultyMultiplier: 1.7,
      rules: [
        {
          type: 'minLength',
          condition: { min: 200 },
          errorMessage: 'Answer must be at least 200 characters'
        },
        {
          type: 'excludesKeywords',
          condition: { keywords: ['unclear', 'ambiguous', 'confused'] },
          errorMessage: 'Answer should not convey uncertainty'
        }
      ]
    }
  },
  5: {
    1: {
      questId: 'pf-l5-q1',
      gameId: 'promptforge',
      levelNumber: 5,
      difficultyMultiplier: 1.8,
      rules: [
        {
          type: 'minLength',
          condition: { min: 200 },
          errorMessage: 'Answer must be at least 200 characters'
        },
        {
          type: 'maxLength',
          condition: { max: 5000 },
          errorMessage: 'Answer must not exceed 5000 characters'
        }
      ]
    },
    2: {
      questId: 'pf-l5-q2',
      gameId: 'promptforge',
      levelNumber: 5,
      difficultyMultiplier: 1.8,
      rules: [
        {
          type: 'minLength',
          condition: { min: 250 },
          errorMessage: 'Answer must be at least 250 characters'
        },
        {
          type: 'containsKeywords',
          condition: { keywords: ['architect', 'framework', 'principles'], matchAll: false },
          errorMessage: 'Answer should demonstrate advanced architectural thinking'
        }
      ]
    },
    3: {
      questId: 'pf-l5-q3',
      gameId: 'promptforge',
      levelNumber: 5,
      difficultyMultiplier: 1.9,
      rules: [
        {
          type: 'minLength',
          condition: { min: 300 },
          errorMessage: 'Answer must be at least 300 characters'
        }
      ]
    }
  },
  6: {
    1: {
      questId: 'pf-l6-q1',
      gameId: 'promptforge',
      levelNumber: 6,
      difficultyMultiplier: 2.0,
      rules: [
        {
          type: 'minLength',
          condition: { min: 250 },
          errorMessage: 'Answer must be at least 250 characters'
        },
        {
          type: 'maxLength',
          condition: { max: 6000 },
          errorMessage: 'Answer must not exceed 6000 characters'
        }
      ]
    },
    2: {
      questId: 'pf-l6-q2',
      gameId: 'promptforge',
      levelNumber: 6,
      difficultyMultiplier: 2.0,
      rules: [
        {
          type: 'minLength',
          condition: { min: 300 },
          errorMessage: 'Answer must be at least 300 characters'
        },
        {
          type: 'containsKeywords',
          condition: { keywords: ['overlord', 'mastery', 'advanced'], matchAll: false },
          errorMessage: 'Answer should demonstrate mastery-level thinking'
        }
      ]
    },
    3: {
      questId: 'pf-l6-q3',
      gameId: 'promptforge',
      levelNumber: 6,
      difficultyMultiplier: 2.1,
      rules: [
        {
          type: 'minLength',
          condition: { min: 350 },
          errorMessage: 'Answer must be at least 350 characters'
        }
      ]
    }
  },
  7: {
    1: {
      questId: 'pf-l7-q1',
      gameId: 'promptforge',
      levelNumber: 7,
      difficultyMultiplier: 2.5,
      rules: [
        {
          type: 'minLength',
          condition: { min: 400 },
          errorMessage: 'Answer must be at least 400 characters - this is the Godmode realm'
        },
        {
          type: 'maxLength',
          condition: { max: 10000 },
          errorMessage: 'Answer must not exceed 10000 characters'
        }
      ]
    },
    2: {
      questId: 'pf-l7-q2',
      gameId: 'promptforge',
      levelNumber: 7,
      difficultyMultiplier: 2.5,
      rules: [
        {
          type: 'minLength',
          condition: { min: 450 },
          errorMessage: 'Answer must be at least 450 characters'
        },
        {
          type: 'containsKeywords',
          condition: { keywords: ['godmode', 'transcendent', 'ultimate'], matchAll: false },
          errorMessage: 'Answer must demonstrate transcendent understanding'
        }
      ]
    },
    3: {
      questId: 'pf-l7-q3',
      gameId: 'promptforge',
      levelNumber: 7,
      difficultyMultiplier: 2.6,
      rules: [
        {
          type: 'minLength',
          condition: { min: 500 },
          errorMessage: 'Answer must be at least 500 characters - the ultimate test'
        }
      ]
    }
  }
};

/**
 * Validate a quest submission against rule-based criteria
 * Returns { valid: boolean, score: number, feedback: string[] }
 */
export function validateQuestSubmission(
  answer: string,
  schema: QuestValidationSchema
): { valid: boolean; score: number; feedback: string[] } {
  const feedback: string[] = [];
  let passedRules = 0;

  for (const rule of schema.rules) {
    switch (rule.type) {
      case 'minLength':
        if (answer.length < rule.condition.min) {
          feedback.push(rule.errorMessage);
        } else {
          passedRules++;
        }
        break;

      case 'maxLength':
        if (answer.length > rule.condition.max) {
          feedback.push(rule.errorMessage);
        } else {
          passedRules++;
        }
        break;

      case 'containsKeywords': {
        const keywords = rule.condition.keywords as string[];
        const matchAll = rule.condition.matchAll ?? false;
        const lowerAnswer = answer.toLowerCase();

        if (matchAll) {
          const allPresent = keywords.every(kw => lowerAnswer.includes(kw.toLowerCase()));
          if (!allPresent) {
            feedback.push(rule.errorMessage);
          } else {
            passedRules++;
          }
        } else {
          const anyPresent = keywords.some(kw => lowerAnswer.includes(kw.toLowerCase()));
          if (!anyPresent) {
            feedback.push(rule.errorMessage);
          } else {
            passedRules++;
          }
        }
        break;
      }

      case 'excludesKeywords': {
        const keywords = rule.condition.keywords as string[];
        const lowerAnswer = answer.toLowerCase();
        const anyFound = keywords.some(kw => lowerAnswer.includes(kw.toLowerCase()));

        if (anyFound) {
          feedback.push(rule.errorMessage);
        } else {
          passedRules++;
        }
        break;
      }

      case 'regex': {
        const regex = new RegExp(rule.condition.pattern);
        if (!regex.test(answer)) {
          feedback.push(rule.errorMessage);
        } else {
          passedRules++;
        }
        break;
      }
    }
  }

  const valid = feedback.length === 0;
  const score = (passedRules / schema.rules.length) * 100;

  return { valid, score, feedback };
}

/**
 * Get validation schema for a specific quest
 */
export function getQuestValidationSchema(
  levelNumber: number,
  questNumber: number
): QuestValidationSchema | null {
  return PROMPTFORGE_SCHEMAS[levelNumber]?.[questNumber] || null;
}

/**
 * Calculate XP multiplier based on submission quality and difficulty
 */
export function calculateXPMultiplier(
  levelNumber: number,
  score: number,
  baseMultiplier: number = 1
): number {
  // Score-based multiplier: 100% score = 1.0x, 80% score = 0.8x, etc.
  const scoreMultiplier = Math.max(0.5, score / 100);

  // Difficulty scaling: level 1 = 1.0x, level 7 = 2.5x+
  const difficultyMultiplier = 1 + (levelNumber - 1) * 0.25;

  return scoreMultiplier * difficultyMultiplier * baseMultiplier;
}

/**
 * Check if answer quality is high enough (>= 80%)
 */
export function isHighQualitySubmission(score: number): boolean {
  return score >= 80;
}
