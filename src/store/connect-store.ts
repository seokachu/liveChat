import { ConnectState } from "@/types";
import { Socket } from "socket.io-client";
import { create } from "zustand";

const useConnectStore = create<ConnectState>((set) => ({
  nickname: "",
  socket: null,
  isConnect: false,
  message: "",

  actions: {
    setNickname: (nickname: string) => set({ nickname }),
    setSocket: (socket: Socket | null) => set({ socket }),
    setIsConnect: (isConnect: boolean) => set({ isConnect }),
  },
}));

export const useNickname = () => useConnectStore((state) => state.nickname);
export const useSocket = () => useConnectStore((state) => state.socket);
export const useIsConnect = () => useConnectStore((state) => state.isConnect);

export const useConnectActions = () =>
  useConnectStore((state) => state.actions);
