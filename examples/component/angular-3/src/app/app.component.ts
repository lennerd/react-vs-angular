import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  protected isDisabled = Math.random() > 0.5;

  constructor(private snackBar: MatSnackBar) {}

  protected click(event: Event) {
    if (event.defaultPrevented) {
      return;
    }

    this.snackBar.open("You clicked me!");
  }
}
