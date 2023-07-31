import * as React from 'react';
import { Product as ProductType } from '@prisma/client';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

interface ProductProps {
  product: ProductType;
}

const ProductCard: React.FunctionComponent<ProductProps> = ({ product }) => {
  return (
    <Card className='mx-6 h-60'>
      <CardContent>
        <Image
          src={product.image}
          alt={`Image of ${product.name}`}
          width={450}
          height={300}
          className='object-cover w-19/20 h-1/3 pt-4 mx-auto'
        />
        <CardTitle className='my-2 text-center '>{product.name}</CardTitle>
        <div className='text-center my-2'>${product.price}</div>

        <CardDescription className='text-center'>
          {product.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
