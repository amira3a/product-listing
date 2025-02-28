import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
   // Electronics
{
  id: 1,
  name: 'Laptop',
  price: 1500,
  category: 'Electronics',
  imageUrl:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&h=300&q=80',
  description: 'A powerful laptop with the latest processor and a high-resolution display.'
},
{
  id: 2,
  name: 'Smartphone',
  price: 800,
  category: 'Electronics',
  imageUrl: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A sleek smartphone with an advanced camera system and long battery life.'
},
{
  id: 3,
  name: 'Headphones',
  price: 120,
  category: 'Electronics',
  imageUrl: 'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'Wireless noise-canceling headphones with deep bass and clear sound quality.'
},
{
  id: 4,
  name: 'Smart Watch',
  price: 250,
  category: 'Electronics',
  imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A stylish smartwatch with fitness tracking and heart rate monitoring.'
},
{
  id: 5,
  name: 'Tablet',
  price: 600,
  category: 'Electronics',
  imageUrl: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A high-performance tablet with a vivid display and long battery life.'
},

// Clothing
{
  id: 6,
  name: 'T-Shirt',
  price: 20,
  category: 'Clothing',
  imageUrl: 'https://images.pexels.com/photos/9945176/pexels-photo-9945176.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A comfortable cotton T-shirt available in various colors and sizes.'
},
{
  id: 7,
  name: 'Jeans',
  price: 45,
  category: 'Clothing',
  imageUrl: 'https://images.pexels.com/photos/4210850/pexels-photo-4210850.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'Classic denim jeans with a perfect fit for casual and everyday wear.'
},
{
  id: 8,
  name: 'Jacket',
  price: 90,
  category: 'Clothing',
  imageUrl: 'https://images.pexels.com/photos/6311605/pexels-photo-6311605.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A warm and stylish jacket for cold weather, made with premium materials.'
},
{
  id: 9,
  name: 'Sneakers',
  price: 70,
  category: 'Clothing',
  imageUrl: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'Comfortable sneakers designed for everyday walking and sports activities.'
},
{
  id: 10,
  name: 'Hoodie',
  price: 55,
  category: 'Clothing',
  imageUrl: 'https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A cozy hoodie with a soft inner lining, perfect for casual wear.'
},

// Accessories
{
  id: 11,
  name: 'Watch',
  price: 200,
  category: 'Accessories',
  imageUrl: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A luxury wristwatch with a premium finish and water-resistant design.'
},
{
  id: 12,
  name: 'Sunglasses',
  price: 80,
  category: 'Accessories',
  imageUrl: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'Stylish UV-protected sunglasses for a modern and elegant look.'
},
{
  id: 13,
  name: 'Backpack',
  price: 100,
  category: 'Accessories',
  imageUrl: 'https://images.pexels.com/photos/2920069/pexels-photo-2920069.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A spacious and durable backpack for school, work, and travel.'
},
{
  id: 14,
  name: 'Cap',
  price: 25,
  category: 'Accessories',
  imageUrl: 'https://images.pexels.com/photos/6733364/pexels-photo-6733364.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A trendy cap made from breathable fabric, ideal for outdoor wear.'
},
{
  id: 15,
  name: 'Wallet',
  price: 50,
  category: 'Accessories',
  imageUrl: 'https://images.pexels.com/photos/151620/pexels-photo-151620.jpeg?auto=compress&cs=tinysrgb&w=400',
  description: 'A stylish leather wallet with multiple card slots and a secure design.'
}
  ];

  getProducts(): Product[] {
    return this.products;
  }
}

