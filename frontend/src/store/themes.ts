import { create } from "zustand";

interface ThemeState {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  isDarkTheme: false,
  toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
}));

export default useThemeStore;
