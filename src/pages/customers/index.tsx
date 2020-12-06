import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { ICreateCustomerData, ICustomer, ICustomerMetadata } from '../../types';
import RightBottomButton from '../../components/common/right-button';
import Modal from '../../components/modal';
import ProfileForm from '../../components/profile-form';
import AddressForm from '../../components/address-form';
import { CustomerApi } from '../../http-client/customer-api';
import useCustomerMetadata from './use-customer-metadata';
import { Table } from '../../components/table';

const CustomersPage: FC = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const { errors, control, handleSubmit } = useForm();

  const closeModal = () => setOpenModal(false);
  const openModal = () => setOpenModal(true);

  const customerApi = useMemo(() => new CustomerApi(), []);

  const getCustomers = useCallback(async () => {
    const response = await customerApi.getCustomers();

    setCustomers(response);
  }, [customerApi]);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  const preparedCustomers = (): ICustomerMetadata[] => {
    return customers.map((customer) => {
      return {
        ...customer.profile,
        ...customer.address,
        id: customer.id,
      };
    });
  };

  const onSubmit = async (data: ICreateCustomerData) => {
    const customer: Partial<ICustomer> = {
      address: {
        country: data.country,
        city: data.city,
        street: data.street,
        house: data.house,
      },
      profile: {
        lastName: data.lastName,
        firstName: data.firstName,
        age: data.age,
        phone: data.phone,
      },
    };

    await customerApi.createCustomer(customer);
    closeModal();
    getCustomers();
  };

  const deleteCustomer = async (id: string) => {
    await customerApi.deleteCustomer(id);
    await getCustomers();
  };

  const metadata = useCustomerMetadata(deleteCustomer);

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
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Typography variant='h4' align='center'>
          Add Customer
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid md={3} />
            <Grid item md={7} xs={12}>
              <ProfileForm errors={errors} control={control} />
            </Grid>
            <Grid md={3} />
            <Grid item md={7} xs={12}>
              <AddressForm errors={errors} control={control} />
            </Grid>
            <Grid md={3} />
            <Grid item md={7} xs={12}>
              <AddressForm errors={errors} control={control} />
            </Grid>
            <Grid container item md={10} xs={12} justify='flex-end'>
              <RightBottomButton type='submit'>Create Customer</RightBottomButton>
            </Grid>
          </Grid>
        </form>
      </Modal>
    </Grid>
  );
};

export default CustomersPage;
