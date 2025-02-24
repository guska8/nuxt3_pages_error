<script setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'empty' })
useHead({ titleTemplate: '', title: awesome?.name })
</script>

<template>
  <div style="margin-top:100px">
    <Welcome />
  </div>
</template>

<script>

export default defineComponent({
})
</script>
