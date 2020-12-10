import React, { FC, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

import Modal from '../../components/modal';
import RightBottomButton from '../../components/common/right-button';
import { RoomLevelsApi } from '../../http-client/room-levels-api';
import { IRoomLevelFormData } from '../../types';

interface IProps {
  isOpenModal: boolean;
  closeModal: () => void;
  getRoomsLevels: () => void;
}

const RoomLevelModal: FC<IProps> = ({ isOpenModal, closeModal, getRoomsLevels }) => {
  const { control, errors, handleSubmit } = useForm();
  const roomLevelApi = useMemo(() => new RoomLevelsApi(), []);

  const onSubmit = async (data: IRoomLevelFormData) => {
    await roomLevelApi.createRoomLevel(data);
    await getRoomsLevels();
    closeModal();
  };

  return (
    <Modal isOpen={isOpenModal} onClose={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} style={{ paddingBottom: '2rem' }}>
            <Typography variant='h4' align='center'>
              Booking Room
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              as={TextField}
              name='name'
              fullWidth
              id='standard-number'
              label='Level room name'
              control={control}
              helperText={errors?.name?.type}
              error={!!errors.name}
              rules={{ required: true }}
              type='text'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              as={TextField}
              name='price'
              fullWidth
              id='standard-number'
              label='Level price'
              control={control}
              helperText={errors?.price?.type}
              error={!!errors.price}
              rules={{ required: true }}
              type='number'
            />
          </Grid>
          <Grid container item xs={12} md={12} justify='flex-end'>
            <RightBottomButton type='submit'>Add Level room</RightBottomButton>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};

export default RoomLevelModal;
