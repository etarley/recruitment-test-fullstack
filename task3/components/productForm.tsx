/* eslint-disable @next/next/no-img-element */
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PlusIcon } from '@radix-ui/react-icons';

import { addItem } from '@/app/actions';
import { DialogClose } from '@radix-ui/react-dialog';

const formSchema = z.object({
  name: z.string().nonempty({ message: 'Product Name is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  description: z.string().nonempty({ message: 'Description is required' }),
  image: z.any(),
});

type FormData = z.infer<typeof formSchema>;

export function AddProductDialog() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Dialog>
      <DialogTrigger>
        <Button icon={PlusIcon}>NEW PRODUCT</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new product</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form action={addItem} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Product Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Price'
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder='Description' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='image'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input type='file' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <DialogClose asChild>
              <Button type='submit'>Add Product</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
