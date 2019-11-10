import { Heading, Link } from 'rebass';
import { Transform } from 'stream';

const theme = {
  breakpoints: [600, 1024, 1440, 1920],
  colors: {
    red: '#f8485e',
    darkgray: '#3d3d3d',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(value => `${value / 16}rem`),
  fonts: {
    sans: 'Futura, system-ui, sans-serif',
    mono: 'monospace',
  },
  fontWeights: {
    bold: 600,
  },
  Heading: {
    fontWeight: 600,
  },
  Link: {
    padding: '0.125em 0',
    textDecoration: 'none',
    'p &:hover': {
      background: '#f8485e',
      color: 'white',
    },
  },
};

Heading.defaultProps = {
  ...Heading.defaultProps,
  as: 'h1',
  fontSize: '2rem',
  fontFamily: 'sans',
};

Link.defaultProps = {
  ...Link.defaultProps,
  color: 'red',
};

export default theme;
