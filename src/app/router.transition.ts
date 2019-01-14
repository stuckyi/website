import {trigger, animate, style, group, query, transition, keyframes} from '@angular/animations';

const toWorks: string =  '1s ease-in-out';
const toDetail: string = '2s ease-in-out';

export const pageLoader = trigger('pageLoader', [
  transition('* => works',
    animate(toWorks,
      keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 1, offset: .3 }),
        style({ opacity: 0, offset: 1 })
      ])
    ),
  ),
  transition('* => detail',
  animate(toDetail,
    keyframes([
      style({ opacity: 1, offset: 0 }),
      style({  opacity: 1, offset: .3 }),
      style({ opacity: 0, offset: 1 })
    ])
  ),
)
]);

/*
export const routerTransition = trigger('routerTransition', [
  transition('* => works', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }
        ))], { optional: true }),
    ])
  ]),
  transition('* => detail', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }
        ))], { optional: true }),
    ])
  ])
])
*/





