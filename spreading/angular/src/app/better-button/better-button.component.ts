import { Component, Output } from "@angular/core";

@Component({
  selector: "better-button",
  templateUrl: "./better-button.component.html"
})
export class BetterButtonComponent {
  private counter = 0;

  @Output
  click: (event) => void


  onClick = (event) => {
    if (this.counter % 10 === 0) {
      alert("test");
    } else {
      click?.(event);
    }
  };
}
