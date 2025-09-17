import { create } from 'zustand';

type QRData = {
  id: string;
  title: string;
  date: string;
  active: boolean;
};

type QRStore = {
  history: QRData[];
  addQR: (data: QRData) => void;
};

export const useQRStore = create<QRStore>((set) => ({
  history: [],
  addQR: (data) =>
    set((state) => ({
      history: [data, ...state.history], // 최신순 정렬
    })),
}));