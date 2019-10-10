import { BrowserModule } from '@angular/platform-browser';
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
import { ButtonsShowComponent } from './home/buttons-show/buttons-show.component'
import{FormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http'
// import { AlertService } from './common/service/alert.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NewUserComponent } from './new-user/new-user.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UserTablesComponent } from './user-tables/user-tables.component';
import { ResumeComponent } from './resume/resume.component';



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
    ResumeComponent
    
  
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
