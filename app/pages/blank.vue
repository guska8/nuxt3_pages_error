<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Blank Page" class="capitalize" />
    </PageHeader>
    <PageSection>
      <PageSectionTitle text="Section Title" />
      <div>My Content</div>
    </PageSection>
    <PageSection>
      <PageSectionTitle text="Another Section" />
      <div>My Content</div>
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
    PageSectionTitle: defineAsyncComponent(
      () => import('~/components/layouts/Page/Section/Title.vue'),
    ),
  },
})
</script>
