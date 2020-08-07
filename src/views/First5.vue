<template>
<div class="page">
    <ReleaseCard name="Zopilote Machine" v-bind:price="this.figures[0].price" v-bind:url="this.figures[0].url" />
    <!-- <ReleaseCard url='https://api.discogs.com/releases/1191772' />
    <ReleaseCard url='https://api.discogs.com/releases/744810' />
    <ReleaseCard url='https://api.discogs.com/releases/523351' />
    <ReleaseCard url='https://api.discogs.com/releases/1217804' /> -->
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