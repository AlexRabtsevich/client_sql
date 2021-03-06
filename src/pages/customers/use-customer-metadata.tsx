import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { ITableMetadata } from '../../types/table';
import { ICustomerMetadata, IMenuOptions } from '../../types';
import Menu from '../../components/menu';

type DeleteCustomer = (id: string) => any;
type UpdateCustomer = (id: string) => any;

const useCustomerMetadata = (
  deleteCustomer: DeleteCustomer,
  updateCustomer: UpdateCustomer
): ITableMetadata<ICustomerMetadata>[] => {
  const getFullName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;

  const getFullAddress = (...params: string[]) => params.join(',');

  const renderActions = useCallback(
    (id: string): ReactNode => {
      const menuOptions: IMenuOptions[] = [
        {
          action: () => deleteCustomer(id),
          label: 'Delete',
        },
        {
          action: () => updateCustomer(id),
          label: 'Update',
        },
      ];

      return <Menu options={menuOptions} />;
    },
    [deleteCustomer, updateCustomer]
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
          style: { width: '25%' },
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
          style: { width: '25%' },
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

export default useCustomerMetadata;
