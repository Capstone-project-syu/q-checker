import { create } from 'zustand';

type AuthState = {
  isLoggedIn: boolean;
  name: string;
  studentId: string;
  login: (name: string, studentId: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: false,
    name: '',
    studentId: '',
    login: (name, studentId) =>
      set({
        isLoggedIn: true,
        name,
        studentId,
      }),
    logout: () =>
      set({
        isLoggedIn: false,
        name: '',
        studentId: '',
      }),
    updateProfile: (name, studentId) =>
      set({
        name,
        studentId,
      }),
  }));
  