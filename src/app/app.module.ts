import { BrowserModule } from '@angular/platform-browser';
import{FormsModule } from '@angular/forms';
import{ HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core';
import {SharedModule} from '../app/shared'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {empTitlePipe}  from '../app/common/emp.pipe';
import { ButtonsShowComponent } from './home/buttons-show/buttons-show.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UserTablesComponent } from './user-tables/user-tables.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ScrollSpyDirective } from '../app/home/scroll-spy.directive'
import { JwtInterceptor } from './_interceptors/jwt-interceptor';
import { ErrorInterceptor } from './_interceptors/error-interceptor';
import { fakeBackendProvider } from './_interceptors/fake-backend';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateFormComponent,
    LoginComponent,
    AlertComponent,
    empTitlePipe,
    ButtonsShowComponent,
    NewUserComponent,
    EmployeeDataComponent,
    GalleryComponent,
    CarouselComponent,
    UserTablesComponent,
    ResumeComponent,
    PortfolioComponent,
    ScrollSpyDirective,
    
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],  
//     providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

//     // provider used to create fake backend
//     fakeBackendProvider
// ],
  providers: [
    {provide : HTTP_INTERCEPTORS ,useClass :JwtInterceptor ,multi : true},
    {provide :HTTP_INTERCEPTORS ,useClass : ErrorInterceptor ,multi :true},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
