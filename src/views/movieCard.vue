<template>
  <div  class="movie-wrapper">
         <div  class="movie-card">
   <div class="image">
    <img class="image-tag" v-bind:src="movie.Poster" alt="loading image ">
   
   </div>
   <h4 class="title">{{movie.Title}}</h4>
   <div class="type-movie">
       {{movie.Type}}
    </div>
    </div>
    </div>
    <div class="movie-description">
        {{movie.Plot}}
    </div>
</template>
<style>
    .movie-description{
        color: white;
        line-height: 1.6em;
        margin: 20px;
    }

</style>
<script>
import { ref } from '@vue/reactivity'
export default{

    data(){
        return{
            id:this.$route.params.id,
            apiKey:"11fc4a08",
            movie:[]

        }

    },
    created(){
        fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${this.id}`)
           .then(res=>res.json())
           .then((data)=>{
            console.log(data)
            this.movie=data
            console.log(this.movie)
           });
    }
}

</script>