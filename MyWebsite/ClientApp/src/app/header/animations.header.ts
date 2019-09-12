import { trigger, state, transition, style, animate, keyframes, query } from '@angular/animations';

export let resize = trigger('resize', [

  state('void', style({ height: '100vh', width: "100vw", transform: 'rotateX(180deg)' })),

  transition(':enter, :leave',
    animate('1000ms ease-in')
  )
]);

