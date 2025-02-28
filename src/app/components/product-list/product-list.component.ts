import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts() || [];
    this.filteredProducts = [...this.products]; 
    this.categories = [...new Set(this.products.map(product => product.category))]; 
  }
  

  filterByCategory(category: string): void {
    if (!category) {
      this.filteredProducts = [...this.products]; 
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }
  

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  openProductModal(product: Product) {
    const modalRef = this.modalService.open(ProductDetailModalComponent);
    modalRef.componentInstance.product = product; 
  }
}
