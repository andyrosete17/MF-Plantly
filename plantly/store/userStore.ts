import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
type UserStoreState = {
  hasFinishedOnboarding: boolean;
};

export interface UserStore extends UserStoreState {
  toggleHadOnboarding: () => void;
}

export const useUserStore = create(
  devtools(
    persist<UserStore>(
      set => ({
        hasFinishedOnboarding: false,
        toggleHadOnboarding: () =>
          set(state => {
            console.log('toggleHadOnboarding called');
            return {
              ...state,
              hasFinishedOnboarding: !state.hasFinishedOnboarding
            };
          })
      }),
      {
        name: 'plantly-user-store',
        storage: createJSONStorage(() => AsyncStorage)
      }
    )
  )
);
