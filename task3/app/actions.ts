'use server';
import { PrismaClient } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import { revalidateTag } from 'next/cache';
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const prisma = new PrismaClient();

export async function addItem(data: FormData) {
  const name = data.get('name');
  const description = data.get('description');
  let price = parseFloat(data.get('price') as string);
  const imageFile = data.get('image');

  let imageUrl = '';

  if (imageFile instanceof Blob) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const base64String = buffer.toString('base64');

    // Upload the base64 image to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${base64String}`
    );
    imageUrl = result.secure_url;
  }

  const product = await prisma.product.create({
    data: {
      name: typeof name === 'string' ? name : '',
      price: typeof price === 'number' ? price : 0,
      description: typeof description === 'string' ? description : '',
      image: imageUrl,
    },
  });

  console.log(product);
  revalidateTag('products');
}

export async function main() {
  const allProducts = await prisma.product.findMany();
  return allProducts;
}
