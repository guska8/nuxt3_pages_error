<template>
  <div class="overflow-x-hidden">
    <PageNavbar class="h-[64px] max-h-[64px]" />
    <PageContent>
      <slot />
    </PageContent>
    <PageFooter class="h-[52px] md:h-[42px]" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  components: {
    PageNavbar: defineAsyncComponent(
      () => import('~/components/layouts/Page/Navbar.vue'),
    ),
    PageContent: defineAsyncComponent(
      () => import('~/components/layouts/Page/Content.vue'),
    ),
    PageFooter: defineAsyncComponent(
      () => import('~/components/layouts/Page/Footer.vue'),
    ),
  }
})
</script>
