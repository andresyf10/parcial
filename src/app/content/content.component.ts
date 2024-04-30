import { Component, OnInit } from '@angular/core';
import { Product } from '../product-interface';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-content',
  standalone:true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
}
