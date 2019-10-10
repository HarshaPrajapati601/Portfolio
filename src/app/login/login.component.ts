import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormControlName} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 empFormGroup: FormGroup;
 images :any[]= [
   {path:'../../assets/images/profilesimg/boy1.jpeg',name:'emp01', figCaption:'Art is Not what you SEE'},
   {path:'../../assets/images/profilesimg/girl2.png',name:'emp01',figCaption:'Design #ART #Creativity'},
   {path:'../../assets/images/profilesimg/girl3.png',name:'emp01',figCaption:'Color it'},
 ]

  constructor() { }
//Rective form using insatnces of FG and FC
  ngOnInit() {
    this.empFormGroup = new FormGroup({
      fullName :new FormControl(),
      Email:new FormControl(),
      Phone:new FormControl(),
      DateOfBirth:new FormControl(),
      Password:new FormControl(),
      Gender :new FormControl(),
      //CREATE SKILLS FORM GROUP
      skills : new FormGroup({
        skillName: new FormControl(),
        expInYears: new FormControl(),
        proficiency :new FormControl()
      })
    });

    }
    onSubmit():void{
      console.log(this.empFormGroup.value);
    }
    //use SetVale() to update all the form controls
    loadData():void{
      this.logKeyValuePairs(this.empFormGroup);
      // this.empFormGroup.setValue({
      //   fullName :'Sahil Prajapti',
      //   Email:'hpagetMaxListeners@.com',
      //   Phone:886435485205,
      //   DateOfBirth:new Date('2019-05-01').toDateString(),
      //   Password:'happ4545',
      //   Gender :'Male',
      //   skills:{
      //     skillName: 'Html5, Angular',
      //     expInYears: 4.5,
      //     proficiency :'Intermediate'
      //   }
   
      // });
          //use patchValue() to update only few form controls
    }
    logKeyValuePairs(group:FormGroup):void{
      Object.keys(group.controls).forEach((key:string)=>{
       const abstractControl= group.get(key);
       if(abstractControl instanceof FormGroup){
         this.logKeyValuePairs(abstractControl);
       }
       else{
         abstractControl.markAsDirty();
         console.log("key" + key + "VAlUE : " +abstractControl.value);
       }
      })
    }
  }


