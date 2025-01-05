<template>
    <div>
        <section>
            <div class="flex flex-row justify-between">
                <CardStat
                title="Impressions"
                value="1112"
                percentage="56"
                 />
                 <CardStat
                title="Nouveaux élèves"
                value="120"
                percentage="56"
                 />
                 <CardStat
                title="Interactions"
                value="455"
                percentage="56"
                 />
                 <CardStat
                title="Note globale"
                value="4.5"
                percentage="56"
                 />
            </div>
        </section>
    </div>
</template>

<script>
import CardStat from '~/components/CardStat.vue'
import { defineComponent } from 'vue'

defineComponent({
    name: 'Dashboard',
    components: {
        CardStat
    }
})

definePageMeta({
  title: "Tableau de bord",
  description: "Consultez les statistiques de vos formations",
  layoutProps: {
    showSidebar: true,
    breadcrumbs: ["Accueil"],
    customClass: "bg-gray-100"
  },
});
</script>