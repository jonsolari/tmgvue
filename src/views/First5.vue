<template>
<div class="page">
    <h1>THE FIRST FIVE</h1>
    <ReleaseCard url='https://api.discogs.com/releases/1601354'/>
</div>
</template>

<script>
import ReleaseCard from '@/components/ReleaseCard.vue';

export default{
    name: 'First5',
    components: {
        ReleaseCard
    }
}
</script>

<style scoped>
.page{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem;
  width: 100%;
  height: 100%;
}
</style>