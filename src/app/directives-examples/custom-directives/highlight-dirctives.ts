import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirctives {
  appHighlight = input('');

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight() || 'yellow'); // added a fallback color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(''); // passing empty string instead of null
  }

  private highlight(color: any) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
