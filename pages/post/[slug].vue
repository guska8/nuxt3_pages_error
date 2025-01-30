<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <ContentDoc empty-tip="Post im empty" />
  </PageWrapper>
</template>

<script lang="ts">
export default defineComponent({
  components: {
    ContentDoc: defineAsyncComponent(
      () => import('~/components/awesome/Content/Doc.vue'),
    ),
    PageWrapper: defineAsyncComponent(
      () => import('~/components/layouts/Page/Wrapper.vue'),
    ),
  },
})
</script>
