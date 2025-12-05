<template>
  <section>
    <div class="hero">
      <p class="badge">Home</p>
      <h1>Curated digital & physical goods.</h1>
      <p>Everything on this page is static for now. The layout mirrors a simple storefront using Nuxt 3 conventions: layouts, pages, and a splash of CSS.</p>
    </div>

    <p class="section-title">Featured categories</p>
    <div class="grid">
      <div class="card" v-for="category in categories" :key="category.title">
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
      </div>
    </div>

    <p class="section-title">Popular picks</p>
    <div class="grid">
      <div class="card" v-for="product in products" :key="product.name">
        <h3>{{ product.name }}</h3>
        <p>{{ product.blurb }}</p>
        <p class="price">{{ product.price }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  { title: "Wearables", description: "Minimalist layers, breathable fabrics, subtle tech details." },
  { title: "Workspace", description: "Desks, lights, and tools to keep your flow steady." },
  { title: "Audio", description: "Headphones, speakers, and accessories tuned for focus." },
  { title: "Digital", description: "Icon packs, templates, and design assets for quick wins." }
];

const products = [
  { name: "Nimbus Chair", blurb: "Ergonomic mesh chair with adaptive lumbar support.", price: "$320" },
  { name: "Focus Lamp", blurb: "Dimmable LED with warm-to-cool spectrum presets.", price: "$120" },
  { name: "Arc Headphones", blurb: "Hybrid noise-canceling with 32h battery life.", price: "$260" },
  { name: "Creator Kit", blurb: "Bundle of Figma templates, icons, and UI flows.", price: "$48" }
];
</script>
