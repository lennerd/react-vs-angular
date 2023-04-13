import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  protected isDisabled = Math.random() > 0.5;

  protected showReason() {
    alert("Bad Luck!");
  }

  protected click(event: Event) {
    if (event.defaultPrevented) {
      return;
    }
    console.log("You clicked me!");
  }
}
