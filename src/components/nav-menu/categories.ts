export interface MenuLink {
  title: string;
  href?: string;
  description?: string;
}

export const ROUTE_PATH = '/products';

export const MAKEUPS_ROUTES: (MenuLink & { subLinks?: MenuLink[] })[] = [
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

export const SKINCARES_ROUTES: (MenuLink & { subLinks?: MenuLink[] })[] = [
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
