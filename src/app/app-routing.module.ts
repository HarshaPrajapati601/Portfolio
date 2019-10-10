import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,data: {animation: 'HomePage'} },
  { path: 'newUserLogin',      component: LoginComponent ,data: {animation: 'NewLoginPage'}},
  {path:'login',component:NewUserComponent,data: {animation: 'LoginPage'} },
  {path:'gallery',component:GalleryComponent},
  {path:'carousel',component:CarouselComponent},
  {path:'resume',component:ResumeComponent},
  { path: 'assets/file.pdf', redirectTo: '../assets/file.pdf'},
  

  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
