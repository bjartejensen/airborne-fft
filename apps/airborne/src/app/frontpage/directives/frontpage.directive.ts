import { TVHHeight, TVWWidth } from '@airborne/airborne-types';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[airborneFrontpage]',
})
export class FrontpageDirective {
  @Input()
  @HostBinding('style.width')
  width!: TVWWidth;

  constructor() {}
}
