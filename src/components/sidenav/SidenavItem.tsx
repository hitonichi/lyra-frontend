'use client';

import React from 'react';
import { useState } from 'react';
import Icon from '../icon';

interface SideNavItemProps {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  /**
   * Customized wrapping element - by default a 'button'
   */
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  /**
   * Icon name, keep in mind that if the icon is not locally available, no icon will be rendered
   */
  icon?: string;
  onClick?: (a: React.BaseSyntheticEvent) => void;
  label?: string;
  selected?: boolean;
  expanded?: boolean;
  _index?: number;
  _groupLength?: number;
  _selectionkey?: string;
}

const SidenavItem = ({
  className,
  children,
  href,
  as,
  icon,
  onClick,
  label,
  selected,
  expanded,
  _index,
  _groupLength,
  _selectionkey,
}: SideNavItemProps) => {
  const twClasses =
    'flex items-center justify-start gap-2 max-h-[72px] pl-4 p-3 overflow-hidden rounded-l-[36px] rounded-r-lg font-medium hover:text-primary hover:bg-primary-foreground';
  const selectedTwClasses = 'text-primary bg-primary-foreground';

  const _isExpandable = !!children;
  const [_isExpanded, _setIsExpanded] = useState<boolean>();

  const _selected = !_isExpandable && selected;

  const _children = React.Children.map(children, (child, childId) => {
    return (
      React.isValidElement(child) &&
      (typeof child.type == 'string'
        ? child
        : React.cloneElement(child, {
            ...child.props,
            _index: childId as number,
            _selectionkey: _selectionkey,
          }))
    );
  });

  const _onClick = (e: React.BaseSyntheticEvent) => {
    if (_isExpandable) {
      _setIsExpanded(!_isExpanded);
    } else {
      onClick && onClick(e);
    }
  };

  let WrappingEle: React.ElementType | keyof JSX.IntrinsicElements = as || 'button';
  if (_isExpandable) WrappingEle = 'button';

  return (
    <li className={`list-none `}>
      <>
        <WrappingEle
          onClick={_onClick}
          href={!_isExpandable && href ? href : undefined}
          className={`${[twClasses, className].join(' ')} ${_selected ? selectedTwClasses : 'bg-white'}`}
        >
          <div className="min-w-[24px]">
            <Icon name={icon ?? ''} size={24} />
          </div>
          {label && <span className="whitespace-nowrap overflow-x-hidden max-w-[200px] text-ellipsis">{label}</span>}
          {_isExpandable && (
            // TODO: add proper icon
            <div>+</div>
          )}
        </WrappingEle>
      </>
      {_isExpandable && _children && (
        <section className={`${_isExpanded ? 'visible mt-2' : 'invisible'}`}>
          {/* {_children.map} */}
          <p>For children</p>
        </section>
      )}
    </li>
  );
};

export default SidenavItem;
