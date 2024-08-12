import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductAddPageComponent } from './pages/product-add-page/product-add-page.component';
import { ProductShowPageComponent } from './pages/product-show-page/product-show-page.component';
import { ProductEditPageComponent } from './pages/product-edit-page/product-edit-page.component';
import { ProductDeletePageComponent } from './pages/product-delete-page/product-delete-page.component';
import { ProductConfirmDeleteDialogComponent } from './components/product-confirm-delete-dialog/product-confirm-delete-dialog.component';


@NgModule({
  declarations: [
    ProductsListPageComponent,
    ProductAddPageComponent,
    ProductShowPageComponent,
    ProductEditPageComponent,
    ProductDeletePageComponent,
    ProductConfirmDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
