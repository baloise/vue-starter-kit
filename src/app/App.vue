<template>
  <header>
    <BalNavbar>
      <BalNavbarBrand>
        <BalIcon name="logo" inverted size="large"></BalIcon>
        <BalText style="margin-left: 15px">
          <strong>Vue</strong> Starter-Kit
        </BalText>
      </BalNavbarBrand>
    </BalNavbar>
  </header>
  <main>
    <div class="container">
      <!-- Page content -->

      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/form">Form</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </main>
  <footer class="footer">
    <div class="container">
      <!-- Footer content -->
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
