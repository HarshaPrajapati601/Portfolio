import { Component, OnInit, OnDestroy ,ViewChild} from '@angular/core';
import { Iemployee } from '../employee';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator'; 
import {Subscription} from 'rxjs';
import { AlertService } from '../_service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit ,OnDestroy{
  constructor(
    private alertService : AlertService
  ) {
  }
  message:any;
  private subscription:Subscription; 
  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(msg=>{
      this.message = msg;
      console.log("in alert .ts",msg)
    });
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort= this.sort;
    // console.log(this.dataSource);
    // this.employees = this.Empservice.getEmployees();
    // console.log(this.employees);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  // selectedRadioValueReciever:string='All';
  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 
//   Userinput:string="Hi Harsha";
//   employees:Iemployee[]=[
//     {code:'emp01', name:'Harsha',gender:'female', salary:4566,dateOfBirth:'6/6/1998'},
//     {code:'emp02', name:'Sahil', gender:'male',salary:49335734,dateOfBirth:'5/6/2000'},
//     {code:'emp03', name:'Roro',gender:'male', salary:545433,dateOfBirth:'6/10/2013'},
//     {code:'emp04', name:'Arindam',gender:'male', salary:111111,dateOfBirth:'6/10/2198'},
//     {code:'emp05', name:'Preeti',gender:'female', salary:4566,dateOfBirth:'6/7/1998'},
//     {code:'emp06', name:'Jaya', gender:'female',salary:55555,dateOfBirth:'5/12/1000'},
//     {code:'emp07', name:'laltia',gender:'female', salary:34,dateOfBirth:'2/11/2093'},
//     {code:'emp08', name:'baby',gender:'female', salary:1,dateOfBirth:'2/10/2192'}
//   ];;
//   displayedColumns: string[] = [
//   'code',
//   'name',
//   'gender',
//   'salary',
//   'dateOfBirth'
// ];
// dataSource = new MatTableDataSource(this.employees);
 
//    getEmployees():void{
      
//   }
//   trackByOrder(index:number,employee:any):string{
//  return employee.code;

//   }
//   highlight(element: Iemployee) {
//     element.highlighted = !element.highlighted;
//   }
//   getTotalEmp():number{
//     return this.employees.length;
//    }
//   getTotalFemaleEmp():number{
//     return this.employees.filter(e=> e.gender== 'female').length;
//    }
//   getTotalMaleEmp():number{
//     return this.employees.filter(e=> e.gender== 'male').length;
//    }
//     EmpCountOnSelectedBtnChange(Selectedvalue:string){
//       this.selectedRadioValueReciever= Selectedvalue;
//       console.log("parentvalue", this.selectedRadioValueReciever)
//     }



}
