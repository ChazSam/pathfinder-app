import React,{ createContext, useContext, useState } from "react";

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {

    const [createCharacter, setCreateCharacter] = useState({
    name: '',
    ancestry: '',
    characterClass: '',
    background: '',
  });

  return (
    <StateContext.Provider value={{ createCharacter, setCreateCharacter }}>
      {children}
    </StateContext.Provider>
  );
};