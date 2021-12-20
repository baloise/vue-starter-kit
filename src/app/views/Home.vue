<script setup lang="ts">
import {
  BalCard,
  BalCardContent,
  BalHeading,
  BalButton,
} from '@baloise/design-system-components-vue'
import { balToastController } from '@baloise/design-system-components'
import HelloWorld, { onConfirm } from '@/app/components/HelloWorld.vue'
import { counterStore } from '@/app/data/counter.store'

const confirm: onConfirm = (value: string) => {
  balToastController.create({
    message: value,
    color: 'danger',
  })
}
</script>

<template>
  <section class="home">
    <BalCard class="mt-7">
      <BalCardContent>
        <BalHeading level="h3" space="none">My Counter</BalHeading>
        <BalHeading subtitle level="h4" space="bottom" color="hint">
          Subtitle of my Counter
        </BalHeading>

        <HelloWorld
          msg="Welcome to Your Vue.js + TypeScript App"
          @onConfirm="confirm($event)"
        />

        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <BalButton
              color="primary"
              icon="plus"
              @click="counterStore.increase()"
            >
              Increase
            </BalButton>
          </p>
        </div>
      </BalCardContent>
    </BalCard>
  </section>
</template>
