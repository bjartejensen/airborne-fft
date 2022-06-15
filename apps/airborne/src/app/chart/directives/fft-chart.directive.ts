import { ColorPaletteItem } from '@airborne/airborne-types';
import {
  Directive,
  EventEmitter,
  HostBinding,
  Inject,
  InjectionToken,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { COLOR_INDEX_PALETTTE_TOKEN } from '../../shared/tokens';

@Directive({
  selector: '[airborneFftChart]',
})
export class FftChartDirective {
  //#region @Input() and @Output()

  @Input() baseChartWidth!: number;
  @Input() baseChartHeight!: number;
  @Input() index?: number = 1;

  @Output() stateColorEmitter: EventEmitter<string> = new EventEmitter();

  //#endregion

  //#region Static Helpers

  private paddingLeftRight: number = 0; //120;
  private paddingTopBottom: number = 0; //100;

  //#endregion

  //#region @Hostbinding()

  @HostBinding('style.width')
  public get width() {
    return `${this.baseChartWidth + this.paddingLeftRight}px`;
  }

  @HostBinding('style.height')
  public get height() {
    return `${this.baseChartHeight + this.paddingTopBottom}px`;
  }

  //#endregion

  //#region Initialisers

  constructor(
    @Inject(COLOR_INDEX_PALETTTE_TOKEN) private colorPalette: ColorPaletteItem[]
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTS']) {
      this.setColorIndexBasedOnTsIndexAndEmit();
    }
  }

  //#endregion

  //#region Private Methods

  private setColorIndexBasedOnTsIndexAndEmit() {
    const colorIndex: string = this.colorPalette.find(
      (x) => x.index === this.index
    )?.backgroundColorCode!;

    this.stateColorEmitter.emit(colorIndex);
  }

  //#endregion
}
