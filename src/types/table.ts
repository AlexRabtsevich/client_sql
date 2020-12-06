import { ReactNode } from 'react';
import { TableCellProps } from '@material-ui/core/TableCell/TableCell';

export interface ITableMetadata<T extends {}> {
  label: ReactNode | string;
  accessor: keyof T;
  columnProps?: TableCellProps;
  action?: Function;
  additionalFields?: Array<keyof T>;
}

export interface ITableRowsPerPageOptions {
  rowsPerPageOptions: Array<number | { value: number; label: string }>;
}

export interface ITablePaginationProps extends ITableRowsPerPageOptions {
  rowsPerPage: number;
  page: number;
  onChangePage: (newPage: number) => void;
  onChangeRowPerPage: (perPageValue: number) => void;
  totalItems: number;
}
