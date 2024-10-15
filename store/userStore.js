// useAuthTokenStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: "", // 초기값을 빈 문자열로 설정
      
      // 사용자 정보를 설정하는 함수
      setUser: (userData) => set({ user: userData }),

      // 사용자 정보를 초기화하는 함수 (로그아웃 시 사용)
      clearUser: () => set({ user: "" }),
    }),
    {
      name: 'userState',
      storage: createJSONStorage(() => localStorage), // 클라이언트 측에서만 localStorage 사용
    }
  )
);

export { useUserStore };