import { Subscription } from "rxjs";
import { OnlineService } from "./online.service";

export class WhenOnline<TArgs extends any[]> {
  private subscription?: Subscription;
  private online = false;
  private stashedCalls: TArgs[] = [];

  constructor(
    private onlineService: OnlineService,
    private callback: (...args: TArgs) => void
  ) {}

  init() {
    this.onlineService.init();

    // Subscribe to the online status.
    this.subscription = this.onlineService.online$.subscribe((online) => {
      this.online = online;

      if (this.online && this.stashedCalls.length > 0) {
        this.stashedCalls.map((args) => this.callback(...args));
        this.stashedCalls.length = 0;
      }
    });
  }

  destroy() {
    this.onlineService.destroy();

    // Unsubscribe from the online status.
    this.subscription?.unsubscribe();
  }

  next(...args: TArgs) {
    // Call the callback if online, or stash the call if offline.
    if (this.online) {
      this.callback(...args);
    } else {
      this.stashedCalls.push(args);
    }
  }
}
