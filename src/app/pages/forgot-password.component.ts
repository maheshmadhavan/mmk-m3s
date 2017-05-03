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
	constructor() { }
  
  onResetPass() {
    this.notValid = "";
    if(this.forgotForm.valid){
      if(this.forgotForm.value.email === 'demo@premiergp.com'){
        this.success = true; 
        this.forgotForm.reset(); 
      }
      else{
        this.notValid ="The email id does not exists"; 
      }
    }      
    else{
      this.notValid ="Please enter a valid email!"; 
    } 
  
     
  }
}