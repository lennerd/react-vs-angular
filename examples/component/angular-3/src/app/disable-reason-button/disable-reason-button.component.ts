import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: "app-disable-reason-button",
  templateUrl: "./disable-reason-button.component.html",
  styleUrls: ["./disable-reason-button.component.css"],
})
export class DisableReasonButtonComponent {
  @Input()
  public isDisabled = false;

  @Input()
  public reason?: string;

  // everything from button
  @Input()
  public color?: ThemePalette;

  @Output()
  public click = new EventEmitter<Event>();

  protected onClick = (event: Event) => {
    if (this.isDisabled) {
      alert(this.reason);
    } else {
      this.click.emit(event);
    }
  };
}
