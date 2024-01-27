"use client";

import React, { useContext, useState, useEffect } from "react";

type TogglerContextType = {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  showAnswer: {
    q1: boolean;
    q2: boolean;
    q3: boolean;
    q4: boolean;
    q5: boolean;
  };
  setShowAnswer: React.Dispatch<
    React.SetStateAction<{
      q1: boolean;
      q2: boolean;
      q3: boolean;
      q4: boolean;
      q5: boolean;
    }>
  >;
};

const TogglerContext = React.createContext<TogglerContextType>({
  mobileNavbar: false,
  setMobileNavbar: () => {},
  showAnswer: { q1: false, q2: false, q3: false, q4: false, q5: false },
  setShowAnswer: () => {},
});

export const useTogglerContext = () => useContext(TogglerContext);

export const TogglerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [showAnswer, setShowAnswer] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
  });

  useEffect(() => {
    document.body.style.overflowY = mobileNavbar ? "hidden" : "auto";
  }, [mobileNavbar]);

  return (
    <TogglerContext.Provider
      value={{
        mobileNavbar,
        setMobileNavbar,
        showAnswer,
        setShowAnswer,
      }}
    >
      {children}
    </TogglerContext.Provider>
  );
};
