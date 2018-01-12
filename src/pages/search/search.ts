import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular'; //import the modal and view controllers
import { MovieServiceProvider } from '../../providers/movie-service/movie-service'; //import the movie service


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

  //create an empty array to hold the results of the search
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

      //Calls the searchMovies function from the movies service and stores the response in the results array
      this.movieService.searchMovies(val).subscribe(data=>{

      console.log(data.results);
      this.results = data.results;
    });
     
  }

  //
  launchMovieDetailsPage(movie){

   //Use the Modal Contoller to launch the movie details page and pass the movie object for the movie chosen by the User
    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);

    movieModal.present();

  }

   dismiss() {
    //closes the search modal and returns to the homepage
    this.viewCtrl.dismiss();
  }


}
