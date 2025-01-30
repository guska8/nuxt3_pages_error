<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <AwesomeContentDoc empty-tip="Post im empty" />
  </PageWrapper>
</template>

<script lang="ts">
export default defineComponent({
  components: {
    PageWrapper: defineAsyncComponent(
      () => import('~/components/layouts/Page/Wrapper.vue'),
    ),
  },
})
</script>
