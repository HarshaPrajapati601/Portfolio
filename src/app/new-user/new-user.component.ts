import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControlName,FormBuilder } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
 employeeFormGroup :FormGroup;
 fullNAmeLength=0;
 validationObject={
  'fullName':{
    'required':'Full Name is required',
    'minlength':'min length should be 5 charaters'
  },
  'Email':{
    'required':'Email is required'
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
  'Email':'',
  'Password':'',
  'skillName':'',
  'proficiency':''
}
 registerForm: FormGroup;
 submitted = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.employeeFormGroup= this.fb.group({
      fullName:['',[Validators.required , Validators.minLength(4)]],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required, Validators.minLength(6)]],
      skills:this.fb.group({
        skillName:['',Validators.required],
        proficiency:[false,Validators.required],

      })
    });
    this.employeeFormGroup.get('fullName').valueChanges.subscribe((value : string)=>{
      this.fullNAmeLength =  value.length ;
    })
  //   this.registerForm = this.fb.group({
  //     title: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required],
  //     acceptTerms: [false, Validators.requiredTrue]
  // });
  }
  loadData():void{
    this.logValidationErrors(this.employeeFormGroup);
    console.log(this.formErrors);
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
  get firstname(){
    return this.employeeFormGroup.get('fullName');
  }
 
  get Email(){
    return this.employeeFormGroup.get('Email');
  }
      // convenience getter for easy access to form fields
      // get f() { return this.employeeFormGroup.controls; }
          // convenience getter for easy access to form fields
get s(){
  return this.employeeFormGroup.controls.skills;
}
    get f() {
       return this.employeeFormGroup.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.employeeFormGroup.invalid) {
            return;
        }

        //display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employeeFormGroup.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
