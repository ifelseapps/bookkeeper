export interface ITheme {
  colors: {
    background: string;
    commonAreaBackground: string;
    grid: {
      border: string;
      backgroundHeader: string;
      colorHeader: string;
      backgroundActive: string;
    };
  };
}

export const theme: ITheme = {
  colors: {
    background: '#EEEEEE',
    commonAreaBackground: '#9C27B0',
    grid: {
      border: '#BDBDBD',
      backgroundHeader: '#EEEEEE',
      colorHeader: '#616161',
      backgroundActive: '#E1BEE7',
    },
  },
};
