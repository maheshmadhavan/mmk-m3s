import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls: ['../app.component.css']
})
export class FullLayoutComponent implements OnInit {

  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};
  public loggedUser = localStorage.getItem("username");
  public loggedUserType = (localStorage.getItem("clientloggedInflag") == '1') ? false : true;

  constructor(private authService : AuthenticationService) {
     document.querySelector('body').classList.remove('sidebar-hidden');
     console.log(this.loggedUserType);
  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public logOut()
  {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
