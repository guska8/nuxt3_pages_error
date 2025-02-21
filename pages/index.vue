<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt 3 Awesome Starter' })
</script>

<template>
  <div style="margin-top:100px">
    <Welcome :with-alert="true" />
  </div>
</template>

<script lang="ts">

export default defineComponent({
  components: {
    Welcome: defineAsyncComponent(() => import('~/components/awesome/Welcome')),
  }
})
</script>
