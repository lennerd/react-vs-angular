import { Subscription } from 'rxjs';
import { isOnline } from './is-online';

export class WhenOnline<TArgs extends any[]> {
  private subscription?: Subscription;
  private online = false;
  private stashedCalls: TArgs[] = [];

  constructor(private callback: (...args: TArgs) => void) {}

  init() {
    this.subscription = isOnline().subscribe((online) => {
      this.online = online;

      if (this.online && this.stashedCalls.length > 0) {
        this.stashedCalls.map((args) => this.callback(...args));
        this.stashedCalls.length = 0;
      }
    });
  }

  destroy() {
    this.subscription?.unsubscribe();
  }

  next(...args: TArgs) {
    if (this.online) {
      this.callback(...args);
    } else {
      this.stashedCalls.push(args);
    }
  }
}
