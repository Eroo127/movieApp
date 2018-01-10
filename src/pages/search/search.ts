import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';
import { MovieDetailsPage } from '../movie-details/movie-details';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(

)
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  results:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService:MovieServiceProvider, 
              public modalCtrl:ModalController, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }



  searchMovies(ev: any) {


    // set val to the value of the searchbar
    let val = ev.target.value;

      this.movieService.searchMovies(val).subscribe(data=>{

      console.log(data.results);
      this.results = data.results;
    });
     
  }

  launchMovieDetailsPage(movie){

    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);

    movieModal.present();

  }

   dismiss() {
    this.viewCtrl.dismiss();
  }


}
