<template>
    <RouterLink
        :to="to"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 max-w-[450px] w-full shadow-sm"
    >
            <span
            class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>
        
            <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    {{ title }}
                </h3>
        
                <p class="mt-1 text-xs font-medium text-gray-600">Par {{author.name}}</p>
            </div>
        
            <div class="hidden sm:block sm:shrink-0">
                <img
                alt=""
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="size-16 rounded-lg object-cover shadow-sm"
                />
            </div>
            </div>
        
            <div class="mt-4">
            <p class="text-pretty text-sm text-gray-500">
                {{ summary }}
            </p>
            </div>
        
            <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">{{ etat }}</dt>
                <dd class="text-xs text-gray-500">{{ publishedAt }}</dd>
            </div>
        
            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Temps de lecture</dt>
                <dd class="text-xs text-gray-500">{{ readingTime }}</dd>
            </div>
            </dl>
        </RouterLink>
</template>

<script setup>
defineProps({
    title: String,
    summary: String,
    author: {
        name: String,
    },
    to: String,
    etat: String,
    publishedAt: String,
    readingTime: String
})
</script>