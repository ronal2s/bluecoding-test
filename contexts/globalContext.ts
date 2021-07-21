import { createContext } from "react";

export type GlobalContextContentProps = {
  user?: any;
  isLogged?: boolean;
};

export type GlobalContextProps = {
  content: GlobalContextContentProps;
  setContent: React.Dispatch<React.SetStateAction<GlobalContextContentProps>>;
};

export const GlobalContext = createContext<GlobalContextProps | null>(null);
