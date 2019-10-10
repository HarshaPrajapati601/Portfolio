import { Component, OnInit,ViewChild } from '@angular/core';
import { Iemployee } from '../employee';
import { EmployeeService } from '../common/service/emp/employee.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedRadioValueReciever:string='All';
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 
  Userinput:string="Hi Harsha";
  employees:Iemployee[]=[
    {code:'emp01', name:'Harsha',gender:'female', salary:4566,dateOfBirth:'6/6/1998'},
    {code:'emp02', name:'Sahil', gender:'male',salary:49335734,dateOfBirth:'5/6/2000'},
    {code:'emp03', name:'Roro',gender:'male', salary:545433,dateOfBirth:'6/10/2013'},
    {code:'emp04', name:'Arindam',gender:'male', salary:111111,dateOfBirth:'6/10/2198'},
    {code:'emp05', name:'Preeti',gender:'female', salary:4566,dateOfBirth:'6/7/1998'},
    {code:'emp06', name:'Jaya', gender:'female',salary:55555,dateOfBirth:'5/12/1000'},
    {code:'emp07', name:'laltia',gender:'female', salary:34,dateOfBirth:'2/11/2093'},
    {code:'emp08', name:'baby',gender:'female', salary:1,dateOfBirth:'2/10/2192'}
  ];;
  displayedColumns: string[] = [
  'code',
  'name',
  'gender',
  'salary',
  'dateOfBirth'
];
dataSource = new MatTableDataSource(this.employees);
  constructor(private Empservice: EmployeeService) {
  
   }

   getEmployees():void{
      
  }
  trackByOrder(index:number,employee:any):string{
 return employee.code;

  }
  getTotalEmp():number{
    return this.employees.length;
   }
  getTotalFemaleEmp():number{
    return this.employees.filter(e=> e.gender== 'female').length;
   }
  getTotalMaleEmp():number{
    return this.employees.filter(e=> e.gender== 'male').length;
   }
    EmpCountOnSelectedBtnChange(Selectedvalue:string){
      this.selectedRadioValueReciever= Selectedvalue;
      console.log("parentvalue", this.selectedRadioValueReciever)
    }
    // getValuefromInput():string{
    //   return this.Userinput = 
    // }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort= this.sort;
    console.log(this.dataSource);
    this.employees = this.Empservice.getEmployees();
    console.log(this.employees);
  }

}
