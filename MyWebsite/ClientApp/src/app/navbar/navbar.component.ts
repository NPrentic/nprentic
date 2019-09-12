import { Component, OnInit, ElementRef, Output, EventEmitter, Inject, HostListener, Input } from '@angular/core';
import { Location, DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  windowScrolled: boolean=false;
  isNavOpen: boolean = false;

  @Input('focused') focused: string;
  @Output('section-event') sectionEvent= new EventEmitter();


  constructor(public location: Location, private element: ElementRef, @Inject(DOCUMENT) private document: Document) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };


  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

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

  toggleNav() { this.isNavOpen = !this.isNavOpen; }

  onClick(section: string): void { this.sectionEvent.emit(section); }
}
