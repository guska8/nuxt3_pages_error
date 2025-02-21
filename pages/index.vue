<script setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page1' })
useHead({ titleTemplate: '', title: awesome?.name })
</script>

<template>
  <div style="margin-top:100px">
    <Welcome :with-alert="true" />
  </div>
</template>

<script>

export default defineComponent({
  components: {
    Welcome: defineAsyncComponent(() => import('~/components/awesome/Welcome')),
  }
})
</script>
