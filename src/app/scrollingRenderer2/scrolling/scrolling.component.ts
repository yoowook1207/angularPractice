import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss'],
})
export class ScrollingComponent implements OnInit {
  @ViewChild('blue', { static: false }) blue!: ElementRef;
  @ViewChild('red', { static: false }) red!: ElementRef;
  @ViewChild('yellow', { static: false }) yellow!: ElementRef;
  @ViewChild('green', { static: false }) green!: ElementRef;
  @ViewChild('', { static: false }) window!: ElementRef;

  constructor(
    private renderer2: Renderer2,
    private scroller: ViewportScroller,
    private el: ElementRef
  ) {}

  moveToBlue() {
    // find the DOM element that has #blue
    this.renderer2.selectRootElement(this.blue.nativeElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  moveToRed() {
    // find the DOM element that has id="red"
    this.scroller.scrollToAnchor('red');
  }

  moveToYellow() {
    this.renderer2
      .selectRootElement(this.yellow.nativeElement)
      .scrollIntoView();
  }

  moveToGreen() {
    this.renderer2.selectRootElement(this.green.nativeElement).scrollIntoView();
  }

  scrollBy() {
    this.renderer2
      .selectRootElement(this.yellow.nativeElement)
      .scrollBy(300, 300);
  }

  ngOnInit(): void {
    document.addEventListener('scroll', (event) => {
      if (window.scrollY == 2000) {
        alert('scroll position is 2000');
      }
      console.log(window.scrollY)
    });
  }
}
