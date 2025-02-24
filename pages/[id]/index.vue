<script setup>
definePageMeta({ layout: 'page2' })
useHead({ title: 'Posts2' })
</script>

<template>
  <div>
    <c1 />
    <c2 />
    <c3 />
    <c4 />
    <c5 />
  </div>
</template>

<script>
export default {
  components: {
    c1: defineAsyncComponent(() => import('~/components/c1.vue')),
    c2: defineAsyncComponent(() => import('~/components/c2.vue')),
    c3: defineAsyncComponent(() => import('~/components/c3.vue')),
    c4: defineAsyncComponent(() => import('~/components/c4.vue')),
    c5: defineAsyncComponent(() => import('~/components/c5.vue')),
  },
}
</script>
