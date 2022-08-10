import { ShoppingCart } from './shopping-cart';

export class Order {
    placedAt: number;
    items!: any[];

    constructor(private userId: string, private shipping: any, private shoppingCart: ShoppingCart) {
        this.placedAt = new Date().getTime();
    }

    getOrder() {
        let order = {
            userId: this.userId,
            datePlaced: this.placedAt,
            shipping: this.shipping,
            items: this.shoppingCart.items.map(item => {
                return {
                    product: {
                        name: item.product.name,
                        imgUrl: item.product.imgUrl,
                        price: item.product.price
                    },
                    quantity: item.quantity,
                    totalPrice: item.totalPrice
                }
            })
        }
        return order;
    }
}