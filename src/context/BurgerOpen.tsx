"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

interface BurgerProviderContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const BurgerProviderContext = createContext({} as BurgerProviderContext);

const BurgerOpen = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  const defaultProps = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <BurgerProviderContext.Provider value={defaultProps}>
      {children}
    </BurgerProviderContext.Provider>
  );
};

export { BurgerOpen };
