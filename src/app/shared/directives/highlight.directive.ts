import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() value = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this.value.endsWith('0')) {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.backgroundColor = 'white';
    }
    if (this.value.endsWith('1')) {
      this.el.nativeElement.style.color = 'green';
      this.el.nativeElement.style.backgroundColor = 'red';
    }
    if (this.value.endsWith('2')) {
      this.el.nativeElement.style.color = 'blue';
      this.el.nativeElement.style.backgroundColor = 'white';
    }
  }
}
