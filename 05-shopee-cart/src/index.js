import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const cart = [];

console.log("Welcome to the Shopee Cart!");

const item1 = await createItem("Laptop", 1500, 2);
const item2 = await createItem("Mouse", 50.99, 4);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

const total = await cartService.calculateCartTotal(cart);
console.log(`Total cart value: $${total}`);

//await cartService.deleteItem(cart, item1.name);
await cartService.removeItem(cart, item2);

const total2 = await cartService.calculateCartTotal(cart);
console.log(`Total cart value: $${total2}`);

await cartService.displayCart(cart);