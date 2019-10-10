import { Component ,HostBinding  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './common/animation';

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
 constructor(){

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
