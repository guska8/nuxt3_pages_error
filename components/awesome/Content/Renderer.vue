<script lang="ts" setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  pageTitle: {
    type: String,
    default: '',
  },
})

const { data } = await useAsyncData(props.path, () =>
  queryContent(props.path).findOne(),
)
if (!data) abortNavigation('404')
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="pageTitle" class="capitalize" />
    </PageHeader>
    <PageSection>
      <ContentRenderer :value="data as any" />
    </PageSection>
  </PageWrapper>
</template>

<script lang="ts">
export default defineComponent({
  components: {
    PageWrapper: defineAsyncComponent(
      () => import('~/components/layouts/Page/Wrapper.vue'),
    ),
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
