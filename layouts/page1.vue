<template>
  <div class="overflow-x-hidden">
    <PageNavbar class="h-[64px] max-h-[64px]" />
    <main>
      <h1>Layout 1</h1>
      <PageContent>
        <slot />
      </PageContent>
    </main>
    <PageFooter class="h-[52px] md:h-[42px]" />
  </div>
</template>

<script>
// import m1 from '~/components/m1'
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
    )
  },

  mounted () {
    // console.log('1', m1)
  },
})
</script>

<style lang="scss" scoped>
:deep() {
  main {
    margin-top: 80px;
  }
}
</style>
