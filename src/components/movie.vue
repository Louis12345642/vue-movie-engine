<template>
    <section>
    
<router-link :to="{name:'movie',params:{id:movie.imdbID}}">

    <div  class="movie-wrapper">
        <div class="movie-card">
   <div class="image">
    <img class="image-tag" v-bind:src="movie.Poster" alt="loading image ">
   
   </div>
   <h4 class="title">{{movie.Title}}</h4>
   <div class="type-movie">
       {{movie.Type}}
    </div>
     <div  v-if="showDetails" class="discription">
        <p>
        {{movie.Plot}}
        </p>
     </div>
    </div>
</div>

</router-link>
</section>
</template>
<script>
    import { ref } from 'vue';
export default{
    
props:['myMovies'],
    setup(prop){
        const showDetails=ref(false)
        const movie=prop.myMovies
      function detail(id){
        console.log(id)
     
        fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`)
           .then(res=>res.json())
           .then((data)=>{
           });
    }


    return{
        movie
    }
    }
}
</script>
<style>
.movie-wrapper{
      display: grid;
     grid-template-columns: 1fr 1fr 1fr;
}
.movie-card{
    background-color: #0f1538;
    margin:20px;
    border:10px;
    border-radius:10px;
    box-shadow:2px 2px 2px rgba(0,0,0 ,0.3);
}
.image{
    width: 100%;
    height:300px;
    background-color:rgb(136, 173, 34);
    border-top-right-radius:10px ;
     border-top-left-radius:10px ;

}
.image-tag{
    width: 100%;
    object-fit:cover;
    height:300px;
}
.title{
    text-align: center;
    color:rgb(255, 255, 255);
    font-family: 'Roboto Mono';
    font-size:20px;
    padding: 10px;
}
.discription{
    padding: 20px;
    text-align: center;
    color:white;
    line-height: 1.6em;
    font-size: 20px;
}
.type-movie{
    background-color: rgb(133, 5, 5);
    color: white;
    width:100px;
    height:30px;
    box-shadow:2px 2px 2px rgba(0,0,0 ,0.3);
    border-radius:5px;
    text-align: center;
    font-family: 'Roboto Mono';
    padding: 5px;
    margin-top: 50px;

}
</style>