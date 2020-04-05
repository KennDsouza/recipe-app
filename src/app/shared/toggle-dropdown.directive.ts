import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggleDropdown]'
})
export class ToggleDropdownDirective {

    @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen(event: Event) {
    this.isOpen =  !this.isOpen;

    
  }
  constructor(private elRef: ElementRef) {}
}
