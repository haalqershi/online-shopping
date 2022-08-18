import { Shipping } from './Shipping';

export class OrderModel  {
    constructor(
        public datePlaced: number,
        public items: any[],
        public shipping : any,
        public userId: string
     ){

     }
}