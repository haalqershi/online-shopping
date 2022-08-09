import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{

    constructor(public items: ShoppingCartItem[]){}

    get totalItemsCount(){
        let cartItemCount = 0;
        for(let productId in this.items){
          cartItemCount += this.items[productId].quantity;
        }
        return cartItemCount;
    }
}