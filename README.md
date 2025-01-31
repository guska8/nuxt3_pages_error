## Nuxt 3 prefetch all assets & modules at the first page

npm i

npm run dev

## Problem

If you have multiple pages with async components only the components used in the current page should be fetched from in the browser. What is happening the entire project is being sent to the browser at once.

issue: https://github.com/nuxt/nuxt/issues/30825

## How to reproduce

1. open page localhost:3000/post with devtools open
2. open page localhost:3000/post2 with devtools open

The transferred size should be significantly different from each other because page 1 has async components that are not used in page 2
