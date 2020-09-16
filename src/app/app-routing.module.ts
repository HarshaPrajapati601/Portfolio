import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ResumeComponent } from './resume/resume.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent,data: {animation: 'HomePage'}},
  // { path: '', component: HomeComponent,data: {animation: 'HomePage'}, canActivate:[AuthGuard] },
  {path:'login',component : NewUserComponent },
  {path:'register',component : LoginComponent ,data: {animation: 'NewLoginPage'}},
  {path:'gallery',component:GalleryComponent},
  {path:'resume',component:ResumeComponent},
  { path: 'assets/file.pdf', redirectTo: '../assets/file.pdf'},
  


  { 
     path: '**', redirectTo: '' 

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
