<template>
<div class="card">
</div>
</template>

<script>
export default{
    name: 'ReleaseCard',
    props: {
        url: {
            type: String
        }
    }
},
data(){
    title: response.title,
    artist: "the Mountain Goats",
    price: response.lowest_price ? `$${response.lowest_price}` : "Not Available.",
    cover: `/img/${response.title}.jpg`,
    market: `http://www.discogs.com/sell/release/${response.id}`
}
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