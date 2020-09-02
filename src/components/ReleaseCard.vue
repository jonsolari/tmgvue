<template>
<div class="card">
    <a :href="this.info.url">
    <img class="cover" :src="this.imagePath">
    <strong><p class="two">{{this.title}}</p></strong>
    <p>Lowest Price for LP:</p> 
    <p class=price>{{this.lowestPrice}}</p>
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
    computed: {
        imagePath(){
            return require('../assets/' + this.title + '.jpg')
        },
        lowestPrice(){
            if (this.info.price != null){
                return "$" + this.info.price.toFixed(2);
            }
            else {
                return 'Not Available';
            }
        }
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