import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { EnterFromLeft, EnterFromRight, EnterFromBottom } from './about.animations';
import { NgForm } from '@angular/forms';
import { ResumeService } from '../Services/resume-service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [EnterFromLeft, EnterFromRight, EnterFromBottom]
})
export class AboutComponent implements OnInit {

  state: string = 'hide';
  position: string = 'center';

  constructor(public el: ElementRef, private resumeService: ResumeService) { }

  ngOnInit() {
  }
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const circle = document.getElementById('circle');

    const elemRect = circle.getBoundingClientRect();

    const imageTop = elemRect.top;
    const imageBottom = elemRect.bottom;
    const imageLeft = elemRect.left;
    const imageRight = elemRect.right;

    const cursorX = event.screenX > 1920 ? event.screenX - 1920 : event.screenX;
    const cursorY = event.screenY;


    if (cursorX < imageLeft && cursorY < imageTop) this.position = 'up-left';
    if (cursorX < imageLeft && cursorY >= imageTop && event.offsetY <= imageBottom) this.position = 'left';
    if (cursorX < imageLeft && cursorY > imageBottom) this.position = 'down-left';

    if (cursorX >= imageLeft && cursorX <= imageRight && cursorY >= imageTop && cursorY <= imageBottom) this.position = 'center';
    if (cursorX >= imageLeft && cursorX <= imageRight && cursorY < imageTop) this.position = 'up';
    if (cursorX >= imageLeft && cursorX <= imageRight && cursorY > imageBottom) this.position = 'down';

    if (cursorX > imageRight && cursorY < imageTop) this.position = 'up-right';
    if (cursorX > imageRight && cursorY >= imageTop && cursorY <= imageBottom) this.position = 'right';
    if (cursorX > imageRight && cursorY > imageBottom) this.position = 'down-right';

    //console.log('top');
    //console.log(imageTop);
  }

  downloadResume(): void {
    this.resumeService.getPdfFile()
      .subscribe((data) => {
        let downloadLink = document.createElement('a');
        var blob = new Blob([data], { type: 'application/pdf' });

        downloadLink.href = window.URL.createObjectURL(new File([blob], 'report.pdf',
          { type: 'application/pdf' }));
        downloadLink.setAttribute('download', 'Nemanja Prentić - Resume.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
      });
  }

}
