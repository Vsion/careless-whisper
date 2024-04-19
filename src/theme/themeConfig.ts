import { ThemeProviderProps as AntDThemeProviderProps } from 'antd-style';

export type ThemeProviderProps = AntDThemeProviderProps<any>;

const colorPrimary = '#647376';

const theme_props: ThemeProviderProps = {
  customToken: {
    testHeight: '50px',
    colorPrimaryTest: '#f85a5a',
  },
  theme: {
    token: {
      fontSize: 16,
      colorPrimary,
      colorLink: colorPrimary,
    },
  },
};

export default theme_props;
