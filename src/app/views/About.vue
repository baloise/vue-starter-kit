<template>
  <div class="about">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class About extends Vue {
  @Prop() private msg!: string;
}
</script>