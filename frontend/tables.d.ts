import { UseResizeColumnsColumnProps } from 'react-table';

declare module 'react-table' {
  export interface ColumnInstance<D extends object = {}>
    extends UseResizeColumnsColumnProps<D> { }
}
