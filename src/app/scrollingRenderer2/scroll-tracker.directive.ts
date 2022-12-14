import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTracker]'
})
export class ScrollTrackerDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.backgroundColor = '#162545'
  }
  
  @HostListener('scroll', ['$event']) onScroll() {
    console.log(window.scroll);
  }


}
