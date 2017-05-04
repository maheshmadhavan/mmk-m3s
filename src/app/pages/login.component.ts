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
  showHideLabel = "SHOW"
  //Getting form value and assigning to loginForm	
  @ViewChild('f') loginForm: NgForm; 	
  constructor(private authService : AuthenticationService) { }

  //Validating User
  onLogin(){ 
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
