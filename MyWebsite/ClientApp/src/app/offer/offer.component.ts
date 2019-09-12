import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeInStaggering } from './animations.offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  animations: [fadeInStaggering]
})
export class OfferComponent implements OnInit {

  state = 'hide';

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
}
