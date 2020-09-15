import { Component ,HostBinding  } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from './common/animation';
import { AuthenticationService } from './_service/authentication.service';
import { Users } from './_models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;
  title = 'angular-portfolio';
  currentUser :Users
 constructor(
   private authservice : AuthenticationService,
   private route : Router
 ){
    this.authservice.currentUser.subscribe(x=> this.currentUser = x);
 }
 logout(){
   this.authservice.logout();
   this.route.navigate(['/login']);
 }
 prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}


toggleAnimations() {
  this.animationsDisabled = !this.animationsDisabled;
}

   scrollWin(x, y){
    
    window.scrollBy(x, y);
  }

}
