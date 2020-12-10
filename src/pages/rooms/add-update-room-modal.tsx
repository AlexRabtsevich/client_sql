import React, { FC, useMemo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from 'react-hook-form';

import { ISelectOption, IRoomFormData, IRoom, IUpdateRoomData, IUpdateFormData } from '../../types';
import Select from '../../components/common/select';
import Modal from '../../components/modal';
import RightBottomButton from '../../components/common/right-button';
import { RoomApi } from '../../http-client/room-api';

interface IProps {
  isOpenModal: boolean;
  closeModal: () => void;
  options: ISelectOption[];
  getRooms: () => void;
  selectedRoom: IRoom | null;
}

const AddUpdateRoomModal: FC<IProps> = ({
  options,
  closeModal,
  isOpenModal,
  getRooms,
  selectedRoom,
}) => {
  const [selectedOption, selectOption] = useState<string>('');
  const { control, errors, handleSubmit, setValue } = useForm();

  const headerLabel = selectedRoom ? 'Update Room' : 'Create Room';
  const buttonLabel = selectedRoom ? 'Update Room' : 'Add Room';

  const onSelectOption = (value: string) => {
    selectOption(value);
    setValue('levelId', value);
  };

  const roomApi = useMemo(() => new RoomApi(), []);

  const createRoomSubmit = async (data: IRoomFormData) => {
    await roomApi.createRoom(data);
    await getRooms();
    closeModal();
  };

  const updateRoomSubmit = async (data: IRoomFormData) => {
    const room: IUpdateRoomData = {
      id: selectedRoom?.id || '',
      levelId: data.levelId,
    };
    await roomApi.updateRoom(room);
    await getRooms();
    closeModal();
  };

  const onSubmit = selectedRoom ? updateRoomSubmit : createRoomSubmit;

  return (
    <Modal isOpen={isOpenModal} onClose={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container xs={12} md={12} spacing={3}>
          <Grid xs={12} md={12} style={{ paddingBottom: '2rem' }}>
            <Typography variant='h4' align='center'>
              {headerLabel}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              as={TextField}
              name='number'
              fullWidth
              id='standard-number'
              label='Room number'
              defaultValue={selectedRoom?.number}
              control={control}
              helperText={errors?.number?.type}
              error={!!errors.number}
              rules={{ required: true }}
              type='number'
              disabled={!!selectedRoom}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              as={Select}
              name='levelId'
              control={control}
              rules={{ required: true }}
              label='Room level'
              selectedOption={selectedRoom?.level.id || selectedOption}
              onSelectOption={onSelectOption}
              options={options}
              error={!!errors.levelId}
            />
          </Grid>
          <Grid container item xs={12} md={12} justify='flex-end'>
            <RightBottomButton type='submit'>{buttonLabel}</RightBottomButton>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};

export default AddUpdateRoomModal;
