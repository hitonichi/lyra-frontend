declare global {
  export interface ProductData {
    _id: string;
    productName: string;
    description: string;
    price: number;
    quantity: number;
    category: ProductCategory[];
  }

  export interface ProductCategory {
    name: string;
  }
}

export {};
