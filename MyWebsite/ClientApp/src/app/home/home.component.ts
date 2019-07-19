import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  @ViewChild('about') sectionAbout: ElementRef;
  @ViewChild('skills') sectionSkills: ElementRef;
  @ViewChild('offer') sectionOffer: ElementRef;
  @ViewChild('portfolio') sectionPortfolio: ElementRef;
  @ViewChild('contact') sectionContact: ElementRef;


  constructor() { }

  public gotoSection(section: string): void {
    if (section == 'about')
      this.sectionAbout.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (section == 'skills')
      this.sectionSkills.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (section == 'offer')
      this.sectionOffer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (section == 'portfolio')
      this.sectionPortfolio.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (section == 'contact')
      this.sectionContact.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


}
