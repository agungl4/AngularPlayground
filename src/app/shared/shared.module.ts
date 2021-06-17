import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective } from './bs-navbar/bs-navbar.directive';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';


const DIRECTIVES = [
  BsNavbarDirective
]

const PIPES = [
  CustomDatePipe, TitleCasePipe
]

@NgModule({
  declarations: [
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
