import { Component, Input, Output } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: "app-better-button",
  templateUrl: "./better-button.component.html",
  styleUrls: ["./better-button.component.css"],
})
export class BetterButtonComponent {
  @Input("color")
  color?: ThemePalette;

  @Input("message")
  message?: string;

  @Output("click")
  onClick?: (event: Event) => void;

  private counter = 0;

  onBetterClick = (event: Event) => {
    this.counter = this.counter + 1;
    if (this.counter % 10 === 0) {
      alert(this.message);
    } else {
      this.onClick?.(event);
    }
  };
}
