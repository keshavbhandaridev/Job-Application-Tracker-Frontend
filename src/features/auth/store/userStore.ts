import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

// SafeStorage wrapper to handle localStorage errors
const safeLocalStorage = {
  setItem: (name: string, value: string) => {
    try {
      localStorage.setItem(name, value);
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  },
  getItem: (name: string) => {
    try {
      return localStorage.getItem(name);
    } catch (error) {
      console.error("Failed to get from localStorage:", error);
      return null;
    }
  },
  removeItem: (name: string) => {
    try {
      localStorage.removeItem(name);
    } catch (error) {
      console.error("Failed to remove from localStorage:", error);
    }
  },
};

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => safeLocalStorage),
    }
  )
);

export default useUserStore;
