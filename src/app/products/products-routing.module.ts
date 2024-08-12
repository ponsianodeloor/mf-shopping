import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListPageComponent} from "./pages/products-list-page/products-list-page.component";
import {ProductAddPageComponent} from "./pages/product-add-page/product-add-page.component";
import {ProductEditPageComponent} from "./pages/product-edit-page/product-edit-page.component";
import {ProductShowPageComponent} from "./pages/product-show-page/product-show-page.component";
import {ProductDeletePageComponent} from "./pages/product-delete-page/product-delete-page.component";

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'list', component: ProductsListPageComponent },
      { path: 'add', component: ProductAddPageComponent },
      { path: 'show/:id', component: ProductShowPageComponent },
      { path: 'edit/:id', component: ProductEditPageComponent },
      { path: 'delete/:id', component: ProductDeletePageComponent },
      { path: '**', redirectTo: 'list' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
