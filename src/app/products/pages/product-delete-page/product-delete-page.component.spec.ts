import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeletePageComponent } from './product-delete-page.component';

describe('ProductDeletePageComponent', () => {
  let component: ProductDeletePageComponent;
  let fixture: ComponentFixture<ProductDeletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDeletePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
