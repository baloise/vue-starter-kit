<template>
  <header class="has-background-white">
    <BalNavbar>
      <BalNavbarBrand>
        <BalIcon name="logo" inverted size="large"></BalIcon>
        <BalText style="margin-left: 15px">
          <strong>Vue</strong> Starter-Kit
        </BalText>
      </BalNavbarBrand>
    </BalNavbar>
    <div class="container">
      <BalTabs>
        <router-link
          to="/"
          custom
          v-slot="{ href, route, navigate, isExactActive }"
        >
          <BalTabItem
            :value="route.path"
            :label="route.name"
            :href="href"
            :active="isExactActive"
            @balNavigate="navigate"
          ></BalTabItem>
        </router-link>
        <router-link
          to="/form"
          custom
          v-slot="{ href, route, navigate, isActive }"
        >
          <BalTabItem
            :value="route.path"
            :label="route.name"
            :href="href"
            :active="isActive"
            @balNavigate="navigate"
          ></BalTabItem>
        </router-link>
      </BalTabs>
    </div>
  </header>
  <main>
    <div class="container">
      <!-- Page content -->
      <router-view />
    </div>
  </main>
  <footer class="footer">
    <div class="container">
      <!-- Footer content -->
      Footer
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
