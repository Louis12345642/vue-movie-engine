<script>
  import pageHeader from "./components/pageHeader.vue"
export default{
name:"App",
components:{
  pageHeader,

}
}
</script>

<template>
<pageHeader/>
<router-view/>
</template>

<style>

</style>
