import { Product } from "../Product";

export class ShoppingCartItem{
    product! : Product;
    quantity!: number;

    get totalPrice(){
        return this.product.price * this.quantity;
    }
}