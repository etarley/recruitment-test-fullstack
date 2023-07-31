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
    <Card className='mx-6'>
      <CardContent>
        <div className='w-full pt-4'>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={product.image}
              alt={`Image of ${product.name}`}
              width={450}
              height={300}
            />
          </AspectRatio>
        </div>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>

      <CardFooter>
        <div className={styles.price}>${product.price}</div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
