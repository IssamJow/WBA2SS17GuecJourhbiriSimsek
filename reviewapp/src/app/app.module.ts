import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReview } from '../pages/add-review/add-review';
import { Reviews } from '../providers/reviews';
import { HttpModule } from '@angular/http'; 



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddReview
  ],
  imports: [
    BrowserModule,
    HttpModule
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddReview
  ],
  providers: [Reviews]
})
export class AppModule {}

