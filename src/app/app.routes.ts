import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AuthentificationComponent} from './authentification/authentification.component';
import { CreatecandidatComponent } from './candidat/createcandidat.component';
import {CandidatComponent} from './candidat/candidat.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

// @ts-ignore
export const routes: Routes = [
  {path:'',redirectTo : 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:AuthentificationComponent},
  {path:'candidat',component:CandidatComponent},
  {path:'createCandidat',component:CreatecandidatComponent},
];
@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeComponent


  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: []
})
export class AppModule { }
