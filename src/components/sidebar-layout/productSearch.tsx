'use client';

import { Search } from 'lucide-react';
import { Input } from '../ui/input';

const ProductSearch = () => {
  return <Input placeholder="Search for a product..." startIcon={Search} />;
};

export default ProductSearch;
