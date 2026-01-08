import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { questsAPI } from '../lib/api';
import { showError, showSuccess, formatXP } from '../lib/utils';
import './Level.css';

interface Quest {
  number: number;
  title: string;
  description: string;
  hint?: string;
}

interface QuestStatus {
  submitted: boolean;
  validated: boolean;
  score?: number;
  feedback?: string[];
  xpAwarded?: number;
}

export function Level() {
  const { levelNumber } = useParams<{ levelNumber: string }>();
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  
  const [quests, setQuests] = useState<Quest[]>([]);
  const [questStatuses, setQuestStatuses] = useState<Map<number, QuestStatus>>(new Map());
  const [questAnswers, setQuestAnswers] = useState<Map<number, string>>(new Map());
  const [loading, setLoading] = useState<Map<number, boolean>>(new Map());
  const [levelProgress, setLevelProgress] = useState<any>(null);
  const [miniBossLoading, setMiniBossLoading] = useState(false);
  const [finalBossLoading, setFinalBossLoading] = useState(false);

  const level = parseInt(levelNumber || '1');

  useEffect(() => {
    loadLevelData();
    loadProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  const loadLevelData = () => {
    // Define quests for each level
    const levelQuests: Record<number, Quest[]> = {
      1: [
        {
          number: 1,
          title: 'Basic Prompt Structure',
          description: 'Write a prompt that asks an AI to explain quantum computing to a 10-year-old.',
          hint: 'Include context about the audience and desired output style.',
        },
        {
          number: 2,
          title: 'Specificity Matters',
          description: 'Create a prompt for generating a marketing email about a new fitness app.',
          hint: 'Specify tone, length, and key points to include.',
        },
        {
          number: 3,
          title: 'Role Assignment',
          description: 'Write a prompt where you assign the AI a specific role or persona.',
          hint: 'Try "You are a..." followed by a clear task.',
        },
      ],
      2: [
        {
          number: 1,
          title: 'Few-Shot Learning',
          description: 'Create a prompt with 2-3 examples showing the AI what format you want.',
          hint: 'Provide examples then ask for a similar output.',
        },
        {
          number: 2,
          title: 'Chain of Thought',
          description: 'Write a prompt that asks the AI to show its reasoning step-by-step.',
          hint: 'Ask the AI to "think through" or "explain its reasoning".',
        },
        {
          number: 3,
          title: 'Constraint Handling',
          description: 'Create a prompt with specific constraints (word count, format, style).',
          hint: 'Be explicit about limitations and requirements.',
        },
      ],
      3: [
        {
          number: 1,
          title: 'Context Window Optimization',
          description: 'Write an efficient prompt that provides necessary context without wasting tokens.',
          hint: 'Be concise but complete.',
        },
        {
          number: 2,
          title: 'Multi-Step Instructions',
          description: 'Create a prompt with multiple sequential steps.',
          hint: 'Number or bullet your instructions clearly.',
        },
        {
          number: 3,
          title: 'Output Format Control',
          description: 'Write a prompt that specifies exact output format (JSON, table, bullet points).',
          hint: 'Show an example of the format you want.',
        },
      ],
      4: [
        {
          number: 1,
          title: 'Advanced Role Play',
          description: 'Create a complex prompt where the AI takes on multiple personas in a conversation.',
          hint: 'Define each role and their interaction.',
        },
        {
          number: 2,
          title: 'Prompt Chaining',
          description: 'Write a series of connected prompts where each builds on the previous.',
          hint: 'Show how outputs flow from one to the next.',
        },
        {
          number: 3,
          title: 'Error Handling',
          description: 'Create a prompt that anticipates and handles potential AI misunderstandings.',
          hint: 'Include clarifications and edge cases.',
        },
      ],
      5: [
        {
          number: 1,
          title: 'Meta-Prompting',
          description: 'Write a prompt that asks the AI to help you improve a prompt.',
          hint: 'Provide a sample prompt and ask for optimization.',
        },
        {
          number: 2,
          title: 'Adversarial Testing',
          description: 'Create a prompt designed to test the AI\'s boundaries and capabilities.',
          hint: 'Ask challenging or edge-case questions.',
        },
        {
          number: 3,
          title: 'Domain Expertise Simulation',
          description: 'Write a prompt that requires deep domain knowledge in a specific field.',
          hint: 'Provide context and ask for expert-level output.',
        },
      ],
      6: [
        {
          number: 1,
          title: 'Prompt Engineering Patterns',
          description: 'Demonstrate understanding of common prompt engineering patterns.',
          hint: 'Use techniques like RISEN, CRAFT, or similar frameworks.',
        },
        {
          number: 2,
          title: 'System Design with AI',
          description: 'Create a comprehensive prompt for designing a complex system.',
          hint: 'Break down the architecture and requirements.',
        },
        {
          number: 3,
          title: 'Evaluation Criteria',
          description: 'Write a prompt that includes clear evaluation metrics for the output.',
          hint: 'Define what "good" looks like.',
        },
      ],
      7: [
        {
          number: 1,
          title: 'Ascension Trial: Prompt Masterpiece',
          description: 'Create the most sophisticated, well-crafted prompt you can imagine.',
          hint: 'This is your final test. Show everything you\'ve learned.',
        },
        {
          number: 2,
          title: 'Ascension Trial: Innovation',
          description: 'Invent a completely new prompting technique or pattern.',
          hint: 'Think outside the box. Create something unique.',
        },
        {
          number: 3,
          title: 'Ascension Trial: Teaching',
          description: 'Write a meta-prompt that teaches someone else how to prompt effectively.',
          hint: 'Share your knowledge. Guide others on the path.',
        },
      ],
    };

    setQuests(levelQuests[level] || []);
  };

  const loadProgress = async () => {
    try {
      const progress = await questsAPI.getLevelProgress(user!.id, level);
      setLevelProgress(progress);
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  };

  const handleAnswerChange = (questNumber: number, value: string) => {
    setQuestAnswers(new Map(questAnswers.set(questNumber, value)));
  };

  const submitQuest = async (questNumber: number) => {
    const answer = questAnswers.get(questNumber);
    if (!answer || answer.trim().length < 10) {
      showError('Please provide a more detailed answer (at least 10 characters)');
      return;
    }

    setLoading(new Map(loading.set(questNumber, true)));

    try {
      // Submit quest
      const submitResponse = await questsAPI.submit({
        userId: user!.id,
        gameId: 'promptforge',
        levelNumber: level,
        questNumber,
        answer,
      });

      if (submitResponse.validation.valid) {
        // Validate for XP
        const validateResponse = await questsAPI.validate(
          submitResponse.submission.id
        );

        if (validateResponse.success) {
          setQuestStatuses(
            new Map(
              questStatuses.set(questNumber, {
                submitted: true,
                validated: true,
                score: submitResponse.validation.score,
                feedback: submitResponse.validation.feedback,
                xpAwarded: validateResponse.xpAwarded,
              })
            )
          );

          // Update user data
          updateUser({
            total_xp: validateResponse.user.total_xp,
            current_rank: validateResponse.user.current_rank,
          });

          showSuccess(
            `Quest ${questNumber} complete! +${validateResponse.xpAwarded} XP`
          );

          if (validateResponse.rankedUp) {
            showSuccess(`🎉 Rank up to ${validateResponse.newRank}!`);
          }

          // Reload progress
          loadProgress();
        }
      } else {
        setQuestStatuses(
          new Map(
            questStatuses.set(questNumber, {
              submitted: true,
              validated: false,
              score: submitResponse.validation.score,
              feedback: submitResponse.validation.feedback,
            })
          )
        );
        showError('Quest needs improvement. Check the feedback.');
      }
    } catch (error) {
      showError('Failed to submit quest');
      console.error(error);
    } finally {
      setLoading(new Map(loading.set(questNumber, false)));
    }
  };

  const attemptMiniBoss = async () => {
    if (levelProgress?.completedQuests < 3) {
      showError('Complete all 3 quests first!');
      return;
    }

    setMiniBossLoading(true);
    try {
      const response = await questsAPI.submitMiniBoss(user!.id, level);
      if (response.success) {
        showSuccess(`Mini-boss defeated! +${response.xpAwarded} XP`);
        updateUser({ total_xp: response.totalXP });
        loadProgress();
      }
    } catch (error) {
      showError('Mini-boss challenge failed');
    } finally {
      setMiniBossLoading(false);
    }
  };

  const attemptFinalBoss = async () => {
    if (!levelProgress?.miniBossCompleted) {
      showError('Defeat the mini-boss first!');
      return;
    }

    setFinalBossLoading(true);
    try {
      const response = await questsAPI.submitFinalBoss(user!.id, level);
      if (response.success) {
        showSuccess(`Final boss defeated! +${response.xpAwarded} XP`);
        updateUser({ total_xp: response.totalXP });
        
        if (level < 7) {
          setTimeout(() => navigate(`/level/${level + 1}`), 2000);
        } else {
          showSuccess('🎉 Godmode achieved! You are a master of prompting!');
          setTimeout(() => navigate('/game-hub'), 2000);
        }
      }
    } catch (error) {
      showError('Final boss challenge failed');
    } finally {
      setFinalBossLoading(false);
    }
  };

  return (
    <div className="level-container">
      <header className="level-header">
        <Link to="/game-hub" className="back-button">
          ← Back to Hub
        </Link>
        <h1>Level {level}</h1>
        <div className="level-stats">
          <span>{user?.name}</span>
          <span className="rank">{user?.current_rank}</span>
          <span className="xp">{formatXP(user?.total_xp || 0)} XP</span>
        </div>
      </header>

      <div className="level-content">
        {level === 7 && (
          <div className="godmode-intro">
            <h2>🏆 Godmode Gate: Ascension Trials</h2>
            <p>
              You have reached the final challenge. Complete these three ascension
              trials to prove your mastery and achieve Godmode status.
            </p>
          </div>
        )}

        {/* Quests */}
        <div className="quests-section">
          {quests.map((quest) => {
            const status = questStatuses.get(quest.number);
            const isLoading = loading.get(quest.number);

            return (
              <div
                key={quest.number}
                className={`quest-card ${status?.validated ? 'completed' : ''}`}
              >
                <div className="quest-header">
                  <h3>
                    Quest {quest.number}: {quest.title}
                  </h3>
                  {status?.validated && <span className="check-mark">✓</span>}
                </div>

                <p className="quest-description">{quest.description}</p>

                {quest.hint && (
                  <p className="quest-hint">💡 Hint: {quest.hint}</p>
                )}

                <textarea
                  className="quest-input"
                  value={questAnswers.get(quest.number) || ''}
                  onChange={(e) =>
                    handleAnswerChange(quest.number, e.target.value)
                  }
                  placeholder="Enter your answer here..."
                  rows={6}
                  disabled={status?.validated}
                />

                {status?.feedback && status.feedback.length > 0 && (
                  <div
                    className={`feedback ${
                      status.validated ? 'success' : 'error'
                    }`}
                  >
                    <h4>{status.validated ? '✓ Accepted' : '✗ Needs Improvement'}</h4>
                    {status.score !== undefined && (
                      <p>Score: {status.score.toFixed(0)}%</p>
                    )}
                    <ul>
                      {status.feedback.map((fb, idx) => (
                        <li key={idx}>{fb}</li>
                      ))}
                    </ul>
                    {status.xpAwarded && (
                      <p className="xp-awarded">+{status.xpAwarded} XP</p>
                    )}
                  </div>
                )}

                <button
                  onClick={() => submitQuest(quest.number)}
                  className="btn btn-primary"
                  disabled={isLoading || status?.validated}
                >
                  {isLoading ? 'Submitting...' : status?.validated ? 'Completed' : 'Submit Quest'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Boss Challenges */}
        <div className="boss-section">
          <div className="boss-card">
            <h3>⚔️ Mini-Boss Challenge</h3>
            <p>Complete all 3 quests to unlock this challenge.</p>
            <button
              onClick={attemptMiniBoss}
              className="btn btn-secondary"
              disabled={
                miniBossLoading ||
                levelProgress?.completedQuests < 3 ||
                levelProgress?.miniBossCompleted
              }
            >
              {miniBossLoading
                ? 'Fighting...'
                : levelProgress?.miniBossCompleted
                ? 'Defeated ✓'
                : 'Attempt Mini-Boss'}
            </button>
          </div>

          <div className="boss-card">
            <h3>👑 Final Boss Challenge</h3>
            <p>Defeat the mini-boss to unlock the final challenge.</p>
            <button
              onClick={attemptFinalBoss}
              className="btn btn-secondary"
              disabled={
                finalBossLoading ||
                !levelProgress?.miniBossCompleted ||
                levelProgress?.finalBossCompleted
              }
            >
              {finalBossLoading
                ? 'Fighting...'
                : levelProgress?.finalBossCompleted
                ? 'Defeated ✓'
                : 'Attempt Final Boss'}
            </button>
          </div>
        </div>

        {/* Navigation */}
        {levelProgress?.finalBossCompleted && level < 7 && (
          <div className="level-complete">
            <h2>🎉 Level {level} Complete!</h2>
            <Link to={`/level/${level + 1}`} className="btn btn-primary">
              Continue to Level {level + 1}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
