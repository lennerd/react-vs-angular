import { Component } from "@angular/core";
import { jsConfetti } from "../main";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  protected isDisabled = Math.random() > 0.5;

  constructor(private snackBar: MatSnackBar) {}

  protected onClick = (event: Event) => {
    jsConfetti.addConfetti();

    this.snackBar.open("You clicked me!");
  };

  protected showReason() {
    jsConfetti.addConfetti();

    this.snackBar.open("You are not lucky enough to click me.");
  }
}
