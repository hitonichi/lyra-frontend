import ProductFilter from './productFilter';
import ProductList from './productList';

export default function ProductsPage() {
  return (
    <div className="w-full min-h-[100vh] px-20 py-8 grid grid-cols-12 gap-5">
      <div className="col-span-2">
        <ProductFilter />
      </div>
      <div className="col-span-10">
        <ProductList />
      </div>
    </div>
  );
}
