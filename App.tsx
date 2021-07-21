import React, { useState } from "react";
import { GlobalContext, GlobalContextProps } from "./contexts/globalContext";
import NavigationContent from "./screens/navigation/navigation";

export default function App() {
  const setContent = (object: any) => {
    setContext({ ...context, content: { ...object } });
  };
  const [context, setContext] = useState<GlobalContextProps>({
    content: {
      isLogged: false,
      user: null,
    },
    setContent,
  });
  return (
    <GlobalContext.Provider value={{ ...context, setContent }}>
      <NavigationContent />
    </GlobalContext.Provider>
  );
}
