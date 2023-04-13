import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class OnlineService {
  // Use a BehaviorSubject to emit the online status. Use navigator.onLine to
  // get the initial online status.
  private online$$ = new BehaviorSubject<boolean>(navigator.onLine);

  get online$() {
    // Return a readonly observable to be used outside the service.
    return this.online$$.asObservable();
  }

  init() {
    // Subscribe to the online status.
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  destroy() {
    // Unsubscribe from the online status.
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  private handleOnline = () => {
    this.online$$.next(true);
  };

  private handleOffline = () => {
    this.online$$.next(false);
  };
}
