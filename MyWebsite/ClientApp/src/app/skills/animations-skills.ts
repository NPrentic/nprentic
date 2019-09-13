import { trigger, state, transition, style, animate, keyframes, query } from '@angular/animations';


export let fillGraphic = trigger('fillGraphic', [

  state('hide', style({
    width: '0%'
  })),

  transition('hide => show',
    animate('2000ms 100ms ease', keyframes([
      style({ width: '0%', offset: 0 }),
      style({ width: '10%', offset: 1 })
    ]))
  )
]);

