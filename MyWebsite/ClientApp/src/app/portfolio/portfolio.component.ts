import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { portfolio_appear } from './animations-portfolio';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [portfolio_appear ] 
})
export class PortfolioComponent implements OnInit {

  state = 'hide';

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
