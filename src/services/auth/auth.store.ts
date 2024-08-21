import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createSelectors } from '../../lib/zustand.utils';
import type { Auth } from './auth.types';

type AuthStore = {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
};

const useAuthStoreBase = create<AuthStore>()(
  // persist state in local storage: https://docs.pmnd.rs/zustand/integrations/persisting-store-data
  persist(
    (set) => ({
      auth: null,
      setAuth: (auth) => set({ auth }),
    }),
    {
      name: import.meta.env.VITE_AUTH_STORAGE_KEY ?? 'auth-storage',
    },
  ),
);

// generate selectors for zustand store: https://docs.pmnd.rs/zustand/guides/auto-generating-selectors
export const useAuthStore = createSelectors(useAuthStoreBase);
