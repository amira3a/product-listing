import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartSubject.next([...this.cart]); 
  }

  removeFromCart(productId: number) {
    const index = this.cart.findIndex(product => product.id === productId);
    if (index !== -1) {
      this.cart.splice(index, 1); 
      this.cartSubject.next([...this.cart]); 
    }
  }

  getCart(): Product[] {
    return this.cart;
  }

  getCartTotal(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  getCartCount(): number {
    return this.cart.length;
  }
}
