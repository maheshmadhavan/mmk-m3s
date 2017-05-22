import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls :['../app.component.css']
})
export class LoginComponent {

  flag;
  success = true;
  validationError = '';
  passType = "password";
  showHideLabel = "SHOW";
  errorflagemail = false;
  validationErrorflag = false;
  //Getting form value and assigning to loginForm	
  @ViewChild('f') loginForm: NgForm; 	
  constructor(private authService : AuthenticationService) { }

  //Validating User
  onLogin(){ 
  this.errorflagemail = false;  
  this.validationErrorflag = false;
  if (this.loginForm.value.email == null || this.loginForm.value.email == ""){
    this.errorflagemail = true;
  }
  if (this.loginForm.value.password == null || this.loginForm.value.password == ""){
    this.validationErrorflag = true;
  }    
	this.flag = this.authService.loginUser(this.loginForm.value);
	if(this.flag === false)
	{
		this.validationError = 'Authentication failed.';
		this.loginForm.reset();
    this.success = false;
	}
}
showHidePassword(){
  if(this.passType == "text"){
    this.passType = "password";
    this.showHideLabel = "SHOW";
  }else{
    this.passType = "text";
    this.showHideLabel = "HIDE";
  }

}


}
