import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ListProductsComponent } from './products/list-products/list-products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryViewComponent } from './category/category-view/category-view.component';
import { ProductService } from './product.service';

@NgModule({
   declarations: [
      AppComponent,
      ListProductsComponent,
      ViewProductComponent,
      ProductEditComponent,
      CategoryViewComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      
   ],
   providers: [ProductService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
