"use client";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [price, setPrice] = useState(0);
  // console.log("🚀 ~ UserProvider ~ price:", price)

  return (
    <UserContext.Provider value={{ price, setPrice }}>
      {children}
    </UserContext.Provider>
  );
};
