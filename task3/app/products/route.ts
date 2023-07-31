import { NextResponse } from 'next/server';
import { main } from '../actions';

export async function GET() {
  try {
    const products = await main();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.error();
  }
}
