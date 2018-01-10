import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesByGenrePage } from './movies-by-genre';

@NgModule({
  declarations: [
    MoviesByGenrePage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesByGenrePage),
  ],
})
export class MoviesByGenrePageModule {}
