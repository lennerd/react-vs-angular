import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // Flag to indicate whether the user is online or not.
  online = navigator.onLine;

  // Counter state for the sake of the example.
  counter = 1;

  // Stash counters when the user is offline.
  private stashedCounters: number[] = [];

  ngOnInit() {
    // Initialize listeners for online and offline events.
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  ngOnDestroy() {
    // Remove listeners for online and offline events.
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  handleButtonClick() {
    // Call the callback when the user is online, or stash the call when the
    // user is offline.
    if (this.online) {
      this.logCounter(this.counter);
    } else {
      this.stashedCounters.push(this.counter);
    }

    // Increment the counter.
    this.counter += 1;
  }

  toggleOnline(isOnline = !this.online) {
    window.dispatchEvent(new Event(isOnline ? "online" : "offline"));
  }

  private handleOnline = () => {
    this.online = true;

    // Log stashed counters when the user is online.
    if (this.online && this.stashedCounters.length > 0) {
      this.stashedCounters.map((counter) => this.logCounter(counter));
      this.stashedCounters.length = 0;
    }
  };

  private handleOffline = () => {
    this.online = false;
  };

  private logCounter(counter: number) {
    console.log(`Counter: ${counter}`);
  }
}
