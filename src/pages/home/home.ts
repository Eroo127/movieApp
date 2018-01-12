import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular'; //import the modal controller and Ionic page decorator
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

@IonicPage() //apply the IonicPage decorator
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    //create an empty array
   genres:any[]=[];

  constructor(public navCtrl: NavController, public movieService:MovieServiceProvider, 
              public modalCtrl:ModalController) {
  }

//The ionViewDidLoad function loads as soon as the page is open
  ionViewDidLoad() {

    //call the get Genres function and store the response in our genres array
    this.movieService.getGenres()
    .subscribe(data => {

      this.genres = data.genres;
      
    });

    console.log('ionViewDidLoad InTheatresPage');
  }


  launchMoviesByGenrePage(genre){

    //Uses the NavController to navigate to the next page and pass in the genre object choosen by the user
    this.navCtrl.push('MoviesByGenrePage', genre);

  }

  launchSearchModal(){


    //uses the modal controller to launch the search modal
    let modal = this.modalCtrl.create('SearchPage');

    modal.present();

  }

}
