import { create } from "zustand";
import { User } from "../types";

type UserStore = {
  user: User;
  setUser: (user: User) => void;
};
export const useUserStore = create<UserStore>((set) => ({
  user: {
    avatar: "",
    name: "",
    email: "",
    id: "",
  },
  setUser: ({ id, name, email, avatar }) => {
    set({ user: { id, name, email, avatar } });
  },
}));
