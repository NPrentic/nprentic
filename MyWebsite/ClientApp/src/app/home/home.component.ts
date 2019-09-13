import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  @ViewChild('header') sectionHeader: ElementRef;
  @ViewChild('about') sectionAbout: ElementRef;
  @ViewChild('skills') sectionSkills: ElementRef;
  @ViewChild('offer') sectionOffer: ElementRef;
  @ViewChild('portfolio') sectionPortfolio: ElementRef;
  @ViewChild('contact') sectionContact: ElementRef;
  showLoader: boolean = true;
  focusedComponent: string = 'header';

  constructor() { }

  public gotoSection(section: string): void {
    if (section == 'header')
      this.sectionHeader.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

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

  setFocusedComponent(focusedComponentName: string): void {
    this.focusedComponent = focusedComponentName;
   // console.log(this.focusedComponent);
  }

}
