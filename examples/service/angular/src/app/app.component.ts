import { Component, inject, InjectionToken } from "@angular/core";
import { OnlineService } from "./online.service";
import { WhenOnline } from "./when-online";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // Use the inject function to get the isOnline observable. Can be used to
  // mock the observable in tests.
  onlineService = inject(OnlineService);

  // Use the inject function to get the OnlineService. Can be used to mock
  // the service in tests.
  // onlineService = inject(OnlineService);

  // Create a new WhenOnline instance. Logs the counter to the console when
  // the user is online. Stashes the logs when the user is offline.
  whenOnlineWithObservable = new WhenOnline(
    this.onlineService,
    (counter: number) => {
      console.log(counter);
    }
  );

  // Create a new WhenOnline instance. Logs the counter to the console when
  // the user is online. Stashes the logs when the user is offline.
  // whenOnlineWithService = new WhenOnlineWithObservable(
  //   this.onlineService,
  //   (counter: number) => {
  //     console.log(counter);
  //   }
  // );

  // Counter state for the sake of the example.
  counter = 1;

  ngOnInit() {
    // Initialize listeners.
    this.whenOnlineWithObservable.init();

    // Initialize listeners.
    // this.whenOnlineWithService.init();
  }

  ngOnDestroy() {
    // Destroy listeners.
    this.whenOnlineWithObservable.destroy();

    // Destroy listeners.
    // this.whenOnlineWithService.destroy();
  }

  handleButtonClick() {
    // Call the callback when the user is online, or stash the call when the
    // user is offline.
    this.whenOnlineWithObservable.next(this.counter);

    // Call the callback when the user is online, or stash the call when the
    // user is offline.
    // this.whenOnlineWithService.next(this.counter);

    // Increment the counter.
    // Watch-out: being changed in the click handler, the counter will be
    // picked up by Angular's change detection and the template will be
    // updated automagically.
    this.counter += 1;
  }
}
