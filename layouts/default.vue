<template>
  <div class="shell">
    <nav class="navbar">
      <div class="badge">Nuxt3 Static Shop</div>
      <div class="nav-links">
        <NuxtLink to="/" class="nav-link" :class="{ active: route.path === '/' }">Home</NuxtLink>
        <NuxtLink to="/category" class="nav-link" :class="{ active: route.path.startsWith('/category') }">Category</NuxtLink>
        <NuxtLink to="/cart" class="nav-link" :class="{ active: route.path.startsWith('/cart') }">Cart</NuxtLink>
      </div>
    </nav>

    <main>
      <slot />
    </main>

    <footer class="footer">
      Built with Nuxt 3 — static demo content only.
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
