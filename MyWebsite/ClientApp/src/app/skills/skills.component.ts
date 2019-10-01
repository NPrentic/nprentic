import { Component, OnInit } from '@angular/core';
import { fillGraphic, percentage } from './animations-skills';
import { fadeIn } from '../GlobalAnimations/custom-animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [fillGraphic, fadeIn, percentage]
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  state: string = 'hide';
  showPercentage: boolean = false;

  constructor() { }

  ngOnInit() {

    this.skills.push({title: 'HTML 5', level: 9});
    this.skills.push({title: 'CSS 3', level: 8});
    this.skills.push({title: 'JavaScript', level: 8});
    this.skills.push({ title: 'TypeScript', level: 9 });
    this.skills.push({ title: 'Angular 6+', level: 9 });
    this.skills.push({title: 'Bootstrap', level: 10});
    this.skills.push({title: 'Angular Material', level: 10});
    this.skills.push({title: 'C#', level: 9});
    this.skills.push({title: 'ASP.Net Core', level: 7});
    this.skills.push({title: 'LINQ', level: 10});
    this.skills.push({title: 'SQL', level: 9});
    this.skills.push({title: 'Entity Framework', level: 10});
    this.skills.push({title: 'Flutter', level: 5});
    this.skills.push({title: 'Dart', level: 5});
    this.skills.push({title: 'Git', level: 9});

  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  togglePercentage() {
    this.showPercentage = !this.showPercentage;
  }

}

class Skill {

  title: string;
  level: number;
}
