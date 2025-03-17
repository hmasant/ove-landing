import { useState, createContext, useContext, useEffect } from "react";

// Context created here with default values
const Context = createContext({ showPopup: false, togglePopup: () => {} });

// Context provider created below
export function ContextProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  // Create update function
  const togglePopup = () => setShowPopup(!showPopup);

  useEffect(() => {
    window.onbeforeunload = () => {
      return "";
    };
  }, []);

  const contextValue = { showPopup, togglePopup };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

// Custom hook to update context data
export function UpdateContext() {
  const { togglePopup } = useContext(Context);
  return { togglePopup };
}

// Custom hook to read context data
export function ReadContext() {
  const { showPopup } = useContext(Context);
  return { showPopup };
}
