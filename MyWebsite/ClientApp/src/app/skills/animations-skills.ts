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


export let percentage = trigger('percentage', [

  transition(':enter', [
    style({ opacity: 0, transform: 'translate3D(25px, -40px, 0)'}),
    animate('2s 0s ease-out')
  ])
]);
