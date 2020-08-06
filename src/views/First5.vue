<template>
<div class="page">
    <ReleaseCard url='https://api.discogs.com/releases/1601354' />
    <ReleaseCard url='https://api.discogs.com/releases/1191772' />
    <ReleaseCard url='https://api.discogs.com/releases/744810' />
    <ReleaseCard url='https://api.discogs.com/releases/523351' />
    <ReleaseCard url='https://api.discogs.com/releases/1217804' />
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
  max-width: 140rem;
  width: 100%;
  height: 100%;
}
</style>