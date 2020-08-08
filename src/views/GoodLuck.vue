<template>
<div class="page">
    <MultiformatCard title="Taboo VI: The Homecoming" v-bind:info="this.figures[11]" />
    <MultiformatCard title="On Juhu Beach" v-bind:info="this.figures[13]" />
    <MultiformatCard title="Come, Come to the Sunset Tree" v-bind:info="this.figures[12]" />
</div>
</template>

<script>
import MultiformatCard from '@/components/MultiformatCard.vue';
import json from '@/json/data.json';

export default{
    name: 'GoodLuck',
    components: {
        MultiformatCard
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