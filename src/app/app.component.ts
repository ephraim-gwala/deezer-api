import { Component } from '@angular/core';
import {trigger, animate, style, group, query, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
        group([
          query(':enter', [
            style({ opacity:0 }),
            animate('1200ms ease-in-out', style({ opacity:1 }))
          ]),
          query(':leave', [
            style({ opacity:1 }),
            animate('1200ms ease-in-out', style({ opacity:0 }))]),
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Deezer';

  constructor() {

  }
}
