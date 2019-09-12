import { Injectable, Inject, HostListener, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  windowScrolled: boolean;
  constructor(
    @Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

    @HostListener('window:scroll',[])
     showOnScroll(el: ElementRef): string {
      const componentPosition = el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > componentPosition - window.innerHeight && scrollPosition <= componentPosition + window.innerHeight) {
        return 'show'
      }
      else {return 'hide' }
  }



}
