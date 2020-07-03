export const theme = {
  text: 'rgba(0, 0, 0, 0.87)',
  textLight: 'rgba(0, 0, 0, 0.6)',

  primary: '#41D974',

  fonts: {
    title:
      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },

  fontSizes: {
    h1Mega: {
      sizeMinRem: 1.75,
      sizeMaxRem: 2,
      lineHeightMin: 1.2,
      lineHeightMax: 1.1,
    },
    h1: {
      sizeMinRem: 1.375,
      sizeMaxRem: 1.625,
      lineHeightMin: 1.25,
      lineHeightMax: 1.2,
    },
    h2: {
      sizeMinRem: 1.25,
      sizeMaxRem: 1.5,
      lineHeightMin: 1.25,
      lineHeightMax: 1.2,
    },
    h3: {
      sizeMinRem: 1.125,
      sizeMaxRem: 1.25,
      lineHeightMin: 1.4375,
      lineHeightMax: 1.25,
    },
    bodyLarge: {
      sizeMinRem: 1.0625,
      sizeMaxRem: 1.1875,
      lineHeightMin: 1.3,
      lineHeightMax: 1.5,
    },
    body: {
      sizeMinRem: 1,
      sizeMaxRem: 1,
      lineHeightMin: 1.3125,
      lineHeightMax: 1.5,
    },
    bodySmall: {
      sizeMinRem: 0.8125,
      sizeMaxRem: 0.875,
      lineHeightMin: 1.4,
      lineHeightMax: 1.35,
    },
  },
};

const cssLock = ({
  valueUnit = '',
  minValue,
  maxValue,
  minViewportWidth = viewportSizes.tablet,
  maxViewportWidth = viewportSizes.desktop,
}) =>
  `calc((${minValue} * 1${valueUnit}) + (${maxValue} - ${minValue}) * (100vw - ${
    minViewportWidth / 16
  }em) / (${maxViewportWidth / 16} - ${minViewportWidth / 16}))`;

export const fontSize = toPairs(theme.fontSizes).reduce(
  (acc, [key, { sizeMinRem, sizeMaxRem, lineHeightMin, lineHeightMax }]) => ({
    ...acc,
    [key]: css`
      font-size: ${sizeMinRem}rem;

      ${media.tablet`
        font-size: ${cssLock({
          valueUnit: 'rem',
          minValue: sizeMinRem,
          maxValue: sizeMaxRem,
        })};
      `}

      ${media.desktop`
        font-size: ${sizeMaxRem}rem;
      `}
    `,
  }),
  {},
);

export const lineHeight = toPairs(theme.fontSizes).reduce(
  (acc, [key, { sizeMinRem, sizeMaxRem, lineHeightMin, lineHeightMax }]) => ({
    ...acc,
    [key]: css`
      line-height: ${lineHeightMin}em;

      ${media.tablet`
        line-height: ${cssLock({
          valueUnit: 'em',
          minValue: lineHeightMin,
          maxValue: lineHeightMax,
        })};
      `}

      ${media.desktop`
        font-size: ${sizeMaxRem}rem;
        line-height: ${lineHeightMax}em;
      `}
    `,
  }),
  {},
);

export const fontStyles = keys(theme.fontSizes).reduce(
  (acc, key) => ({
    ...acc,
    [key]: css`
      ${fontSize[key]}
      ${lineHeight[key]}
    `,
  }),
  {},
);
