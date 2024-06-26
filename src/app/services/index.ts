import { auth } from '@/auth';

export const BE_ENDPOINT = process.env.BE_ENDPOINT || 'https://cosmetic-backend.vercel.app';

export class ApiResponse<T> {
  public status: number;
  public data: T;
  public info?: T;

  constructor(status: number, data: T, info?: T) {
    this.status = status;
    this.data = data;
    this.info = info;
  }
}

export class ApiError extends Error {
  public status: number;
  public info: any;

  constructor(status: number, info?: any) {
    super(info);
    this.status = status;
    this.info = info;
  }
}

export type ApiHeaders = {
  Authorization?: string | undefined;
};

export const buildHeaders = async () => {
  const headers: ApiHeaders = {};
  const session = await auth();
  console.log('GETTING SESSION', session);
  headers['Authorization'] = `Bearer ${session?.user?.access_token}`;

  return headers;
};

export async function getProducts(searchParams?: URLSearchParams): Promise<ProductData[] | ApiError> {
  // const headers = await buildHeaders();
  console.log('[GET PROD] params', searchParams, searchParams?.toString());
  const response: any = await fetch(`https://cosmetic-backend.vercel.app/product?${searchParams?.toString()}`);
  console.log('[PRODUCTS] check res', response);
  if (!response.ok) {
    const error = await response.json();
    console.log('[RQ] res not ok', error);
    throw new ApiError(response.status, error);
  }
  const resData = await response.json();
  console.log('[PRODUCTS] check resData', resData);
  if (resData.errors) {
    console.log('[RQ] resData not ok');
    throw new ApiError(response.status, resData.errors);
  }
  console.log('[RQ] looks ok');
  return resData;
}

interface ProductDetails {
  productId: string;
}

export async function getProductDetails({
  productId,
}: ProductDetails): Promise<{ productDetail: ProductData } | ApiError> {
  // const headers = await buildHeaders();
  const response: any = await fetch(`https://cosmetic-backend.vercel.app/product/${productId}`);
  console.log('[PRODUCTS] check res', response);
  if (!response.ok) {
    const error = await response.json();
    console.log('[RQ] res not ok', error);
    throw new ApiError(response.status, error);
  }
  const resData = await response.json();
  console.log('[PRODUCTS] check resData', resData);
  if (resData.errors) {
    console.log('[RQ] resData not ok');
    throw new ApiError(response.status, resData.errors);
  }
  console.log('[RQ] looks ok');
  return resData;
}

export async function getTodos(): Promise<ApiResponse<any> | ApiError> {
  const response: any = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    const error = await response.json();
    console.log('[RQ] res not ok', error);
    throw new ApiError(response.status, error);
  }
  const resData = await response.json();
  if (resData.errors) {
    console.log('[RQ] resData not ok');
    throw new ApiError(response.status, resData.errors);
  }
  console.log('[RQ] looks ok');
  return resData;
}

export const getCart = async () => {
  const headers = await buildHeaders();
  console.log('[GET CART] check headers', headers);
  const response = await fetch('https://cosmetic-backend.vercel.app/cart', {
    headers,
  });
  return response.json();
};
