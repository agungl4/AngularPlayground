import { Directive, HostBinding, HostListener, Input } from '@angular/core';

enum NavbarStyle {
  default = 'bg-transparent',
  white = 'bg-light',
  // transparent = 'bg-transparent'
}
@Directive({
  selector: '[appBsNavbar]'
})
export class BsNavbarDirective {

  navbarStyle: string = NavbarStyle.default;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.navbarStyle = NavbarStyle.white;
    } else {
      this.navbarStyle = NavbarStyle.default;
    }
  }

  @HostBinding('class')
  get applyStyles(): string {
    return `navbar fixed-top navbar-expand-lg navbar-dark ${this.navbarStyle}`
  }

  constructor() { }

}
