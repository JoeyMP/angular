import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appResaltado]"
})
export class ResaltadoDirective {
  @Input("appResaltado") newColor: string;

  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") mouseOver() {
    this.setColor(this.newColor || "yellow");
  }
  @HostListener("mouseleave") mouseLeave() {
    this.setColor(null);
  }

  private setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
