import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormControlName, FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../_service/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../_service/user.service';
import { AlertService } from '../_service/alert.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 empFormGroup: FormGroup;
 loading = false;
 submitted = false;
 images :any[]= [
   {path:'../../assets/images/profilesimg/boy1.jpeg',name:'emp01', figCaption:'Art is Not what you SEE'},
   {path:'../../assets/images/profilesimg/girl2.png',name:'emp01',figCaption:'Design #ART #Creativity'}
 ]

  constructor(
    private authService :AuthenticationService,
    private router : Router,
    private userService :UserService,
    private alertService : AlertService,
    private formBUilder:FormBuilder
  ) { 
    if(this.authService.currentUserValue){
      this.router.navigate(['/']);
    }
  }
//Rective form using insatnces of FG and FC
  ngOnInit() {
    this.empFormGroup = this.formBUilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })

    // this.empFormGroup = new FormGroup({
    //   fullName :new FormControl(),
    //   Email:new FormControl(),
    //   Phone:new FormControl(),
    //   DateOfBirth:new FormControl(),
    //   Password:new FormControl(),
    //   Gender :new FormControl(),
    //   //CREATE SKILLS FORM GROUP
    //   skills : new FormGroup({
     // password: ['', [Validators.required, Validators.minLength(6)]]
    //     skillName: new FormControl(),
    //     expInYears: new FormControl(),
    //     proficiency :new FormControl()
    //   })
    // });

    }
    get f(){
      return this.empFormGroup.controls
    }
    onSubmit(){
      console.log(this.empFormGroup.value);
      this.submitted = true;

      if(this.empFormGroup.invalid){
        return;
      }
      this.loading = true;
      this.userService.register(this.empFormGroup.value)
        .pipe(first())
        .subscribe(
          data=>{
            this.alertService.success('Registration Successful',true);
            this.router.navigate(['/login']);
          },
          error=>{
            this.alertService.error(error);
            this.loading = false;
          }
          
        )
    }
    //use SetVale() to update all the form controls
    loadData():void{
      this.logKeyValuePairs(this.empFormGroup);
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


