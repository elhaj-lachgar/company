import { createContext, useContext, useState } from "react";

type TDirectionContext = {
  dir: "rtl" | "ltr";
  setDir: (dir: "rtl" | "ltr") => void;
};

const DirectionContext = createContext<TDirectionContext>({
  dir: "rtl",
  setDir: () => {},
});

function DirectionContextProvider({ children }: { children: React.ReactNode }) {
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");
  return (
    <DirectionContext.Provider value={{ dir, setDir }}>
      {children}
    </DirectionContext.Provider>
  );
}

export default DirectionContextProvider;



export const useDirectionContext = () => {
    return useContext(DirectionContext);
}