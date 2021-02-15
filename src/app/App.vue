<template>
  <BalNavbar>
    <BalNavbarBrand>
      <img
        src="https://github.com/baloise/ui-library/raw/master/docs/assets/images/icon.svg"
      />
      <BalText style="margin-left: 15px">Starter Kit App</BalText>
    </BalNavbarBrand>
  </BalNavbar>

  <nav class="has-background-white">
    <div class="container">
      <BalTabs>
        <router-link
          v-for="routeItem in routes"
          :key="routeItem.name"
          :to="routeItem"
          custom
          v-slot="{ href, route, isActive, navigate }"
        >
          <BalTabItem
            :active="isActive"
            :href="href"
            :label="route.name"
            :value="route.name"
            @balNavigate="navigate($event)"
          ></BalTabItem>
        </router-link>
      </BalTabs>
    </div>
  </nav>

  <main class="container">
    <BalCard style="margin-top: 40px" @balTabChange="bubu($event)">
      <div class="is-padded">
        <router-view />
      </div>
    </BalCard>
  </main>

  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/form">Form</router-link>
  </div>
  <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  BalNavbar,
  BalTabs,
  BalTabItem,
  BalNavbarBrand,
  BalCard,
  BalText,
} from '@baloise/ui-library-vue'
import { routes } from '@/router'

export default defineComponent({
  name: 'App',
  components: {
    BalNavbar,
    BalNavbarBrand,
    BalCard,
    BalTabs,
    BalTabItem,
    BalText,
  },
  setup() {
    return { routes }
  },
})
</script>
