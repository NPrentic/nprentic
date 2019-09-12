import { trigger, state, transition, style, animate, keyframes, query } from '@angular/animations';


export let fadeIn = trigger('fadeIn', [

  transition('hide => show', [
    query('.ilustration',
    animate('1000ms 200ms ease-out',keyframes([
      style({ transform: "scale(0.2)",opacity:0, offset: 0 }),
      style({ transform: "scale(1.2)", opacity: 0.5, offset: 0.8 }),
      style({ transform: "scale(1)", opacity: 1, offset: 1 })
      ]))
    )
  ]),
  transition('show => hide', [
    query('.ilustration',
      animate('1000ms 200ms ease-in', keyframes([
        style({ transform: "scale(1)", opacity: 1, offset: 0 }),
        style({ transform: "scale(1.2)", opacity: 0.5, offset: 0.2 }),
        style({ transform: "scale(0.2)", opacity: 0, offset: 1 })
      ]))
    )
  ])
]);


