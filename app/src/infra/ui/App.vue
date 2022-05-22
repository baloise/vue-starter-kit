<script setup lang="ts">
import {
  BalApp,
  BalNavbar,
  BalNavbarBrand,
  BalIcon,
  BalText,
  BalNavbarMenu,
  BalNavbarMenuStart,
  BalFooter,
} from '@baloise/design-system-components-vue'
</script>

<template>
  <BalApp class="has-sticky-footer has-background">
    <header>
      <BalNavbar>
        <BalNavbarBrand>
          <BalIcon name="logo" inverted size="large" />
          <BalText bold class="ml-2">Mamamia Pizza</BalText>
        </BalNavbarBrand>
        <BalNavbarMenu>
          <BalNavbarMenuStart>
            <router-link to="/" class="navbar-item">
              <BalText>Pizzas</BalText>
            </router-link>
            <router-link to="/checkout" class="navbar-item">
              <BalText>Checkout</BalText>
            </router-link>
          </BalNavbarMenuStart>
        </BalNavbarMenu>
      </BalNavbar>
    </header>
    <main className="container">
      <router-view />
    </main>
    <BalFooter></BalFooter>
  </BalApp>
</template>
