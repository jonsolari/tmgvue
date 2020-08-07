<template>
<div class="page">
    <ReleaseCard title="Zopilote Machine" v-bind:info="this.figures[0]" />
    <ReleaseCard title="Sweden" v-bind:info="this.figures[1]" />
    <ReleaseCard title="Nothing For Juice" v-bind:info="this.figures[2]" />
    <ReleaseCard title="Full Force Galesburg" v-bind:info="this.figures[3]" />
    <ReleaseCard title="The Coroner's Gambit" v-bind:info="this.figures[4]" />
</div>
</template>

<script>
import ReleaseCard from '@/components/ReleaseCard.vue';
import json from '@/json/data.json';

export default{
    name: 'First5',
    components: {
        ReleaseCard
    },
    data(){
        return{
            figures: json
        }
    }
}

</script>

<style scoped>
.page{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem auto;
  max-width: 140rem;
  width: 100%;
  height: 100%;
}
</style>