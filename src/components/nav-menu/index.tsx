'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { cn, navTitleToSearchParam } from '@/lib/utils';
import React from 'react';
import { Separator } from '../ui/separator';

interface MenuLink {
  title: string;
  href?: string;
  description?: string;
}

const components: (MenuLink & { subLinks?: MenuLink[] })[] = [
  {
    title: 'Skin',
    href: '/listing?category=skin',
    subLinks: [
      {
        title: 'Cleanser',
        href: '/listing?category=cleanser',
      },
      {
        title: 'Toner',
        href: '/listing?category=toner',
      },
      {
        title: 'Serum',
        href: '/listing?category=serum',
      },
      {
        title: 'Eyes',
        href: '/listing?category=eyes',
      },
      {
        title: 'Lips',
        href: '/listing?category=lips',
      },
    ],
  },
  {
    title: 'Makeup',
    href: '/listing?category=makeup',
  },
  {
    title: 'Body',
    href: '/listing?category=body',
  },
  {
    title: 'Hair',
    href: '/listing?category=hair',
    subLinks: [
      {
        title: 'Cleanser',
        href: '/listing?category=cleanser',
      },
      {
        title: 'Toner',
        href: '/listing?category=toner',
      },
      {
        title: 'Serum',
        href: '/listing?category=serum',
      },
      {
        title: 'Eyes',
        href: '/listing?category=eyes',
      },
      {
        title: 'Lips',
        href: '/listing?category=lips',
      },
    ],
  },
  // {
  //   title: 'Tooltip',
  //   href: '/docs/primitives/tooltip',
  //   description:
  //     'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  // },
];

const ROUTE_PATH = '/listing';

const makeups: (MenuLink & { subLinks?: MenuLink[] })[] = [
  // {
  //   title: 'All Makeups',
  //   href: '/listing?category=makeup',
  // },
  {
    title: 'Eye',
    subLinks: [
      {
        title: 'Eye palletes',
      },
      {
        title: 'Mascara',
      },
      {
        title: 'Eyeliner',
      },
      {
        title: 'Eyebrow',
      },
    ],
  },
  {
    title: 'Lip',
    subLinks: [
      {
        title: 'Lip Gloss',
      },
      {
        title: 'Lipstick',
      },
      {
        title: 'Lip Oil',
      },
    ],
  },
  {
    title: 'Cheek',
    subLinks: [
      {
        title: 'Blush',
      },
      {
        title: 'Bronzer',
      },
      {
        title: 'Highlighter',
      },
      {
        title: 'Contour',
      },
      {
        title: 'Cheek Palettes',
      },
    ],
  },
];

const skincares: (MenuLink & { subLinks?: MenuLink[] })[] = [
  // {
  //   title: 'All Makeups',
  //   href: '/listing?category=makeup',
  // },
  {
    title: 'Moistrurizers',
    subLinks: [
      {
        title: 'Night Creams',
      },
      {
        title: 'Face Oils',
      },
      {
        title: 'Mists & Essences',
      },
    ],
  },
  {
    title: 'Cleansers',
    subLinks: [
      {
        title: 'Face Wash & Cleansers',
      },
      {
        title: 'Exfoliators',
      },
      {
        title: 'Makeup Remover',
      },
      {
        title: 'Face Wipes',
      },
      {
        title: 'Toners',
      },
    ],
  },
  {
    title: 'Treatments',
    subLinks: [
      {
        title: 'Face Serums',
      },
      {
        title: 'Blemish & Acne Treatments',
      },
      {
        title: 'Facial Peels',
      },
    ],
  },
  {
    title: 'Masks',
    subLinks: [
      {
        title: 'Face Masks',
      },
      {
        title: 'Sheet Masks',
      },
      {
        title: 'Eye Masks',
      },
    ],
  },
  {
    title: 'Eye Care',
    subLinks: [
      {
        title: 'Eye Creams & Treatments',
      },
      {
        title: 'Eye Masks',
      },
    ],
  },
  {
    title: 'Sunscreen',
    subLinks: [
      {
        title: 'Face Suncreen',
      },
      {
        title: 'Body Sunscreen',
      },
    ],
  },
];

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* ! Low priority */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and paste into your apps. Accessible.
                      Customizable. Open Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <LinkGroup title="Makeup" components={makeups} />
        <LinkGroup title="Skincare" components={skincares} />
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact Us</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const LinkGroup = ({ title, components }: { title: string; components: (MenuLink & { subLinks?: MenuLink[] })[] }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[700px] max-h-[480px] overflow-y-auto">
        {components.map((component) => (
          <ListItem
            key={component.title}
            title={component.title}
            href={component.href ? component.href : `${ROUTE_PATH}?category=${navTitleToSearchParam(component.title)}`}
          >
            {/* {component.description} */}
            {component.subLinks?.map(({ title, href }) => (
              <Link
                className="self-center"
                href={href ? href : `${ROUTE_PATH}?category=${navTitleToSearchParam(title)}`}
                legacyBehavior
                passHref
                key={href}
              >
                <NavigationMenuLink
                  className={[
                    // navigationMenuTriggerStyle(),
                    'flex-1 !w-full !items-start !justify-start py-1 px-2 hover:underline',
                  ].join(' ')}
                >
                  {title}
                </NavigationMenuLink>
              </Link>
            ))}
          </ListItem>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild className="!hover:bg-red-100">
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="pl-2 text-xl font-bold leading-none">{title}</div>
            <Separator />
            <div className="flex flex-col gap-4 mt-4 w-full ">{children}</div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p> */}
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';

export default NavMenu;
