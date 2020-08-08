<template>
<div class="page">
    <MultiformatCard title="New Asian Cinema" v-bind:info="this.figures[5]" />
    <MultiformatCard title="Isopanisad Radio Hour" v-bind:info="this.figures[6]" />
    <MultiformatCard title="Devil In The Shortwave" v-bind:info="this.figures[7]" />
    <MultiformatCard title="Satanic Messiah EP" v-bind:info="this.figures[9]" />
    <MultiformatCard title="Moon Colony Bloodbath" v-bind:info="this.figures[10]" />
    <MultiformatCard title="The Life of the World to Come" v-bind:info="this.figures[14]" />
    <MultiformatCard title="Songs for Pierre Chuvin" v-bind:info="this.figures[15]" />
    <MultiformatCard title="Jam Eater Blues" v-bind:info="this.figures[16]" />
    <MultiformatCard title="All Survivors Pack" v-bind:info="this.figures[17]" />
    <MultiformatCard title="Steal Smoked Fish" v-bind:info="this.figures[18]" />
    
</div>
</template>

<script>
import MultiformatCard from '@/components/MultiformatCard.vue';
import json from '@/json/data.json';

export default{
    name: 'Scarcities',
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