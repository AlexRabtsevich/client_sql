import React, { ReactNode, useCallback, useMemo } from 'react';
import { Typography } from '@material-ui/core';

import { ITableMetadata } from '../../types/table';
import { IMenuOptions, IRoomMetaData } from '../../types';
import Menu from '../../components/menu';

type DeleteRoom = (id: string) => any;
type UpdateRoom = (id: string) => any;
type BookRoom = (id: string) => any;
type CheckOutRoom = (id: string) => any;

const useRoomsMetadata = (
  deleteRoom: DeleteRoom,
  updateRoom: UpdateRoom,
  bookRoom: BookRoom,
  checkOutRoom: CheckOutRoom
): ITableMetadata<IRoomMetaData>[] => {
  const renderActions = useCallback(
    (id: string, isBooked: boolean): ReactNode => {
      const basicMenuOptions: IMenuOptions[] = [
        {
          action: () => deleteRoom(id),
          label: 'Delete',
        },
        {
          action: () => updateRoom(id),
          label: 'Update',
        },
      ];

      if (isBooked) {
        basicMenuOptions.push({
          action: () => checkOutRoom(id),
          label: 'Check Out',
        });
      } else {
        basicMenuOptions.push({
          action: () => bookRoom(id),
          label: 'Book',
        });
      }

      return <Menu options={basicMenuOptions} />;
    },
    [bookRoom, checkOutRoom, deleteRoom, updateRoom]
  );

  const renderBooked = (isBooked: boolean) => {
    const label = isBooked ? 'Booked' : 'Available';
    const color = isBooked ? 'red' : 'green';

    return (
      <Typography variant='caption' style={{ color }}>
        {label}
      </Typography>
    );
  };

  return useMemo(
    () => [
      {
        label: 'ID',
        accessor: 'id',
        additionalFields: ['id'],
        columnProps: {
          style: { width: '15%' },
        },
      },
      {
        label: 'Number',
        accessor: 'number',
        additionalFields: ['number'],
        columnProps: {
          style: { width: '15%' },
        },
      },
      {
        label: 'Level',
        accessor: 'name',
        additionalFields: ['name'],
        columnProps: {
          style: { width: '10%' },
        },
      },
      {
        label: 'Price',
        accessor: 'price',
        additionalFields: ['price'],
        columnProps: {
          style: { width: '10%' },
        },
      },
      {
        label: 'Status',
        accessor: 'isBooked',
        additionalFields: ['isBooked'],
        action: renderBooked,
        columnProps: {
          style: { width: '20%' },
        },
      },
      {
        label: 'Actions',
        accessor: 'id',
        additionalFields: ['id', 'isBooked'],
        action: renderActions,
        columnProps: {
          style: { width: '10%' },
        },
      },
    ],
    [renderActions]
  );
};

export default useRoomsMetadata;
