import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const DFEAULT_COLOR = 'yellow';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight: string = DFEAULT_COLOR;
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || DFEAULT_COLOR);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
