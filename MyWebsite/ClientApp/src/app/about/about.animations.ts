import { trigger, state, transition, style, animate, keyframes, query } from '@angular/animations';

export let EnterFromLeft = trigger('EnterFromLeft', [


  state('hide', style({
    opacity: 0
  })),

  transition('hide => show', animate('1000ms 200ms ease-out',
    keyframes([
      style({ opacity: 0, transform: "translateX(-100%)", offset: 0 }),
      style({ opacity: 1, transform: "translateX(15%)", offset: 0.85 }),
      style({ opacity: 1, transform: "translateX(0)", offset: 1 }),
    ])
  ))
]);

export let EnterFromRight = trigger('EnterFromRight', [

  state('hide', style({
    opacity: 0
  })),

  transition('hide => show', animate('1000ms 200ms ease-out',
    keyframes([
      style({ opacity: 0, transform: "translateX(100%)", offset: 0 }),
      style({ opacity: 1, transform: "translateX(-5%)", offset: 0.85 }),
      style({ opacity: 1, transform: "translateX(0)", offset: 1 }),
    ])
  ))
]);

export let EnterFromBottom = trigger('EnterFromBottom', [

  state('show', style({
    opacity: 1,
    transform: "translateY(0)"
  })),
  state('hide', style({
    opacity: 0,
    transform: "translateY(400%)"
  })),
  transition('show => hide', animate('700ms  ease-out')),
  transition('hide => show', animate('700ms 200ms ease-in'))
]);
