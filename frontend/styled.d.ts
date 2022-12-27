import 'styled-components';
import { ITheme } from './src/app/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme { }
}
