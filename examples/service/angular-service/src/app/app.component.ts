import { Component, inject } from "@angular/core";
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

  // Create a new WhenOnline instance. Logs the counter to the console when
  // the user is online. Stashes the logs when the user is offline.
  whenOnline = new WhenOnline(this.onlineService, (counter: number) => {
    console.log(`Counter: ${counter}`);
  });

  // Counter state for the sake of the example.
  counter = 1;

  ngOnInit() {
    // Initialize listeners.
    this.whenOnline.init();
  }

  ngOnDestroy() {
    // Destroy listeners.
    this.whenOnline.destroy();
  }

  handleButtonClick() {
    // Call the callback when the user is online, or stash the call when the
    // user is offline.
    this.whenOnline.next(this.counter);

    // Increment the counter.
    this.counter += 1;
  }
}
