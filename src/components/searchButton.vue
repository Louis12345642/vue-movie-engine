
<template>
<section>
    
        <div class="form-wrapper">
    <form @submit.prevent="searchMovie">
             <input v-model="searchValue" type="text" placeholder="search for a movie">
             <button>search</button> 
    </form>
    </div>
</section>
<section>
    <div>
    <div  class="movie-wrapper">
         <div v-for="movie in movies"  @click="detail(movie.imdbID)"  class="movie-card">
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
<div>
    
</div>

     </div>
     
    </div>
    </div>

   

    </div>
</section>
</template>
<script>
export default{
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
    detail(id){
        console.log(id)
        this.showDetails=true
        fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`)
           .then(res=>res.json())
           .then((data)=>{
            
        
           })
    }
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
.movie-wrapper{
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    
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

}

</style>