<template>
    <div class="flex flex-row gap-4 flex-wrap">
        <FormationCard v-for="formation in formations" :key="formation.title" v-bind="formation"
        />
    </div>
</template>

<script setup>
import FormationCard from '~/components/FormationCard.vue'
definePageMeta({
  title: "Formations en brouillons",
  description: "Liste des formations en brouillons",
  layoutProps: {
    showSidebar: true,
    breadcrumbs: ["Accueil", "Mes formations", "Formations en brouillons"],
    customClass: "bg-gray-100",
    primaryButton: {
        label: "Créer une formation",
        to: "/formations/create",
        bgColor: "bg-indigo-600",
        external: false,
    },
    secondaryButton: {
        label: "Publiées",
        to: "/formations/pubslished",
        bgColor: "bg-gray-500",
        external: true,
    },
  },
});

let formations = ref([
    {
        title: "Formation de développement web",
        author: {
            name: "John Doe"
        },
        to: "/formations/1",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        etat: "Publiée",
        publishedAt: "12 octobre 2021",
        readingTime: "5 min"
    },
    {
        title: "Formation de développement mobile",
        author: {
            name: "Jane Doe"
        },
        to: "/formations/2",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        etat: "Publiée",
        publishedAt: "12 octobre 2021",
        readingTime: "5 min"
    },
])
</script>