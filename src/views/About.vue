<template>
<div class="about">
  <p>This website is an experiment in converting a web app from React to Vue.</p>
  <p>It pings the <a :href="this.discogs">Discogs API</a> for the lowest current prices for the first five (terribly rare) <a :href="this.mtngoats">Mountain Goats</a> albums on vinyl, as well as populating links to each marketplace listing.</p>
  <p>My code is <a :href="this.github">here</a> if you'd like to take a look.</p>
  </div>
</template>

<script>
export default{
data(){
  return{
    discogs: 'https://www.discogs.com/developers',
    mtngoats: 'https://www.mountain-goats.com/',
    github: 'https://github.com/jonsolari/tmgvue'
  }
}
}
</script>

<style scoped>
.about{
  margin: 5rem 10%;
  border: 2px dotted black;
  border-radius: 10px;
  padding: 2rem;
}

a{
  color: blue;
  margin: 1rem auto;
	font-size: 2.3rem;
}
</style>