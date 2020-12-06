import React, { ReactNode } from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { TableRowProps } from '@material-ui/core/TableRow';

import { ITableMetadata } from '../../types/table';

import TableBody from './table-body';
import TableHeader from './table-header';
import { getTableStyles } from './styles';

// eslint-disable-next-line @typescript-eslint/ban-types
interface IProps<T extends {}> {
  metadata: ITableMetadata<T>[];
  data: T[];
  // eslint-disable-next-line react/require-default-props
  prepareRow?: (rowProps: T) => TableRowProps;
}

// eslint-disable-next-line @typescript-eslint/ban-types
const Table = <T extends {}>(props: IProps<T>) => {
  const { data, metadata, prepareRow } = props;

  const styles = getTableStyles();

  return (
    <TableContainer className={styles.root}>
      <MaterialTable>
        <TableHeader metadata={metadata} />
        <TableBody metadata={metadata} data={data} prepareRow={prepareRow} />
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
