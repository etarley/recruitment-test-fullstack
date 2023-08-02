'use client';

import { Product } from '@prisma/client';
import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';
import ProductCard from './productCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel: FunctionComponent<ProductCarouselProps> = ({
  products,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    dots: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='p-5 mx-10'>
      <h2 className='mb-5 text-2xl text-slate-100'>Caroussel</h2>
      <Slider {...settings}>
        {products.map((product) => {
          console.log(products.length);

          return (
            <div key={product.id} aria-label={`Product ${product.name}`}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
