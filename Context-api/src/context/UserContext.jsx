import React, { createContext } from "react";
export const userDataContext = createContext();
// 1st step is context create krna using createContext()

const UserContext = ({ children }) => {
  console.log(children);
  const user = "Chinu"
  return <userDataContext.Provider  value={user} >
    {/* second step is context provide krna */}
    {children}</userDataContext.Provider>;
};

export default UserContext;
