// store/useStore.ts
import { create } from 'zustand';

interface State {
  backgroundColor: string;
  setRandomBackgroundColor: () => void;
}

export const useStore = create<State>((set) => ({
  backgroundColor: '#fff', 
  setRandomBackgroundColor: () => set(() => ({
    backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
  })),
}));
