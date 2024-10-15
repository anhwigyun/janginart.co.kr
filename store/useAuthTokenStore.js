// useAuthTokenStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useAuthTokenStore = create(
  persist(
    (set) => ({
      accessToken: "",
      setAccessToken: (token) => set({ accessToken: token }),
    }),
    {
      name: 'authTokenState',
      storage: createJSONStorage(() => localStorage), // 클라이언트 측에서만 localStorage 사용
    }
  )
);

export { useAuthTokenStore };