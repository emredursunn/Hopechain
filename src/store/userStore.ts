import {create} from 'zustand';

type UserState = {
  publicKey: string | null;
  setPublicKey: (key: string) => void;
  clearPublicKey: () => void;
  // Diğer kullanıcı bilgileri eklenebilir
};

export const useUserStore = create<UserState>((set) => ({
  publicKey: null,
  setPublicKey: (key) => set({ publicKey: key }),
  clearPublicKey: () => set({ publicKey: null }),
  // Diğer kullanıcı bilgilerinin yönetimi için fonksiyonlar eklenebilir
}));
