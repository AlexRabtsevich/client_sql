import React, { ReactNode, useCallback, useMemo } from 'react';
import { ITableMetadata } from '../../types/table';
import { IEmployeeMetadata, IMenuOptions } from '../../types';
import Menu from '../../components/menu';

type DeleteEmployee = (id: string) => any;

const useEmployeesMetadata = (
  deleteEmployee: DeleteEmployee
): ITableMetadata<IEmployeeMetadata>[] => {
  const getFullName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;

  const getFullAddress = (...params: string[]) => params.join(',');

  const renderActions = useCallback(
    (id: string): ReactNode => {
      const menuOptions: IMenuOptions[] = [
        {
          action: () => deleteEmployee(id),
          label: 'Delete',
        },
      ];

      return <Menu options={menuOptions} />;
    },
    [deleteEmployee]
  );

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
        label: 'Name',
        accessor: 'firstName',
        additionalFields: ['firstName', 'lastName'],
        action: getFullName,
        columnProps: {
          style: { width: '15%' },
        },
      },
      {
        label: 'Position',
        accessor: 'position',
        additionalFields: ['position'],
        columnProps: {
          style: { width: '10%' },
        },
      },
      {
        label: 'Age',
        accessor: 'age',
        additionalFields: ['age'],
        columnProps: {
          style: { width: '10%' },
        },
      },
      {
        label: 'Address',
        accessor: 'country',
        additionalFields: ['country', 'city', 'street', 'house'],
        action: getFullAddress,
        columnProps: {
          style: { width: '20%' },
        },
      },
      {
        label: 'Phone',
        accessor: 'phone',
        additionalFields: ['phone'],
        columnProps: {
          style: { width: '15%' },
        },
      },
      {
        label: 'Actions',
        accessor: 'id',
        additionalFields: ['id'],
        action: renderActions,
        columnProps: {
          style: { width: '10%' },
        },
      },
    ],
    [renderActions]
  );
};

export default useEmployeesMetadata;
