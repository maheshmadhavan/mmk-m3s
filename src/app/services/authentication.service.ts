import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {
  private users = [ ];
  authenticatedUser;
 
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
    localStorage.clear();
    this.router.navigate(['pages/login']);
  }
 
  loginUser(user){    
    this.authenticatedUser = this.users.find(u => u.email === user.email);   
    if (this.authenticatedUser && this.authenticatedUser.password === user.password){ 
      localStorage.setItem("user", JSON.stringify(this.authenticatedUser));      
      localStorage.setItem("username", this.authenticatedUser.firstname); 
      if(this.authenticatedUser.accounttype == 'client')     
        this.router.navigate(['talent']);
      else
        this.router.navigate(['pages']);
      return true;
    }   
    return false;
 
  }
 
   checkCredentials() {
    if (localStorage.getItem("user") === null){
        this.router.navigate(['pages/login']);
    }
  } 
}