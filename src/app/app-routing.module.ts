import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { CategoryComponent } from './category/category.component';
import { CategoryViewComponent } from './category/category-view/category-view.component';


const routes: Routes = [
  { path: '', component: ListProductsComponent},
  { path: 'view', component: ViewProductComponent},
  { path: 'edit', component: ProductEditComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'category-view', component: CategoryViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
