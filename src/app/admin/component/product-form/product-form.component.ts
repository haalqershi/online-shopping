import { NotifierService } from 'angular-notifier';
import { Product } from 'shared/models/Product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CategoryService } from 'shared/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;
  product: any = {};
  productId: any;
  // createProductSubscription!: Subscription;
  // deleteProductSubscription!: Subscription;

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private notifierService: NotifierService
  ) {
    this.categories$ = this.categoryService.getAll();
    this.productId = this.route.snapshot.paramMap.get('productId');
    if (this.productId) {
      this.productService.get(this.productId).pipe(take(1)).subscribe((p: any) => {
        this.product = p;
      });
    }
  }

  ngOnInit(): void {
  }

  save(newProduct: Product) {
    if (this.productId) {
      this.productService.update(this.productId, newProduct).subscribe(() => {
        this.router.navigate(['/admin/products']);
        this.notifierService.notify('success', 'Product was updated successfully');
      });
    } else {
      this.productService.create(newProduct).pipe(take(1)).subscribe(() => {
        this.router.navigate(['/admin/products']);
        this.notifierService.notify('success', 'Product was added successfully');
      });
    }
  }

  delete() {
    if (!confirm('Do you want to delete this Product?')) {
      return;
    } else {
      this.productService.delete(this.productId).pipe(take(1)).subscribe(() => {
        this.notifierService.notify('success', 'Product was delete successfully');
      });
    }
  }
}
