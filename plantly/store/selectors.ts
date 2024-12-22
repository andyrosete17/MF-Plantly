import type { UserStore } from './userStore';

export const hasFinishedOnboardingSelector = (state: UserStore) =>
  state.hasFinishedOnboarding;

export const userActionsSelector = (state: UserStore) => state.toggleHadOnboarding;
