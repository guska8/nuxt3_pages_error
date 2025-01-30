<script lang="ts" setup>
definePageMeta({ layout: 'page2' })
useHead({ title: 'Posts2' })
</script>

<template>
  <div>
    <Fodder1></Fodder1>
    <Fodder2></Fodder2>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    Fodder1: defineAsyncComponent(() => import('~/components/Fodder1.vue')),
    Fodder2: defineAsyncComponent(() => import('~/components/Fodder2.vue')),
  },
}
</script>
