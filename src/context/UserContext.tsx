import { createContext, ReactNode, useState } from "react";

type UserContextType = {
  filterNutritions: string;
  setFilterNutritions: (newState: string) => void;
};

const initialValue: UserContextType = {
  filterNutritions: "all",
  setFilterNutritions: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [filterNutritions, setFilterNutritions] = useState(
    initialValue.filterNutritions
  );

  return (
    <UserContext.Provider value={{ filterNutritions, setFilterNutritions }}>
      {children}
    </UserContext.Provider>
  );
};
