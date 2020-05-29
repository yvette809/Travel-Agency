//let category = ["drama", "horror", "comedy"] 
const url = "https://striveschool.herokuapp.com/api/movies/";
// for the homepage

const getMovies = async () =>{
let response = await fetch(url ,  {
    "method":"GET",
      "headers":{
        "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')
      }  }); 
 
      const data =  await response.json()
      return data
      
}

 
// for the backoffice
const createMovie = async (obj) => {
let response = await fetch(url,{
        method: "POST",
        body: JSON.stringify(obj),
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')  }),
      });
      return response;
      console.log(response)
}



// for the details page

async function displayMovieDetail (id){
     let response = await fetch(url + id,  {
        "method":"GET",
          "headers":{
            "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')
          }  }); 
     
          const data =  await response.json()
          return data
          
     }
 
// // delete function
 const deleteMovie = async (id)=> {
    let response = await fetch(url + id,{
        method: "DELETE",
        "headers":{
          "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')
        }  }); 

       return response;
    
}
 

 // Edit function
 const editMovie = async(id,myMovie) =>{
    let response = await fetch(url,{
        method: "PUT",
        body: JSON.stringify(),
         headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa('user30:E6tYs6PBzufRfsVP')  }),
      });
      return response;
      
 }
