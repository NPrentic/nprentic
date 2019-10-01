import { trigger, state, transition, style, animate, keyframes, query } from '@angular/animations';


export let portfolio_appear = trigger('portfolio_appear', [

  state('hide', style({
    opacity: 0, transform: "scale(0.9)"
  })),

  transition('hide => show', animate('600ms 100ms cubic-bezier(.55,.79,.44,.09)', keyframes([
    style({ transform: "scale(0.9)", opacity: 0, offset: 0 }),
    style({ transform: "scale(1.1)", opacity: 0.5, offset: 0.5 }),
    style({ transform: "scale(1)", opacity: 1, offset: 1 })
      ])
    )
  )
]);

