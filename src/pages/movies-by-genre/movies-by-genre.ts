import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { MovieDetailsPage } from '../movie-details/movie-details';

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

  movies:any[]=[]
  id:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService:MovieServiceProvider, 
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {

    this.movieService.getMoviesByGenre(this.navParams.get('id'))
    .subscribe(data => {

      this.movies = data.results;
      console.log(this.movies);
      
    });

    console.log('ionViewDidLoad MoviesByGenrePage');
  }

  launchMovieDetailsPage(movie){

    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);

    movieModal.present();

  }

}
