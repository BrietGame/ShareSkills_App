<template>
    <div>

        <p>test</p>
    </div>
</template>

<script setup>
definePageMeta({
  title: "Formations publiées",
  description: "Liste des formations publiées",
  layoutProps: {
    showSidebar: true,
    breadcrumbs: ["Accueil", "Mes formations", "Formations publiées"],
    customClass: "bg-gray-100",
    primaryButton: {
        label: "Créer une formation",
        to: "/formations/create",
        bgColor: "bg-indigo-600",
        external: false,
    },
    secondaryButton: {
        label: "Archivées",
        to: "/formations/archived",
        bgColor: "bg-gray-500",
        external: true,
    },
  },
});
</script>