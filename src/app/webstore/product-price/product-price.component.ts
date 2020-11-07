import {Component, OnInit} from '@angular/core';
import {WebstoreService} from '../../services/webstore.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {

  constructor(private webstoreService: WebstoreService) {
  }

  public products: any[];
  public priceList: any[];

  ngOnInit() {
    this.productInit();
  }

  productInit() {
    this.webstoreService.loadProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  priceSearch(productPriceForm: NgForm) {
    var param = Object.keys(productPriceForm.value).length;
    if (param > 0) {
      this.webstoreService.getPriceList(productPriceForm.value.product).subscribe(
        data => {
          this.priceList = data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }


}
