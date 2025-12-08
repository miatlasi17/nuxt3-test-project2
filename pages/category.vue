<template>
  <section>
    <div class="hero">
      <p class="badge">{{ t("category.badge") }}</p>
      <h1>{{ t("category.title") }}</h1>
      <p>{{ t("category.description") }}</p>
    </div>

    <p class="section-title">{{ t("category.listTitle") }}</p>
    <div class="grid">
      <div class="card" v-for="category in categories" :key="category.title">
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
        <div class="section-title" style="margin-top: 16px;">{{ t("category.highlights") }}</div>
        <ul style="margin: 0; padding-left: 18px; color: var(--muted);">
          <li v-for="item in category.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type CategoryEntry = { title: string; description: string; items: string[] };

const { t, tm } = useI18n();

const categories = computed<CategoryEntry[]>(() => (tm("category.categories") as CategoryEntry[]) || []);
</script>
