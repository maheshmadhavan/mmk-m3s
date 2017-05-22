import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['../../assets/css/custom.css']
})
export class ForgotPasswordComponent {
  @ViewChild('f') forgotForm: NgForm;
  success = false;
  notValid;
  errorflagemail = false;
	constructor() { }
  
  onResetPass() {
    this.notValid = "";
    this.errorflagemail = false; 
    this.success = false;  
    if(this.forgotForm.value.email == undefined || this.forgotForm.value.email === ""){      
      this.errorflagemail = true;
      return;
    }
    if(this.forgotForm.valid){
      if(this.forgotForm.value.email === 'demo@premiergp.com'){
        this.success = true; 
        this.forgotForm.reset(); 
      }
      else{
        this.notValid ="The email id does not exists"; 
      }
    }
  }
  
}