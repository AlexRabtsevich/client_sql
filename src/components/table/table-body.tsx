import React, { FC, ReactNode } from 'react';
import MaterialTableBody from '@material-ui/core/TableBody';
import TableRow, { TableRowProps } from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { v4 as uuid } from 'uuid';


import { getTableBodyStyles } from './styles';
import {ITableMetadata} from "../../types/table";

interface IProps<T extends {}> {
  metadata: ITableMetadata<T>[];
  data: T[];
  prepareRow?: (rowProps: T) => TableRowProps;
}

const TableBody = <T extends {}>({ metadata, data, prepareRow }: IProps<T>) => {
  const styles = getTableBodyStyles();

  const renderColumn = <T extends {}>(row: T, columnMetadata: ITableMetadata<T>): ReactNode => {
    const { additionalFields, action, columnProps, accessor } = columnMetadata;

    const TableCellComponent: FC = (props) => <TableCell {...columnProps} {...props} />;

    if (action && additionalFields) {
      const props = additionalFields.map((key) => row[key]);

      return <TableCellComponent key={uuid()}>{action(...props)}</TableCellComponent>;
    }

    return <TableCellComponent key={uuid()}>{row[accessor]}</TableCellComponent>;
  };

  const renderRow = (): ReactNode => {
    return data.map((row) => {
      let rowProps = {};

      if (prepareRow) {
        rowProps = prepareRow(row);
      }

      return (
        <TableRow {...rowProps} key={uuid()}>
          {metadata.map((columnMetadata) => renderColumn(row, columnMetadata))}
        </TableRow>
      );
    });
  };

  return <MaterialTableBody className={styles.root}>{renderRow()}</MaterialTableBody>;
};

export default TableBody;
