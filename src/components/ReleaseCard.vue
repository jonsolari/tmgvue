<template>
<div class="card">
    <a :href="this.marketLink">
    <img class="cover" :src="this.imagePath">
    <p class="two"><strong>{{this.info.title}}</strong></p>
    <p>{{this.artist}}</p>
    <p>Lowest Price:</p> 
    <p class=price>{{this.lowestPrice}}</p>
    </a>
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
            cover: '',
            artist: 'the Mountain Goats'
        }
    },
    computed: {
        imagePath(){
            return require('../assets/' + this.info.title + '.jpg')
        },
        marketLink(){
            return 'http://www.discogs.com/sell/release/' + this.info.id
        },
        lowestPrice(){
            if (this.info.lowest_price != null){
                return "$" + this.info.lowest_price;
            }
            else {
                return 'Not Available';
            }
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
  width: 35rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: white;
  margin: 1rem
}
.two{
  font-size: 2.2rem;
  line-height: 3rem;
}
.cover{
	height: 349px;
	margin: 1rem auto;
}
.price{
	color: #32585D;
	font-size: 2.2rem;
	line-height: 3rem;
}
</style>