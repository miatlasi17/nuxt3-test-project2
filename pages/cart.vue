<template>
  <section>
    <div class="hero">
      <p class="badge">Cart</p>
      <h1>Static cart snapshot.</h1>
      <p>No interactivity yet—this page simply shows how a cart summary could look before wiring real data.</p>
    </div>

    <div class="cart-summary">
      <div class="card" v-for="item in cart" :key="item.name">
        <div class="cart-item">
          <div class="thumb"></div>
          <div class="meta">
            <strong>{{ item.name }}</strong>
            <span class="price">{{ item.price }}</span>
            <span style="color: var(--muted);">Qty: {{ item.qty }}</span>
          </div>
        </div>
      </div>
      <div class="card">
        <h3>Order summary</h3>
        <p class="price" style="margin: 10px 0 6px;">Subtotal: {{ subtotal }}</p>
        <p style="margin: 0 0 12px; color: var(--muted);">Shipping calculated at checkout.</p>
        <p class="badge" style="width: fit-content;">Static preview only</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cart = [
  { name: "Nimbus Chair", price: "$320", qty: 1 },
  { name: "Focus Lamp", price: "$120", qty: 2 },
  { name: "Creator Kit", price: "$48", qty: 1 }
];

const subtotal = "$608";
</script>
