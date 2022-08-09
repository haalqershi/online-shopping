import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{

    constructor(public items: any[]){}

    get totalItemsCount(){
        let cartItemCount = 0;
        for(let productId in this.items){
          cartItemCount += this.items[productId].quantity;
        }
        return cartItemCount;
    }

    get allProductIds(){

        console.log( Object.keys(this.items));
        return Object.keys(this.items);
    }
}