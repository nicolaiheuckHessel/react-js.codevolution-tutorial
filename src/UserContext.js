import { createContext } from "react";

const UserContext = createContext("bob");
const UserProvider = UserContext.Provider;

export { UserContext, UserProvider }