<script>
import pageHeader from "./components/pageHeader.vue"
import hero from "./components/hero.vue"
import searchButton from "./components/searchButton.vue"
export default{
name:"App",
components:{
pageHeader,
hero,
searchButton,
}
}
</script>

<template>
  <pageHeader/>
  <hero/>
  <searchButton/>
</template>

<style>

</style>
