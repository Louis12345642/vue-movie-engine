<template>
    <page-header/>
    <hero/>
    <search-button/>
    
</template>
<script>
    import hero from "../components/hero.vue"
    import searchButton from "../components/searchButton.vue";


export default{
    name:"home",
    components:{
        hero,
        searchButton
    }
}
</script>
<style>

</style>