import { savingsGoals } from '../data/savingsData'

export function getSavingsGoals() {
  return savingsGoals
}

// Placeholder service. Nanti fungsi ini bisa diganti menjadi POST ke backend.
export function createSavingsGoal(goal) {
  return {
    ...goal,
    id: crypto.randomUUID(),
    gradient: 'saving-gradient-1',
    icon: goal.icon || 'ti-target-arrow',
    shadow: 'shadow-green-900/20',
    target: Number(goal.target || 0),
    collected: Number(goal.collected || 0),
  }
}
