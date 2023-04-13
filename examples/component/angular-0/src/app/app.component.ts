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

    if (this.counter % 2 === 0) {
      event.preventDefault();
      alert(`You clicked me ${this.counter} time!`);
    } else {
      console.log(`You clicked me ${this.counter} time!`);
    }
  };

  protected showReason() {
    alert("Bad Luck!");
  }
}
