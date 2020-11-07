import {Component, OnInit} from '@angular/core';
import {WebstoreService} from '../../services/webstore.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private webstoreService: WebstoreService) {
  }

  public products: any[];
  public itemInCart: any = [];
  public getmyCartItem: any[];
  public discountAfterprice: any;
  public discountDescription: any;
  public priceResponse: any = Array();
  public sum: any = 0;

  ngOnInit() {
    this.shoppingCartInit();
    this.myCartItems();
    this.getSum();
  }


  shoppingCartInit() {
    this.webstoreService.loadProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addToCart(item) {

    var myCart = JSON.parse(WebstoreService.getMyCartFromLocalStore());

    if (myCart == null) {
      this.itemInCart.push(item);
      this.webstoreService.setMyCartToLocalStore(this.itemInCart);
    } else {
      myCart.push(item);
      this.webstoreService.setMyCartToLocalStore(myCart);
    }
    location.reload();
  }

  myCartItems() {
    this.getmyCartItem = JSON.parse(WebstoreService.getMyCartFromLocalStore());
  }

  removeItem(index) {
    this.getmyCartItem.splice(index, 1);
    this.webstoreService.setMyCartToLocalStore(this.getmyCartItem);
    location.reload();
  }

  getPrice(cartItem) {
    this.webstoreService.getPriceForItem(cartItem).subscribe(
      data => {
        this.priceResponse = data;
      },
      error => {
        console.log(error);
      }
    );

  }

  removeMyCart() {
    WebstoreService.removeMyCartFromLocalStore();
    location.reload();
  }

  check(item) {
    var myCart = JSON.parse(WebstoreService.getMyCartFromLocalStore());
    var object = WebstoreService.arraySearch(item.id, myCart);

    object['discountAfterprice'] = this.priceResponse.discountAfterprice;
    this.removeItem(item.id);
    this.webstoreService.setMyCartToLocalStore(myCart);
    setTimeout(function () {
      location.reload();
    }, 100);

  }

  getSum() {
    var myCart = JSON.parse(WebstoreService.getMyCartFromLocalStore());
    var calsum = 0;
    myCart.forEach(function (value) {
      calsum += value.discountAfterprice;
    });
    this.sum = calsum;
  }


}
