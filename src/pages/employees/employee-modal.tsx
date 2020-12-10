import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Grid, Typography } from '@material-ui/core';
import { IAddress, IProfile, ISelectOption } from '../../types';
import ProfileForm from '../../components/profile-form';
import AddressForm from '../../components/address-form';
import Select from '../../components/common/select';
import RightBottomButton from '../../components/common/right-button';
import Modal from '../../components/modal';

interface IProps {
  isOpenModal: boolean;
  closeModal: () => void;
  errors: any;
  control: Control;
  onSubmit: () => void;
  profile?: IProfile;
  address?: IAddress;
  selectedPosition: string;
  options: ISelectOption[];
  onSelectPosition: (value: string) => void;
}

const EmployeeModal: FC<IProps> = ({
  address,
  profile,
  control,
  errors,
  closeModal,
  isOpenModal,
  onSubmit,
  selectedPosition,
  options,
  onSelectPosition,
}) => {
  const buttonLabel = profile ? 'Update Employee' : 'Create Employee';
  const headerLabel = profile ? 'Update Employee' : 'Add Employee';

  return (
    <Modal isOpen={isOpenModal} onClose={closeModal}>
      <Typography variant='h4' align='center'>
        {headerLabel}
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <ProfileForm errors={errors} control={control} profile={profile} />
          </Grid>
          <Grid item md={6} xs={12}>
            <AddressForm errors={errors} control={control} address={address} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Controller
              as={Select}
              name='position'
              control={control}
              rules={{ required: true }}
              label='Position'
              selectedOption={selectedPosition}
              defaultValue={selectedPosition || ''}
              onSelectOption={onSelectPosition}
              options={options}
              error={!!errors.position}
            />
          </Grid>
          <Grid container item md={12} xs={12} justify='flex-end'>
            <RightBottomButton type='submit'>{buttonLabel}</RightBottomButton>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};

export default EmployeeModal;
