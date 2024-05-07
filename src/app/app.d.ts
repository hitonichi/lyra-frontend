declare global {
  export interface ProductData {
    _id: string;
    overallRating: number;
    productName: string;
    description: string;
    price: number;
    quantity: number;
    category: ProductCategory[];
    images?: string[];
  }

  export interface ProductCategory {
    name: string;
  }

  export interface Cart {
    products: (ProductData & { quantity: number })[];
  }
}

export {};
