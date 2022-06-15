<script setup lang="ts">
import {
  BalCard,
  BalCardTitle,
  BalCardContent,
  BalHeading,
} from '@baloise/design-system-components-vue'
import { useCounterStore } from '@/ui/stores/counter.store'
import HomeCounter from './HomeCounter.vue'
import HomeList from './HomeList.vue'

const counterStore = useCounterStore()
</script>

<template>
  <BalCard class="mt-6 px-5">
    <div
      className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
    >
      <div
        style="width: 160px; height: 160px"
        className="has-radius-rounded has-background-blue-2 p-4 is-flex is-justify-content-center is-align-items-center"
      >
        <img
          className="mt-4"
          style="max-width: 120px; max-height: 120px"
          alt="Vue logo"
          src="@/ui/assets/logo.svg"
        />
      </div>
      <BalHeading title level="h2" space="top">{{
        $t('home.title')
      }}</BalHeading>
      <BalHeading
        data-testid="title"
        subtitle
        level="h4"
        space="bottom"
        color="info"
      >
        Baloise Design System - Vue Starter Template
      </BalHeading>
      <HomeCounter
        :count="counterStore.count"
        @increase="counterStore.increase"
        @decrease="counterStore.decrease"
      ></HomeCounter>
    </div>
  </BalCard>
  <BalCard class="mt-6">
    <BalCardTitle>Tools we used</BalCardTitle>
    <BalCardContent>
      <HomeList></HomeList>
    </BalCardContent>
  </BalCard>
</template>
