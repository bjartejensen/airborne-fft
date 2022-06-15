import { ColorPaletteItem } from '@airborne/airborne-types';
import { InjectionToken } from '@angular/core';

export const COLOR_INDEX_PALETTTE_TOKEN: InjectionToken<ColorPaletteItem[]> =
  new InjectionToken('COLORPALETTTE_TOKEN', {
    providedIn: 'root',
    factory: () => {
      const retval: ColorPaletteItem[] = [
        { index: 1, backgroundColorCode: '#043c7d', colorCode: 'white' },
        { index: 2, backgroundColorCode: '#5697c2', colorCode: '#02244c' },
        { index: 3, backgroundColorCode: '#e4112b' },
        { index: 4, backgroundColorCode: '#f46c89' },
        { index: 5, backgroundColorCode: '#t56c89' },
        { index: 6, backgroundColorCode: '#j77c89' },
        { index: 7, backgroundColorCode: '#f22c19' },
      ];
      return retval;
    },
  });
