import React, { useState } from "react";

export const HoverContext = React.createContext({
  isHover: false,
  setIsHover: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});

export const HoverProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <HoverContext.Provider value={{ isHover, setIsHover }}>
      {children}
    </HoverContext.Provider>
  );
};
