import '@emotion/react';
import { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  // 테마 인터페이스 정의
  // https://emotion.sh/docs/typescript#define-a-theme
  export interface Theme {
    colors: {
      primary1: string;
      primary2: string;
      primary1Hover1: string;
      primary1Hover2: string;
      secondary1: string;
      secondary2: string;
      secondary1Hover1: string;
      secondary2Hover1: string;
      secondary1Hover2: string;
      secondary2Hover2: string;
      black: string;
      900: string;
      800: string;
      700: string;
      600: string;
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
      white: string;
    };
    fonts: {
      wantedSans: {
        H1: SerializedStyles;
        T1: SerializedStyles;
        T2: SerializedStyles;
        B1: SerializedStyles;
        B2: SerializedStyles;
        B3: SerializedStyles;
        B4: SerializedStyles;
        B5: SerializedStyles;
        B6: SerializedStyles;
        C1: SerializedStyles;
      };
    };
  }
}
