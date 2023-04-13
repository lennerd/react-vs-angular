import { Directive, HostListener } from "@angular/core";
import { jsConfetti } from "../main";

@Directive({
  selector: "[mat-raised-button]",
})
export class BetterButtonDirective {
  @HostListener("click", ["$event"])
  onBetterClick = () => {
    jsConfetti.addConfetti();
  };
}
