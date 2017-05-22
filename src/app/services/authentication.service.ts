import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {
  private users = [ ];
  authenticatedUser;
  clientloggedIn = false;
 
  constructor(private router: Router, private userService: UserService){
    this.users = this.userService.getUsers();
    this.userService.usersChanged
      .subscribe(
          (users: User[]) => {
            this.users = users;
          }
        );
  }
 
  logout() {    
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("clientloggedInflag");
    localStorage.clear();
    this.router.navigate(['pages/login']);
  }
 
  loginUser(user){    
    this.authenticatedUser = this.users.find(u => u.email === user.email);   
    if (this.authenticatedUser && this.authenticatedUser.password === user.password){ 
      localStorage.setItem("user", JSON.stringify(this.authenticatedUser));      
      localStorage.setItem("username", this.authenticatedUser.firstname); 
      if(this.authenticatedUser.accounttype == 'client'){  
        this.clientloggedIn = true;
        localStorage.setItem("clientloggedInflag",  '1');   
        this.router.navigate(['talent/sector']);}
      else{
       // this.router.navigate(['pages']);
       this.clientloggedIn = false;
       this.router.navigate(['talent/sector']);
      }
      return true;
    }   
    return false;
 
  }
 
   checkCredentials() {
    if (localStorage.getItem("user") === null){
        this.router.navigate(['pages/login']);
    }
  } 
    isAuthenticated(){
    if(localStorage.getItem("clientloggedInflag") == '1'){
      this.clientloggedIn = true;
    }else{
      this.clientloggedIn = false;
    }
    const promise = new Promise(
      (resolve, reject) =>{
        setTimeout(() => {          
          resolve(this.clientloggedIn)
        } ,800);
      }
      );
   // console.log(promise);
    return promise;
  }
}