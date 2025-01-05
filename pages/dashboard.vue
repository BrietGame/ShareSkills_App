<template>
    <div>
        <header class="bg-white mb-12">
            <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Tableau de bord</h1>
            
                    <p class="mt-1.5 text-sm text-gray-500">
                        Consultez les statistiques de vos formations
                    </p>
                </div>
            </div>
        </header>
        
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
</script>