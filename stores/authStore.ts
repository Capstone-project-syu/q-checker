import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  loginType: "google" | "kakao" | null;
  login: (
    accessToken: string,
    refreshToken: string,
    loginType: "google" | "kakao"
  ) => void;
  logout: () => void;
  updateTokens: (accessToken: string, refreshToken?: string) => void;
}

// SecureStore를 위한 커스텀 스토리지
const secureStorage = {
  getItem: async (name: string): Promise<string | null> => {
    try {
      return await SecureStore.getItemAsync(name);
    } catch (error) {
      console.error("SecureStore getItem error:", error);
      return null;
    }
  },
  setItem: async (name: string, value: string): Promise<void> => {
    try {
      await SecureStore.setItemAsync(name, value);
    } catch (error) {
      console.error("SecureStore setItem error:", error);
    }
  },
  removeItem: async (name: string): Promise<void> => {
    try {
      await SecureStore.deleteItemAsync(name);
    } catch (error) {
      console.error("SecureStore removeItem error:", error);
    }
  },
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      loginType: null,

      login: (
        accessToken: string,
        refreshToken: string,
        loginType: "google" | "kakao"
      ) => {
        set({
          isAuthenticated: true,
          accessToken,
          refreshToken,
          loginType,
        });
      },

      logout: () => {
        set({
          isAuthenticated: false,
          accessToken: null,
          refreshToken: null,
          loginType: null,
        });
      },

      updateTokens: (accessToken: string, refreshToken?: string) => {
        set((state) => ({
          accessToken,
          refreshToken: refreshToken || state.refreshToken,
        }));
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        loginType: state.loginType,
      }),
    }
  )
);
