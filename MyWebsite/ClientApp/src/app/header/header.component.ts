import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { resize } from './animations.header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [resize]
})
export class HeaderComponent implements OnInit {

  @Output('section-event') sectionEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClick(): void { this.sectionEvent.emit('about'); }

}
