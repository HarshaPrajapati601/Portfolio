import { Component, OnInit,ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {trigger,state,style,animate,keyframes,transition} from '@angular/animations'
import { AlertService } from '../common/service/alert.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private subscription:Subscription;
  message :any;
  state:string ='small';
  constructor(config: NgbCarouselConfig,
    private alertService: AlertService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.subscription = this.alertService.getMessage()
                        .subscribe(msgData=>{
                          this.message= msgData;
                        })
  }
  AnimateMe(){
    this.state = (this.state == 'small' ? 'large' : 'small');
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
