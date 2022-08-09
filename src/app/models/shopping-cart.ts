import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{

    items: ShoppingCartItem[]= [];

    constructor(public itemsObj: {[key: string]: ShoppingCartItem}){
        for(let id in itemsObj){
            this.items.push(itemsObj[id]);
        }
    }

    get totalItemsCount(){
       let totalItems = 0;
       for(let id in this.itemsObj){
        totalItems += this.itemsObj[id].quantity;
       }
        return totalItems;
    }
}