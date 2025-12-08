<template>
  <section>
    <div class="hero">
      <p class="badge">{{ t("cart.badge") }}</p>
      <h1>{{ t("cart.title") }}</h1>
      <p>{{ t("cart.description") }}</p>
    </div>

    <div class="cart-summary">
      <div class="card" v-for="item in cart" :key="item.name">
        <div class="cart-item">
          <div class="thumb"></div>
          <div class="meta">
            <strong>{{ item.name }}</strong>
            <span class="price">{{ item.price }}</span>
            <span style="color: var(--muted);">{{ t("cart.qtyLabel") }} {{ item.qty }}</span>
          </div>
        </div>
      </div>
      <div class="card">
        <h3>{{ t("cart.summaryTitle") }}</h3>
        <p class="price" style="margin: 10px 0 6px;">{{ t("cart.subtotalLabel") }} {{ subtotal }}</p>
        <p style="margin: 0 0 12px; color: var(--muted);">{{ t("cart.shippingNote") }}</p>
        <p class="badge" style="width: fit-content;">{{ t("cart.status") }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type CartItem = { name: string; price: string; qty: number };

const { t, tm } = useI18n();

const cart = computed<CartItem[]>(() => (tm("cart.items") as CartItem[]) || []);
const subtotal = computed(() => t("cart.subtotalValue"));
</script>
