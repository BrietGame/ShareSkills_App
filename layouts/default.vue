<template>
    <div class="grid grid-cols-1 lg:grid-cols-[220px_1fr]">
      <div class="h-32 rounded-lg bg-gray-200">
        <Sidebar />
      </div>
      <div class="h-32 rounded-lg">
        <header class="border-b border-gray-200 bg-gray-50">
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">{{ title }}</h1>
          
                  <p v-if="description" class="mt-1.5 text-sm text-gray-500">
                      {{ description }}
                  </p>
                </div>
        
                <div class="flex items-center gap-4">
                  <RouterLink
                      class="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                      :to="layoutProps.secondaryButton.to"
                      v-if="layoutProps.secondaryButton"
                  >
                      <span class="text-sm font-medium"> {{ layoutProps.secondaryButton.label }} </span>
          
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      v-if="layoutProps.secondaryButton.external"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                  </RouterLink>
        
                  <RouterLink
                      class="inline-flex items-center justify-center gap-1.5 rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                      :to="layoutProps.primaryButton.to"
                      v-if="layoutProps.primaryButton"
                  >
                      <span class="text-sm font-medium"> {{ layoutProps.primaryButton.label }} </span>

                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      v-if="layoutProps.primaryButton.external"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                  </RouterLink>
                </div>
            </div>
            </div>
        </header> 
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <slot />
        </div>
      </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();
const title = ref(route.meta.title || 'Titre par défaut');
const description = ref(route.meta.description || '');
const layoutProps = ref(route.meta.layoutProps || {});

// Mettre à jour les propriétés dynamiques lorsque la route change
watch(
  () => route.fullPath, // Observer la route complète
  () => {
    title.value = route.meta.title || 'Titre par défaut';
    description.value = route.meta.description || '';
    layoutProps.value = route.meta.layoutProps || {};
  }
);
</script>