import { Directive, HostListener, ElementRef,HostBinding } from '@angular/core';

@Directive({
  selector: '[menuDropdown]'
})

export class NavDropdownToggleDirective { 
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {

    this.isOpen = !this.isOpen;
   
  }
}


export const NAV_DROPDOWN_DIRECTIVES = [NavDropdownToggleDirective];
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
