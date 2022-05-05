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
          <BalText bold class="ml-2">App Name</BalText>
        </BalNavbarBrand>
        <BalNavbarMenu>
          <BalNavbarMenuStart>
            <router-link to="/" class="navbar-item">
              <BalText>Home</BalText>
            </router-link>
            <router-link to="/poke" class="navbar-item">
              <BalText>Form / API</BalText>
            </router-link>
          </BalNavbarMenuStart>
        </BalNavbarMenu>
      </BalNavbar>
    </header>
    <main class="container is-compact">
      <router-view />
    </main>
    <BalFooter></BalFooter>
  </BalApp>
</template>
