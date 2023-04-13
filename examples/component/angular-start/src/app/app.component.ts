import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private counter = 0;
  protected isDisabled = Math.random() > 0.5;

  protected onBetterClick = (event: Event) => {
    this.counter = this.counter + 1;

    if (this.counter % 10 === 0) {
      event.preventDefault();
      debugger;
      alert("You clicked me 10 times!");
    }
  };

  protected showReason() {
    alert("Bad Luck!");
  }
}
