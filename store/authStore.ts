import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () =>
        set({
          isLoggedIn: true,
        }),
      logout: () =>
        set({
          isLoggedIn: false,
        }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);
