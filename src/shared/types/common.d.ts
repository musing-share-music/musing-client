import '@emotion/react';
import { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface commonStyles {
    commonStyles: {
      limitText: SerializedStyles;
    };
  }
}
