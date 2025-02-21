<script setup>
definePageMeta({ layout: 'page2' })
useHead({ title: 'Posts2' })
</script>

<template>
  <div>
    <Fodder2></Fodder2>
  </div>
</template>

<script>
export default {
  components: {
    Fodder2: defineAsyncComponent(() => import('~/components/Fodder2.vue')),
  },
}
</script>
