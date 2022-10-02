
export type CartItem = {
    imageLink: string;
    title: string;
    author: string;
  id: string;
  count: number;
  price: number;
  subtitle: string,
  name: string, 
  };
  
  export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  };
  
