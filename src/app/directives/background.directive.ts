import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  @Input('appBackground') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';

  @HostBinding('style.backgroundColor') background: string;
  
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = 'red';
    this.background = this.defaultColor;
  }

  // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
  //   console.log(event);
  // }
  @HostListener('mouseenter') mouseEnter() {  
    // const{nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'blue');
    // this.renderer.addClass(nativeElement, 'white-text')
    // this.background = 'blue';
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    // const{nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
    // this.renderer.removeClass(nativeElement, 'white-text')
    // this.background = 'transparent';
    this.background = this.defaultColor;
  }
}