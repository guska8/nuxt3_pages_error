<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: 'Posts' })
// query
// const query: QueryBuilderParams = { path: '/post' }
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Posts" class="capitalize" />
    </PageHeader>
    <PageSection>
      <ContentList path="/post">
        <template #default="{ list }">
          <div
            v-for="article in list"
            :key="article._path"
            class="hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2] mb-4"
          >
            <div class="mt-1 text-gray-600 dark:text-gray-400 text-right">
              <div>{{ article.date }}</div>
              <Icon name="mdi:github-face" class="text-xs" />
              <span>{{ article.author }}</span>
            </div>
            <div class="flex flex-col">
              <div
                class="text-xl font-semibold text-gray-800 dark:text-gray-50"
              >
                {{ article.title }}
              </div>
              <div class="text-gray-700 dark:text-gray-300 mb-1">
                {{ article.description }}
              </div>
              <div class="flex">
                <span>learn more</span>
                <Icon name="ic:baseline-arrow-right-alt" class="text-sm" />
              </div>
            </div>
          </div>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </PageSection>
  </PageWrapper>
</template>

<script lang="ts">
export default defineComponent({
  components: {
    PageTitle: defineAsyncComponent(
      () => import('~/components/layouts/Page/Title.vue'),
    ),
    PageWrapper: defineAsyncComponent(
      () => import('~/components/layouts/Page/Wrapper.vue'),
    ),
    PageHeader: defineAsyncComponent(
      () => import('~/components/layouts/Page/Header.vue'),
    ),
    PageSection: defineAsyncComponent(
      () => import('~/components/layouts/Page/Section'),
    ),
  },
})
</script>
