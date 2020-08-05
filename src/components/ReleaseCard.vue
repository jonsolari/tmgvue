<template>
<div class="card">
    <a :href="this.marketLink">
    <img class="cover" :src="this.imagePath">
    <strong><p class="two">{{this.info.title}}</p></strong>
    <p class="two">{{this.artist}}</p>
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
            artist: 'the Mountain Goats'
        }
    },
    computed: {
        imagePath(){
            console.log('../assets/' + this.info.title.replace('\'', '') + '.jpg')
            return require('../assets/' + this.info.title.replace('\'', '') + '.jpg')
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
.card:hover{
	transform: scale(1.05);
	text-align: center;
	border: 1px solid black;
	padding: 1.5rem;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-self: center;
	background-color: #F0FFFF;
	margin: 1rem
}
.two{
  font-size: 4.2rem;
  margin: auto;
}
.cover{
	height: 349px;
	margin: 1rem auto;
}
.price{
	color: #32585D;
	font-size: 4.2rem;
    margin-top: 1rem;
}
</style>