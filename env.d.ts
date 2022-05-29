/// <reference types="vite/client" />

declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  [key: string]: any;
};

type CartItem = {
  productId: number;
};
