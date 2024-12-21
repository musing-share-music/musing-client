import { css } from '@emotion/react';

export const theme = {
  colors: {
    primary1: '#6e61ff',
    primary2: '#9771FF',
    primary1Hover1: '#5243D9',
    primary1Hover2: '#372AAA',
    secondary1: '#FF327D',
    secondary2: '#00B4D3',
    secondary1Hover1: '#C20047',
    secondary2Hover1: '#0087A2',
    secondary1Hover2: '#89002C',
    secondary2Hover2: '#006778',
    black: '#000',
    900: '#101012',
    800: '#131315',
    700: '#141416',
    600: '#1B1B1E',
    500: '#202024',
    400: '#26262B',
    300: '#303036',
    200: '#70707D',
    100: '#BFC0D1',
    white: '#fff',
  },
  fonts: {
    wantedSans: {
      H1: css`
        // 어디서든 동일한 환경을 위해 다음과 같이 구성합니다. https://github.com/wanteddev/wanted-sans/blob/HEAD/packages/wanted-sans-std/documentation/webfonts/README.md#font-family
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px; /* 142.857% */
        letter-spacing: -0.28px;
      `,
      T1: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 116.667% */
        letter-spacing: -0.24px;
      `,
      T2: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 116.667% */
        letter-spacing: -0.24px;
      `,
      B1: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px; /* 118.182% */
      `,
      B2: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 127.273% */
      `,
      B3: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 140% */
      `,
      B4: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 155.556% */
      `,
      B5: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
      `,
      B6: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
      `,
      B7: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 42px; /* 210% */
        letter-spacing: -0.2px;
      `,
      C1: css`
        font-family: 'Wanted Sans Std Variable', 'Wanted Sans Std', -apple-system, BlinkMacSystemFont, system-ui,
          'Segoe UI', Roboto, 'Helvetica Neue', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
      `,
    },
  },
};
