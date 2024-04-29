'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';

const ProductFilter = () => {
  return (
    <Card>
      <CardHeader>
        <Label>Categories</Label>
      </CardHeader>
      <CardContent>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProductFilter;
