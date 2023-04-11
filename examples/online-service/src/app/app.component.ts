import { Component, inject, InjectionToken } from '@angular/core';
import { shareReplay } from 'rxjs';
import { isOnline } from './is-online';
import { WhenOnline } from './when-online';

export const WHEN_ONLINE_COUNTER = new InjectionToken('WhenOnlineCounter', {
  factory() {
    return new WhenOnline((counter: number) => console.log(counter));
  },
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isOnline$ = isOnline().pipe(shareReplay(1));
  whenOnline = inject(WHEN_ONLINE_COUNTER);
  counter = 1;

  ngOnInit() {
    this.whenOnline.init();
  }

  ngOnDestroy() {
    this.whenOnline.destroy();
  }

  handleButtonClick() {
    this.whenOnline.next(this.counter);
    this.counter += 1;
  }
}
