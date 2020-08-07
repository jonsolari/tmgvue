<template>
<div class="card">
    <a :href="this.info.url">
    <img class="cover" :src="this.imagePath">
    <strong><p class="two">{{this.title}}</p></strong>
    <p class="three">{{this.artist}}</p>
    <p>Lowest Price for LP:</p> 
    <p class=price>{{this.info.price}}</p>
    </a>
</div>
</template>

<script>
export default{
    name: 'ReleaseCard',
    props: {
        title: {
            type: String
        },
        info:{
            type: Object
        }
    },
    data(){
        return { 
            // info: { 
                
            // },
            artist: 'the Mountain Goats'
        }
    },
    computed: {
        imagePath(){
            return require('../assets/' + this.info.title + '.jpg')
        },
        // marketLink(){
        //     return 'http://www.discogs.com/sell/release/' + this.info.id
        // },
        lowestPrice(){
            if (this.price != null){
                return "$" + this.price;
            }
            else {
                return 'Not Available';
            }
        }
    }
    // created(){
    //     fetch(this.url)
    //         .then(response => response.json())
    //         .then(response => (this.info = response))
    //         .catch(err => console.log(err))
    // }
    
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
	transform: scale(1.01);
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
.three{
  font-size: 3.8rem;
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

@media only screen and (max-width: 645px){
  .card{
      width: 28rem;
  }
  .cover{
      height: 280px;
  }
}
</style>