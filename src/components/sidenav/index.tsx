'use client';

import React from 'react';
import { SideNavContext, SidenavContextStateType } from '@/contexts/SideNavContext';
import { useState } from 'react';
import SidenavItem from './SidenavItem';
import SideNavHeader from './SidenavHeader';
import SideNavFooter from './SidenavFooter';

interface SideNavProps {
  className?: string;
  children?: React.ReactNode;
}

const DEFAULT_SIDENAV_CONTEXT_STATE: SidenavContextStateType = {
  selected: undefined,
};

/**
 * Use to clone & add new internal props to children
 */
export const decorateChildren = (children: React.ReactNode, i?: number): React.ReactNode => {
  return React.Children.map(children, (child, childId) => {
    const _i = Number.isInteger(i) ? i : childId;

    if (React.isValidElement(child)) {
      // if (typeof child.type == 'string')
      //   return child

      // In case of React.Fragment
      if (child.type == React.Fragment) return decorateChildren(child.props.children, _i);

      return React.cloneElement(child, {
        ...child.props,
        _idx: _i,
        _selectionkey: (_i as number).toString(10),
      });
    }
  });
};

const SideNav = ({ className, children }: SideNavProps) => {
  const [sidenavState, setSidenavState] = useState(DEFAULT_SIDENAV_CONTEXT_STATE);

  const _children = decorateChildren(children);

  return (
    <SideNavContext.Provider value={{ sidenavState, setSidenavState }}>
      <nav className="h-full p-4 pl-3 flex flex-col justify-between gap-2">{_children}</nav>
    </SideNavContext.Provider>
  );
};

SideNav.Item = SidenavItem;
SideNav.Header = SideNavHeader;
SideNav.Footer = SideNavFooter;

export default SideNav;
