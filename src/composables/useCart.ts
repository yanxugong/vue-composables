import { ref } from "vue";

const cart = ref({
  items: [],
});

export const useCart = () => {
  const addToCart = (product: Product) => {
    cart.value.items.push();
  };
  return {
    cart,
  };
};
