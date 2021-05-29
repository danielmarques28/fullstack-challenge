const theme = {
  colors: {
    primary: '#FF6978',
    background: '#f7efe7',
    white: 'white',
    gray: 'gray',
    black: 'black',
  },
  spacings: {
    xxxsmall: '2px',
    xxsmall: '8px',
    xsmall: '12px',
    small: '20px',
    medium: '30px',
    xmedium: '40px',
    xxmedium: '48px',
  },
  layers: {},
  font: {
    family: {
      primary: 'SF Pro Display',
      secondary: '',
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      small: '10px',
      normal: '16px',
      large: '24px',
    },
    colors: {
      primary: 'black',
      secondary: '#FF6978',
      white: 'white',
      gray: 'gray',
    },
  },
} as const;

export default theme;
