import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function navTitleToSearchParam(title: string) {
  return title.toLowerCase().replace(/(( & )| )/g, '-');
}
