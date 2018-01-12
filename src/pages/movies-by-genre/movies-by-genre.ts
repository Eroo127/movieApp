import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular'; //Import the Modal controller and NavParams
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';


/**
 * Generated class for the MoviesByGenrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-by-genre',
  templateUrl: 'movies-by-genre.html',
})
export class MoviesByGenrePage {

  //create an empty array
  movies:any[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService:MovieServiceProvider, 
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {

    //call the getMoviesByGenre function and use NavParams to get the id from genre object we passed in from our homepage
    this.movieService.getMoviesByGenre(this.navParams.get('id'))
    .subscribe(data => {

      //store the response on our empty array
      this.movies = data.results;
      console.log(this.movies);
      
    });

    console.log('ionViewDidLoad MoviesByGenrePage');
  }


  launchMovieDetailsPage(movie){

    //Use the Modal Contoller to launch the movie details page and pass the movie object for the movie chosen by the User
    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);

    movieModal.present();

  }

}
