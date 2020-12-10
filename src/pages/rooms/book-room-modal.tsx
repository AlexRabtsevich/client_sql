import React, { FC, useMemo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { ICustomer, ISelectOption, IBookingRequest } from '../../types';
import Modal from '../../components/modal';
import { useClientContext } from '../../stores/client-store';
import Select from '../../components/common/select';
import RightBottomButton from '../../components/common/right-button';

import { BookingApi } from '../../http-client/booking-api';

interface IProps {
  isOpenModal: boolean;
  closeModal: () => void;
  customers: ICustomer[];
  roomId?: string;
  getRooms: () => void;
}

const BookRoomModal: FC<IProps> = ({ closeModal, isOpenModal, customers, roomId, getRooms }) => {
  const { control, errors, handleSubmit, setValue } = useForm();
  const { state } = useClientContext();
  const [selectedCustomer, selectCustomer] = useState<string>('');

  const bookingApi = useMemo(() => new BookingApi(), []);

  const onSelectCustomer = (value: string) => {
    setValue('customerId', value);
    selectCustomer(value);
  };

  const getFullName = (customer: ICustomer) =>
    `${customer.profile.firstName} ${customer.profile.lastName}`;

  const options: ISelectOption[] = customers.map((customer) => ({
    label: getFullName(customer),
    value: customer.id,
  }));

  const onSubmit = async () => {
    const booking: IBookingRequest = {
      clientId: state.id || '',
      customerId: selectedCustomer,
      roomId: roomId || '',
    };

    await bookingApi.createBooking(booking);
    closeModal();
    await getRooms();
  };

  return (
    <Modal isOpen={isOpenModal} onClose={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} md={12} style={{ paddingBottom: '2rem' }}>
            <Typography variant='h4' align='center'>
              Booking Room
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              as={Select}
              name='customerId'
              control={control}
              rules={{ required: true }}
              label='Customer'
              selectedOption={selectedCustomer}
              onSelectOption={onSelectCustomer}
              options={options}
              error={!!errors.levelId}
            />
          </Grid>
          <Grid container item xs={12} md={12} justify='flex-end'>
            <RightBottomButton type='submit'>Book Room</RightBottomButton>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};

export default BookRoomModal;
