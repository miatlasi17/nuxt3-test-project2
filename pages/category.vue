<template>
  <section>
    <div class="hero">
      <p class="badge">Category</p>
      <h1>Choose a lane.</h1>
      <p>Static showcase of a few categories and items. In a real build, these would come from content files or an API.</p>
    </div>

    <p class="section-title">Categories</p>
    <div class="grid">
      <div class="card" v-for="category in categories" :key="category.title">
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
        <div class="section-title" style="margin-top: 16px;">Highlights</div>
        <ul style="margin: 0; padding-left: 18px; color: var(--muted);">
          <li v-for="item in category.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    title: "Work Essentials",
    description: "Everything for a calm, efficient desk setup.",
    items: ["Standing desk", "Flexible lamp", "Cable kit"]
  },
  {
    title: "On-the-go",
    description: "Carry light, stay productive anywhere.",
    items: ["Slim backpack", "Portable charger", "Compact keyboard"]
  },
  {
    title: "Sound",
    description: "Focused listening or shared sessions.",
    items: ["Noise-canceling headphones", "Desktop speakers", "Podcast mic"]
  }
];
</script>
