<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt 3 Awesome Starter' })
</script>

<template>
  <Welcome :with-alert="true" />
</template>

<script lang="ts">
export default defineComponent({
  components: {
    Welcome: defineAsyncComponent(() => import('~/components/awesome/Welcome')),
  },
})
</script>
