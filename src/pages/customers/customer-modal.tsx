import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Control } from 'react-hook-form';

import ProfileForm from '../../components/profile-form';
import AddressForm from '../../components/address-form';
import RightBottomButton from '../../components/common/right-button';
import Modal from '../../components/modal';

import { IAddress, IProfile } from '../../types';

interface IProps {
  isOpenModal: boolean;
  closeModal: () => void;
  errors: any;
  control: Control;
  onSubmit: () => void;
  profile?: IProfile;
  address?: IAddress;
}

const CustomerModal: FC<IProps> = ({
  errors,
  closeModal,
  control,
  isOpenModal,
  onSubmit,
  profile,
  address,
}) => {
  const buttonLabel = profile ? 'Update Customer' : 'Create Customer';
  const headerLabel = profile ? 'Add Customer' : 'Add Customer';

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
          <Grid container item md={12} xs={12} justify='flex-end'>
            <RightBottomButton type='submit'>{buttonLabel}</RightBottomButton>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};

export default CustomerModal;
