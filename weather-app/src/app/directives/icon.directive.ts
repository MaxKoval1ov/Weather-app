import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIcon]',
})
export class IconDirective {
  constructor(private el: ElementRef) {}

  @Input() set setPicture(condition: string) {
    
  }
}
