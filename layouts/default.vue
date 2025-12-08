<template>
  <div class="shell">
    <nav class="navbar">
      <div class="badge">{{ t("brand") }}</div>
      <div class="nav-right">
        <div class="nav-links">
          <NuxtLink
            :to="localePath({ name: 'index' })"
            class="nav-link"
            :class="{ active: route.path === localePath({ name: 'index' }) }"
          >
            {{ t("nav.home") }}
          </NuxtLink>
          <NuxtLink
            :to="localePath({ name: 'category' })"
            class="nav-link"
            :class="{ active: route.path.startsWith(localePath({ name: 'category' })) }"
          >
            {{ t("nav.category") }}
          </NuxtLink>
          <NuxtLink
            :to="localePath({ name: 'cart' })"
            class="nav-link"
            :class="{ active: route.path.startsWith(localePath({ name: 'cart' })) }"
          >
            {{ t("nav.cart") }}
          </NuxtLink>
        </div>
        <div class="locale-toggle">
          <NuxtLink
            v-for="loc in availableLocales"
            :key="loc.code"
            class="locale-option"
            :class="{ active: loc.code === locale }"
            :to="switchLocalePath(loc.code)"
          >
            {{ loc.code.toUpperCase() }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <main>
      <slot />
    </main>

    <footer class="footer">
      {{ t("footer") }}
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { t, locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => locales.value);
</script>
