import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  apiKey:string = '9a32bccc0995a38d7c700d0b4fa8a79d';

  constructor(public http: Http) {
    console.log('Hello MovieServiceProvider Provider');
  }

   getPopularMovies(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
                        .map(res=> res.json());
  }

  getInTheaters(){

    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&language=en-US&primary_release_date.gte=2017-04-15&primary_release_date.lte=2017-12-25&include_adult=false&include_video=false&page=1')
                        .map(res=> res.json());

  }

  searchMovies(searchStr:string){

    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key='+this.apiKey+'&query='+searchStr+'&language=en-US&primary_release_date.gte=2017-04-15&primary_release_date.lte=2017-12-25&include_adult=false&include_video=false&page=1')
                        .map(res=>res.json());

  }

  getMovie(id){

    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apiKey+'&language=en-US')
                        .map(res=>res.json());

  }

   getGenres(){

    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+this.apiKey+'&language=en-US')
                        .map(res=>res.json());

  }

   getMoviesByGenre(genreId){

    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+genreId)
                        .map(res=>res.json());

  }



}
