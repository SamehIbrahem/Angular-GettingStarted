import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  //route is used to get route params
  constructor(private route: ActivatedRoute, private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    // the  + here convert the value to numeric value
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.productService.getProductById(id).subscribe(product => this.product = product);
  }
  onBackClick(): void {
    this.router.navigate(['/products']);
  }

}
