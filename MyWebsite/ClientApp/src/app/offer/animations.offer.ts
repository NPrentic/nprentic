import { trigger, state, transition, style, animate, keyframes, query } from '@angular/animations';


export let fadeInStaggering = trigger('fadeInStaggering', [

  state('hide', style({
    opacity: 0
  })),

  transition('hide => show', [
    animate('1000ms 100ms ease-out',keyframes([
      style({opacity:0, offset: 0 }),
      style({opacity: 1, offset: 1 })
      ]))
  ]),
]);


