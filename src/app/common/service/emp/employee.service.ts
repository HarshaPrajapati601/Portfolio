import { Injectable } from '@angular/core';
import { Iemployee } from 'src/app/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees():Iemployee[]{
      return [

          {code:'emp01', name:'Harsha',gender:'female', salary:4566,dateOfBirth:'6/6/1998'},
          {code:'emp02', name:'Sahil', gender:'male',salary:49335734,dateOfBirth:'5/6/2000'},
          {code:'emp03', name:'Roro',gender:'male', salary:545433,dateOfBirth:'6/10/2013'},
          {code:'emp04', name:'Arindam',gender:'male', salary:111111,dateOfBirth:'6/10/2198'},
          {code:'emp05', name:'Preeti',gender:'female', salary:4566,dateOfBirth:'6/7/1998'},
          {code:'emp06', name:'Jaya', gender:'female',salary:55555,dateOfBirth:'5/12/1000'},
          {code:'emp07', name:'laltia',gender:'female', salary:34,dateOfBirth:'2/11/2093'},
          {code:'emp08', name:'baby',gender:'female', salary:1,dateOfBirth:'2/10/2192'}
        
      ]
  }
}
