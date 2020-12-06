import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


import { getTableHeaderStyles } from './styles';
import {ITableMetadata} from "../../types/table";

interface IProps<T = {}> {
  metadata: ITableMetadata<T>[];
}

const TableHeader = <T extends {}>({ metadata }: IProps<T>) => {
  const styles = getTableHeaderStyles();

  return (
    <TableHead className={styles.root}>
      <TableRow>
        {metadata.map((data) => (
          <TableCell key={data.accessor as string}>{data.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
