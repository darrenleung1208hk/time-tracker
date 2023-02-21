import React from "react";

export type User = {
  uid: string;
  name: string | null;
  avatar: string | null;
};

export type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  logInGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
};

export type AuthProviderProps = { children: React.ReactNode };
