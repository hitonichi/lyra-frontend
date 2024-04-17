import React from 'react';

export type SidenavContextStateType = { selected: string | undefined };
type SideNavContextType =
  | {
      sidenavState: SidenavContextStateType;
      setSidenavState: (prevState: SidenavContextStateType) => void;
    }
  | undefined;

export const SideNavContext = React.createContext<SideNavContextType>(undefined);
export const useSidenavContext = () => React.useContext(SideNavContext);
