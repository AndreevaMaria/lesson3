import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

type Product = {
  title: string,
  desc: string,
  price: string
}

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private route: ActivatedRoute,
    ) { }

  product = {
    title: "",
    desc: "",
    price: "",
    image: ""
  }

  ngOnInit() {
    this.productService
      .loadById(1)
      .subscribe((item) => {
        this.product = item
      });
  }

}
