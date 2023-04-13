import { Directive, Host, HostListener, Input } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { MatButton } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";

@Directive({
  selector: "[app-disable-reason]",
})
export class DisableReasonDirective {
  @Input()
  public isDisabled?: boolean;

  @Input()
  public color?: ThemePalette;

  @Input()
  public reason?: string;

  constructor(
    @Host() private button: MatButton,
    private snackBar: MatSnackBar
  ) {}

  ngOnChanges() {
    this.button.color = this.isDisabled ? "accent" : this.color;
  }

  @HostListener("click", ["$event"])
  onClick = (event: Event) => {
    if (this.isDisabled) {
      event.preventDefault();
      this.snackBar.open(this.reason ?? "");
    }
  };
}
