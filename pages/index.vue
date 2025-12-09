<template>
  <section>
    <div class="hero">
      <p class="badge">{{ t("home.badge") }}</p>
      <h1>{{ t("home.title") }}</h1>
      <p>{{ t("home.description") }}</p>
    </div>

    <p class="section-title">{{ t("home.featured") }}</p>
    <div class="grid">
      <div class="card" v-for="category in categories" :key="category.title">
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
      </div>
    </div>

    <p class="section-title">{{ t("home.popular") }}</p>
    <LazyHydrationWrapper :when-visible="true">
      <Carousel :items-to-show="3" :wrap-around="true" :autoplay="3000">
        <Slide v-for="product in products" :key="product.name">
          <div class="card carousel-card">
            <h3>{{ product.name }}</h3>
            <p>{{ product.blurb }}</p>
            <p class="price">{{ product.price }}</p>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </LazyHydrationWrapper>
  </section>
</template>

<script setup lang="ts">
type Category = { title: string; description: string };
type Product = { name: string; blurb: string; price: string };

const { t, tm } = useI18n();

const categories = computed<Category[]>(() => (tm("home.categories") as Category[]) || []);
const products = computed<Product[]>(() => (tm("home.products") as Product[]) || []);
</script>
