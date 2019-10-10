import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {trigger,state,style,animate,keyframes,transition} from '@angular/animations'
import { AlertService } from '../common/service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  // animations:[
  //     trigger('myAwsomeAnimation',[
  //       state('small',style({
  //         trasform:'scale(1)'
  //       })),
  //       state('large',style({
  //         trasform:'scale(1.4)'
  //       })),
  //       transition('small=>large',animate('400ms ease-in' )), //it defines the length ofthe animation
  //     ])
  // ]
})
export class AlertComponent implements OnInit {
  private subscription:Subscription;
  message :any;
  state:string ='small';
  constructor(private alertService: AlertService) { }

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
