
<template>
<section>
    
        <div class="form-wrapper">
    <form @submit.prevent="searchMovie">
             <input v-model="searchValue" type="text" placeholder="search for a movie">
             <button>search</button> 
    </form>
    </div>
</section>
<movie v-for="movie in movies" :key="movie"     :myMovies="movie"/>

</template>
<script>
    import movie from './movie.vue'
export default{
    name:"seachButton",
    components:{
   movie
    },
data(){
    return{
        searchValue:"",
        movies:[],
        apiKey:"11fc4a08",
        showDetails:false,
        plotMovie:[]
    }
},
methods: {
    searchMovie(){
        fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.searchValue}`)
        .then((res)=>res.json())
        .then((data)=>{
            this.movies=data.Search
            console.log(data)
        })
        this.searchValue=""
        console.log(this.movies)
      
    },
},
}
</script>
<style>
.form-wrapper{
    display:flex;
    align-content: center;
    justify-content: center;
    flex-direction:row;

}
input{
    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
    border-style:none;
    height:30px;
    border: 4px solid  #37dd76 ;
    border-radius: 15px;
    background-color: #352b41;
    color: white;
    font-weight: 500;
    text-align: center;
    z-index:1px;
     
}
button{
    color:white;
    background-color:#2cdd70;
    text-align: center;
    width:177px;
    height: 30px;
    border-style:none;
    border-radius:25px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    font-size:25px;
    font-weight: 400;
    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
button:hover{
    border-style:none;
}
</style>