import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import { ICreateCustomerData, ICustomer, ICustomerMetadata } from '../../types';
import RightBottomButton from '../../components/common/right-button';
import { CustomerApi } from '../../http-client/customer-api';
import useCustomerMetadata from './use-customer-metadata';
import { Table } from '../../components/table';
import CustomerModal from './customer-modal';
import { getCustomerFromData } from './utils';

const CustomersPage: FC = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [selectedCustomer, setSelectedProfile] = useState<ICustomer | null>(null);

  const { errors, control, handleSubmit } = useForm();

  const closeModal = () => {
    setOpenModal(false);
    setSelectedProfile(null);
  };
  const openModal = () => setOpenModal(true);

  const customerApi = useMemo(() => new CustomerApi(), []);

  const getCustomers = useCallback(async () => {
    const response = await customerApi.getCustomers();

    setCustomers(response);
  }, [customerApi]);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  const preparedCustomer = (customer: ICustomer): ICustomerMetadata => {
    return {
      ...customer.profile,
      ...customer.address,
      id: customer.id,
    };
  };

  const preparedCustomers = (): ICustomerMetadata[] => {
    return customers.map((customer) => preparedCustomer(customer));
  };

  const onCreateSubmit = async (data: ICreateCustomerData) => {
    const customer: Partial<ICustomer> = getCustomerFromData(data);
    await customerApi.createCustomer(customer);
    closeModal();
    getCustomers();
  };

  const deleteCustomer = async (id: string) => {
    await customerApi.deleteCustomer(id);
    await getCustomers();
  };

  const updateCustomer = (id: string) => {
    const customer = customers.find((c) => c.id === id);
    setSelectedProfile(customer || null);
    openModal();
  };

  const onUpdateSubmit = async (data: ICreateCustomerData) => {
    const customer: Partial<ICustomer> = getCustomerFromData(data);
    customer.id = selectedCustomer?.id;
    await customerApi.updateCustomer(customer);
    closeModal();
    await getCustomers();
  };

  const onSubmit = selectedCustomer ? onUpdateSubmit : onCreateSubmit;

  const metadata = useCustomerMetadata(deleteCustomer, updateCustomer);

  return (
    <Grid container spacing={3}>
      <Grid item md={12} xs={12}>
        <Typography variant='h3'>Customers</Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        <RightBottomButton onClick={openModal}>Add Customer</RightBottomButton>
      </Grid>
      <Grid item md={12} xs={12}>
        <Table metadata={metadata} data={preparedCustomers()} />
      </Grid>
      <CustomerModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        errors={errors}
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        profile={selectedCustomer?.profile}
        address={selectedCustomer?.address}
      />
    </Grid>
  );
};

export default CustomersPage;
