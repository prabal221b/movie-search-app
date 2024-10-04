let api = ('https://www.omdbapi.com/?apikey=8ce80e21&t=')

let title = document.querySelector('#title');
let description = document.querySelector('#description');
let actors = document.querySelector('#actors');
let directors = document.querySelector('#directors');
let awards = document.querySelector('#awards');
let boxOfficeCol = document.querySelector('#boxOfficeCol');
let lang = document.querySelector('#lang');
let rating = document.querySelector('#rating');
let poster = document.querySelector('#poster');
let container = document.querySelector('#container');
let outerContainer = document.querySelector('#outerContainer');
let year = document.querySelector('#year');


function checkInput() {
    const movieName = document.getElementById('movieName').value;
    const searchButton = document.getElementById('searchButton');
    
    
    if (movieName.trim() !== '') {
        searchButton.disabled = false;
    } else {
        searchButton.disabled = true;
    }
    }


search=()=>{
    let movieName = document.querySelector('#movieName');
    let query = api+movieName.value;
    fetch(query).then(data => data.json()).then(data=>{

        if(data.Error){
            outerContainer.innerText = data.Error;
            container.classList.add('invisible');
        }
        else{
            
            outerContainer.innerText ="";
            container.classList.remove('invisible');
            title.innerText = data.Title;
            description.innerText ="Plot: "+data.Plot;
            actors.innerText =data.Actors;
            directors.innerText =data.Director;
            awards.innerText =data.Awards;
            boxOfficeCol.innerText =data.BoxOffice;
            lang.innerText =data.Language;
            rating.innerText =data.imdbRating;
            poster.src = data.Poster;
            year.innerText="("+data.Year+")";
        }
        
        
        
    })

}
