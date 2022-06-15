<script setup lang="ts">
import { ref } from 'vue'
import {
  BalIcon,
  BalList,
  BalListItem,
  BalListItemContent,
  BalListItemTitle,
  BalListItemSubtitle,
  BalListItemIcon,
} from '@baloise/design-system-components-vue'
import vueSvg from '@/ui/assets/vue.svg?raw'
import balVueSvg from '@/ui/assets/logo.svg?raw'
import piniaSvg from '@/ui/assets/pinia.svg?raw'
import baloiseSvg from '@/ui/assets/baloise.svg?raw'
import veeSvg from '@/ui/assets/vee.svg?raw'
import viteSvg from '@/ui/assets/vite.svg?raw'

const links = ref([
  {
    title: 'Vue.js (Version 3.x.x)',
    subtitle: 'The Progressive JavaScript Framework',
    href: 'https://v3.vuejs.org/',
    icon: vueSvg,
  },
  {
    title: 'Vite',
    subtitle: 'Next Generation Frontend Tooling',
    href: 'https://vitejs.dev/',
    icon: viteSvg,
  },
  {
    title: 'Baloise Design System',
    subtitle: 'UI component library',
    href: 'https://design.baloise.dev/',
    icon: baloiseSvg,
  },
  {
    title: 'Pinia',
    subtitle: 'Global shared state mgmt',
    href: 'https://pinia.vuejs.org/',
    icon: piniaSvg,
  },
  {
    title: 'Vue Router (Version 4.x.x)',
    subtitle: 'Main plugin for routing',
    href: 'https://next.router.vuejs.org/',
    icon: vueSvg,
  },
  {
    title: 'Vue I18n',
    subtitle: 'Translation plugin',
    href: 'https://vue-i18n.intlify.dev/',
    icon: vueSvg,
  },
  {
    title: 'Vue Composition API',
    subtitle: 'API to create components and reactive state',
    href: 'https://v3.vuejs.org/guide/composition-api-introduction.html',
    icon: vueSvg,
  },
  {
    title: 'Vue Setup Script',
    subtitle:
      'Syntactic sugar for using Composition API inside Single File Components (SFCs)',
    href: 'https://v3.vuejs.org/api/sfc-script-setup.html',
    icon: vueSvg,
  },
  {
    title: 'Vue Dev Tools',
    subtitle:
      'Chrome and Firefox DevTools extension for debugging Vue.js applications.',
    href: 'https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en',
    icon: vueSvg,
  },
  {
    title: 'Axios',
    subtitle: 'Translation plugin',
    href: 'https://axios-http.com/',
    icon: vueSvg,
  },
  {
    title: 'Vue Axios Integration',
    subtitle: 'Collection of essential Vue Composition Utilities',
    href: 'https://vueuse.org/integrations/useAxios/',
    icon: balVueSvg,
  },
  {
    title: 'Vee Validate',
    subtitle: 'Form Validation for Vue.js',
    href: 'https://vee-validate.logaretm.com/v4/guide/composition-api/validation',
    icon: veeSvg,
  },
  {
    title: 'Baloise Web App Utilities',
    subtitle: 'A collection of utilities for Baloise web applications.',
    href: 'https://github.com/baloise/web-app-utils',
    icon: balVueSvg,
  },
])
</script>

<template>
  <BalList border>
    <BalListItem
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      target="_blank"
    >
      <BalListItemIcon>
        <BalIcon :svg="link.icon" />
      </BalListItemIcon>
      <BalListItemContent>
        <BalListItemTitle>{{ link.title }}</BalListItemTitle>
        <BalListItemSubtitle>{{ link.subtitle }}</BalListItemSubtitle>
      </BalListItemContent>
      <BalListItemIcon right>
        <BalIcon name="nav-go-right" size="xsmall" />
      </BalListItemIcon>
    </BalListItem>
  </BalList>
</template>
