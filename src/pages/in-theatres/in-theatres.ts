import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular'; //Import the Modal controller
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';


/**
 * Generated class for the InTheatresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-in-theatres',
  templateUrl: 'in-theatres.html',
})
export class InTheatresPage {
  //create an empty array
  inTheatres:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService:MovieServiceProvider, 
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {

    //call the getInTheatres function from the movie service
    this.movieService.getInTheaters()
    .subscribe(data => {

      //store the response on our empty array
      this.inTheatres = data.results;
      
    });

    console.log('ionViewDidLoad InTheatresPage');
  }


  launchMovieDetailsPage(movie){

    //Use the Modal Contoller to launch the movie details page and pass the movie object for the movie chosen by the User
    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);

    movieModal.present();

  }

}
