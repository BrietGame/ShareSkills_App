<template>
    <article class="rounded-lg border border-gray-100 bg-white p-6">
    <div>
      <p class="text-sm text-gray-500">{{title}}</p>
  
      <p class="text-2xl font-medium text-gray-900">{{ value }}</p>
    </div>
  
    <div class="mt-1 flex gap-1 text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
  
      <p class="flex gap-2 text-xs">
        <span class="font-medium"> {{percentage}}% </span>
  
        <span class="text-gray-500"> Since last week </span>
      </p>
    </div>
  </article>
</template>

<script>
import { defineProps } from 'vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    percentage: {
        type: String,
        required: true
    }
})
</script>