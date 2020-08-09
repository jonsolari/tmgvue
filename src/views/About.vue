<template>
<div class="about">
  <p>This website exists because I wanted to get some practice with <a :href="this.vuejs">Vue.js</a>, and also because I wanted to make a <a :href="this.bitcoin">dumb bitcoin joke</a>.</p>
  <p>A python script runs every 15 minutes, pinging the Discogs API and scraping eBay to compare their lowest current prices for some very rare Mountain Goats releases, and then populates links to those listings. The code is <a :href="this.github">here</a> if you'd like to take a look.</p>
  <p>Many of the releases shown here are available digitally, so please go support the artist on <a :href="this.bandcamp">Bandcamp</a> or <a :href="this.itunes">iTunes</a>. Some of the 4AD albums appear to be on <a :href="this.hdtracks">HDTracks</a> if 96/24 is your thing.</p><br/>
  <p>If you'd like to hire me, or perhaps give me your vinyl copy of <em>Sweden</em>, my email address is <strong>jon.s.solari at gmail.</strong></p>
  </div>
</template>

<script>
export default{
data(){
  return{
    vuejs: 'https://vuejs.org/',
    bitcoin: 'https://web.archive.org/web/20130112214437/https://mtgox.com/',
    github: 'https://github.com/jonsolari/tmgvue',
    bandcamp: 'https://themountaingoats.bandcamp.com/',
    itunes: 'https://music.apple.com/ca/artist/the-mountain-goats/4978336',
    hdtracks: 'https://www.hdtracks.com/#/artist/The%20Mountain%20Goats'
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

strong{
  font-size: 2.3rem;
  font-weight: bold;
}
em{
  font-size: 2.3rem;
  font-style: italic;
}
</style>