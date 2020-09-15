import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControlName ,FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../_service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../_service/alert.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
 employeeFormGroup :FormGroup;
 fullNAmeLength=0;
 returnUrl: string;
 validationObject={
  'fullName':{
    'required':'Full Name is required',
    'minlength':'min length should be 5 charaters'
  },
  'Password':{
    'required':'Password is required'
  },
  'skillName':{
    'required':'skillName is required'
  },
  'proficiency':{
    'required':'proficiency is required'
  }
};
formErrors={
  'fullName':'',
  'Password':'',
  'skillName':'',
  'proficiency':''
}
 registerForm: FormGroup;
 submitted = false;
 loading = false;
  constructor(private fb:FormBuilder,
              private authService : AuthenticationService,
              private route : Router,
              private alertService : AlertService,
              private activateRoute : ActivatedRoute) { 
                if(this.authService.currentUserValue){
                  this.route.navigate[('/')];
                }
              }

  ngOnInit() {
    // this.employeeFormGroup= this.fb.group({
    //   userName:['',[Validators.required , Validators.minLength(4)]],
    //   Email:['',[Validators.required,Validators.email]],
    //   Password:['',[Validators.required, Validators.minLength(6)]],
    //   skills:this.fb.group({
    //     skillName:['',Validators.required],
    //     proficiency:[false,Validators.required],

    //   })
    // });
    this.employeeFormGroup = this.fb.group({
      userName: ['', Validators.required],
      Password: ['', Validators.required]
  });
         // get return url from route parameters or default to '/'
         this.returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/';
         console.log("this,returnul",this.returnUrl)
    // this.employeeFormGroup.get('fullName').valueChanges.subscribe((value : string)=>{
    //   this.fullNAmeLength =  value.length ;
    // })

  }
  loadData():void{
    this.logValidationErrors(this.employeeFormGroup);
  }
  logValidationErrors(group:FormGroup):void{
    Object.keys(group.controls).forEach((key:string)=>{
      const abstractControl = group.get(key);
      if(abstractControl instanceof FormGroup){
        this.logValidationErrors(abstractControl);
      }
      else{
        this.formErrors[key]='';
        if(abstractControl && !abstractControl.valid){
          const message = this.validationObject[key];
          console.log(message);
          console.log(abstractControl.errors);
            for(const errorKey in abstractControl.errors ){
              if(errorKey){
                this.formErrors[key] += message[errorKey] + ' ';
              }
            }
        }
        // abstractControl.markAsUntouched();
        // console.log("key" + key + "VAlUE : " +abstractControl.value);
      }
    })
  }

      // convenience getter for easy access to form fields
      // get f() { return this.employeeFormGroup.controls; }
          // convenience getter for easy access to form fields
    get f() {
       return this.employeeFormGroup.controls;
       }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.employeeFormGroup.invalid) {
            return;
        }
        this.loading = true;
         this.authService.login(this.f.userName.value , this.f.Password.value)
         .pipe(first())
         .subscribe(
           data=>{
             this.route.navigate([this.returnUrl]);
           },
           error=>{
             this.alertService.error(error);
             this.loading = false;
           } 
         )
        //display form values on success
     //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employeeFormGroup.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
