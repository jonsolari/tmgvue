<template>
<div class="card">
    <p>{{this.info.title}}</p>
    <p>{{this.artist}}</p>
</div>
</template>

<script>
export default{
    name: 'ReleaseCard',
    props: {
        url: {
            type: String
        }
    },
    data(){
        return {
            info: {
                
            },
            // cover: `@/assets/${this.info.title}.jpg`,
            artist: 'the Mountain Goats'
        }
    },
    created(){
        fetch(this.url)
            .then(response => response.json())
            .then(response => (this.info = response))
            .catch(err => console.log(err))
    }
}
// console.log(this.cover)
</script>


<style scoped>
.card{
  text-align: center;
  border: 1px solid black;
  padding: 1.5rem;
  width: 23rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: white;
  margin: 1rem
}
</style>