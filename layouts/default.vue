<template>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr] lg:gap-8">
      <div class="h-32 rounded-lg bg-gray-200">
        <Sidebar />
      </div>
      <div class="h-32 rounded-lg">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <slot />
        </div>
      </div>
    </div>
  </template>