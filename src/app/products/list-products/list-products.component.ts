import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private ProductService: ProductService) {}
  
  products = []
    
  ngOnInit() {
    this.ProductService
      .loadAll()
      .subscribe((items:any[]) => {
        this.products = items
      });
  }

}
