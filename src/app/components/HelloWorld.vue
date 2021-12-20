<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { BalButton } from '@baloise/design-system-components-vue'
import { counterStore } from '@/app/data/counter.store'

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})

export type onConfirm = (value: string) => void

type HelloWorldEmitters = {
  onConfirm: onConfirm
}

const emits = defineEmits({
  onConfirm: () => true,
} as HelloWorldEmitters)
</script>

<template>
  <section class="hello">
    <p>{{ msg }}</p>
    <br />
    <p>My Counter is {{ counterStore.getState().count }}</p>
    <br />
    <BalButton color="info" outlined @click="emits('onConfirm', props.msg)">
      Confirm
    </BalButton>
  </section>
</template>
