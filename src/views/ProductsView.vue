
<script setup lang="ts">
import { useCart } from "@/composables/useCart"
import { onMounted, ref } from "vue"

const { addToCart } = useCart()

const products = ref<Product[]>([])
onMounted(() => {
  products.value = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]
})
</script>

<template>
  <div class="about">
    <h1>Products</h1>
    <ul>
      <li v-for="({ id, name, price }, index) in products" :key="index">
        <div>
          <h3>{{ name }} ￥ {{ price }}</h3>
          <el-button @click="addToCart({ id, name, price })"
            >Add to cart</el-button
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
