
let rockArtists = ['eminem','queen','u2', 'thepolice','eagles','thedoors', 'oasis','thewho']
let popArtists = ['maroon5', 'coldplay','onerepublic','jamesblunt','katyperry','ariangrande']
let hiHopArtists = ['eminem', 'snoopdogg','lilwayne', 'drake','kanyewest']
window.onload = function getArtists () {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];
    while(rockRandomArtists < 4){
        let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]
        if (!rockArtists.includes(artist)){
            rockArtists.push(artist)
        }
    }
    while(popRandomArtists < 4){
        let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
        if (!popArtists.includes(artist)){
            popArtists.push(artist)
        }
    }
    while(hipHopRandomArtists < 4){
        let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
        if (!hipHopArtists.includes(artist)){
            hipHopArtists.push(artist)
        }
    }

    for(let j= 0; j<rockRandomArtists.length; j++){

        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${rockRandomArtists[j]}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d"
            }
        }).then(response => {
            console.log(response);
        }).then(artists =>{
            console.log(artists)
        })
        
        

    }
   
}

