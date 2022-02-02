<script setup lang="ts">
import {
  BalApp,
  BalFooter,
  BalNavbar,
  BalNavbarBrand,
  BalNavbarMenu,
  BalNavbarMenuStart,
  BalText,
  BalIcon,
} from '@baloise/design-system-components-vue'
import {
  BalSwissLanguage,
  updateBalLanguge,
} from '@baloise/design-system-components'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()

const languages = ref<BalSwissLanguage[]>(['de', 'en', 'fr', 'it'])

const selectLanguage = (lang: BalSwissLanguage) => {
  locale.value = lang
  updateBalLanguge(lang)
}
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
      <!-- Page content -->
      <router-view />
    </main>
    <BalFooter>
      <div class="container">
        <a
          v-for="lang in languages"
          :key="lang"
          class="lang-link is-link is-inverted"
          :class="{ 'has-text-blue-3': locale === lang }"
          @click="selectLanguage(lang)"
        >
          {{ lang.toUpperCase() }}
        </a>
      </div>
    </BalFooter>
  </BalApp>
</template>

<style lang="scss" scoped>
@use 'sass:map';

@import 'node_modules/@baloise/design-system-components/src/styles/global.utilities';

.lang-link {
  padding-bottom: 2px;

  &::after {
    content: '|';
    color: $white;
    margin-left: map.get($spacing-values, '1');
    margin-right: map.get($spacing-values, '1');
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
}
</style>
