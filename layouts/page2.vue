<template>
  <div class="overflow-x-hidden">
    <PageNavbar class="h-[64px] max-h-[64px]" />
    <main>
      <h1>Layout 2</h1>

      <AlertBanner type="success" title="This is a page for testing purposes"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        class="mb-6" />

      <Card class="mb-6">
        <CardContent>
          <CardTitle class="capitalize" text="validate github profile" />
          <p class="mb-2">
            type your github username and click the button to validate.
          </p>
          <div class="flex">
            <FormTextInput v-model="username" class="w-full md:w-1/3">
              <template #prefix-disabled>
                <span class="flex-1 px-4 py-2">github.com/</span>
              </template>
            </FormTextInput>
          </div>
        </CardContent>
        <CardFooter class="flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between">
          <p>
            Learn more about
            <Link class="underline font-bold capitalize" text="github users api"
              href="https://docs.github.com/en/rest/users/users#get-a-user" />
          </p>
          <Button class="capitalize" size="sm" type="opposite" text="validate" @click="validate" />
        </CardFooter>
      </Card>
      <PageContent>
        <slot />
      </PageContent>
    </main>
    <PageFooter class="h-[52px] md:h-[42px]" />
  </div>
</template>

<script>
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
    AlertBanner: defineAsyncComponent(
      () => import('~/components/awesome/AlertBanner.vue'),
    ),
    Card: defineAsyncComponent(() => import('~/components/awesome/Card')),
    CardContent: defineAsyncComponent(
      () => import('~/components/awesome/Card/Content.vue'),
    ),
    CardTitle: defineAsyncComponent(
      () => import('~/components/awesome/Card/Title.vue'),
    ),
    FormTextInput: defineAsyncComponent(
      () => import('~/components/awesome/Form/TextInput.vue'),
    )
  },

  data() {
    return {
      username: 'aaaa'
    }
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
