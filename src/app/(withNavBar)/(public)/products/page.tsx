import ProductFilter from './productFilter';

export default function ProductsPage() {
  return (
    <div className="w-full min-h-[100vh] px-20 grid grid-cols-12 gap-5">
      <div className="col-span-2">
        <ProductFilter />
      </div>
      <div className="bg-green-100 col-span-10">catalog section</div>
    </div>
  );
}
