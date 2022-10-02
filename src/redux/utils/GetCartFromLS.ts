import { CartItem } from "../cart/types";
import { calcTotalPrice } from "./CalcTotalPrice";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);
  console.log(data)
    return {
      items: items as CartItem[],  
      totalPrice,   
    };
  };