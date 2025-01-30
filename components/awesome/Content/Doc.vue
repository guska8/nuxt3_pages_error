<script lang="ts" setup>
const props = defineProps({
  emptyTip: {
    type: String,
    required: false,
    default: 'This page is empty',
  },
})
</script>

<template>
  <ContentDoc>
    <template #default="{ doc }">
      <PageHeader>
        <PageTitle :text="doc.title" />
      </PageHeader>
      <PageSection>
        <ContentRenderer :value="doc" />
      </PageSection>
    </template>
    <template #empty>
      <h1>{{ emptyTip }}</h1>
    </template>
    <template #not-found>
      <Error :code="404" wrap />
    </template>
  </ContentDoc>
</template>
<script lang="ts">
export default defineComponent({
  components: {
    Error: defineAsyncComponent(() => import('~/components/awesome/Error.vue')),
    PageHeader: defineAsyncComponent(
      () => import('~/components/layouts/Page/Header.vue'),
    ),
    PageSection: defineAsyncComponent(
      () => import('~/components/layouts/Page/Section'),
    ),
    PageTitle: defineAsyncComponent(
      () => import('~/components/layouts/Page/Title.vue'),
    ),
  },
})
</script>
