import { Component, OnInit,ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, transition, animate, style, state } from '@angular/animations';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator'; 
import { AlertService } from '../_service/alert.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
  trigger(
    'slideView',
    [
      state('true', style({ transform: 'translateY(100%)', opacity: 0 })),
      state('false', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('0 => 1', animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))),
      transition('1 => 1', animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))),
    ]),

  trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateY(100%)', opacity: 0 }),
      animate('800ms ease-in', style({ transform: 'translateY(0%)', 'opacity': 1 }))
    ]),
    
    transition(':leave', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('600ms ease-in', style({ transform: 'translateY(100%)', 'opacity': 0 }))
    ])
  ])
]
})
export class HomeComponent implements OnInit {
  private subscription:Subscription;
  usersList:any= [];
  displayedColumns: string[] = [
    'id',
    'name',
    'full_name',
    'commits_url'

  ];
  dataSource = new MatTableDataSource(this.usersList);
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 
  message :any;
  state:string ='small';
  show: boolean = true;
  currentSection = 'section1';
  rotatearrow:boolean =false;

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }
  toggle(evt): void {
    this.show = !this.show;
    this.rotatearrow =!this.rotatearrow;
  }
  constructor(
    private alertService: AlertService) {
    // customize default values of carousels used by this component tree
    // config.showNavigationArrows = false;
    // config.showNavigationIndicators = false;
  }

  ngOnInit() {
   
    this.subscription = this.alertService.getMessage()
                        .subscribe(msgData=>{
                          this.message= msgData;
                        });
      //  this._empService.getUsersGit()
      //  .subscribe((responseData:any)=>{
      //    this.usersList= responseData;
      //    console.log(this.usersList);
        
      //  })     
      //  this.dataSource.paginator = this.paginator;
      //  this.dataSource.sort= this.sort;
      //  console.log(this.dataSource.paginator);   
     
      //  console.log(this.dataSource);         

  }
  
  AnimateMe(){
    this.state = (this.state == 'small' ? 'large' : 'small');
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
