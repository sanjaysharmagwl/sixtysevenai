// Notification utilities
export function showNotification(message: string, type: 'success' | 'error' | 'info' = 'info') {
  // You can integrate with a toast library like react-hot-toast or create a custom notification system
  console.log(`[${type.toUpperCase()}]`, message);
  
  // Simple DOM-based notification for now
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

export function showError(error: string | Error) {
  const message = error instanceof Error ? error.message : error;
  showNotification(message, 'error');
}

export function showSuccess(message: string) {
  showNotification(message, 'success');
}

// Format XP numbers
export function formatXP(xp: number): string {
  if (xp >= 1000000) {
    return `${(xp / 1000000).toFixed(1)}M`;
  }
  if (xp >= 1000) {
    return `${(xp / 1000).toFixed(1)}K`;
  }
  return xp.toString();
}

// Calculate progress percentage
export function calculateProgress(current: number, target: number): number {
  return Math.min((current / target) * 100, 100);
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Format date
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Get rank color
export function getRankColor(rank: string): string {
  const rankColors: Record<string, string> = {
    'Novice': '#94a3b8',
    'Apprentice': '#60a5fa',
    'Journeyman': '#34d399',
    'Expert': '#fbbf24',
    'Master': '#f97316',
    'Grandmaster': '#ef4444',
    'Legend': '#a855f7',
    'Godmode': '#facc15',
  };
  return rankColors[rank] || '#94a3b8';
}

// Storage helpers
export const storage = {
  get: (key: string): string | null => {
    return localStorage.getItem(key);
  },
  
  set: (key: string, value: string): void => {
    localStorage.setItem(key, value);
  },
  
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
  
  clear: (): void => {
    localStorage.clear();
  },
};
