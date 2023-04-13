import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[mat-raised-button]",
})
export class BetterButtonDirective {
  private counter = 0;

  @HostListener("click", ["$event"])
  onBetterClick = (event: Event) => {
    this.counter = this.counter + 1;
    if (this.counter % 10 === 0) {
      event.preventDefault();
      alert("You clicked me 10 times!");
    }
  };
}
