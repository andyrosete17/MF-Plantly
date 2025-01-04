import { hasFinishedOnboardingSelector, userActionsSelector } from './selectors';
import { useUserStore } from './userStore';

export const useHasFinishedOnboarding = () => useUserStore(hasFinishedOnboardingSelector);
export const useUserActions = () => useUserStore(userActionsSelector);
