import { Product } from './../Product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{

    items: ShoppingCartItem[]= [];

    constructor(public itemsObj: {[key: string]: ShoppingCartItem}){
        for(let id in itemsObj){
            let currentItem = itemsObj[id];
            this.items.push(new ShoppingCartItem(currentItem.product, currentItem.quantity));
        }
    }

    get totalItemsCount(){
       let totalItems = 0;
       for(let id in this.itemsObj){
        totalItems += this.itemsObj[id].quantity;
       }
        return totalItems;
    }

    get totalPriceForAllItems(){
        let sum = 0;
        for(let id in this.items) sum += this.items[id].totalPrice;
        return sum;
    }

    getQuantity(product: Product){
        if(!this.itemsObj) return 0;
        let item = this.itemsObj[product.key];
        return item ? item.quantity : 0;
      }
}