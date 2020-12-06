import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useForm, Controller } from 'react-hook-form';
import { Table } from '../../components/table';
import useEmployeesMetadata from './use-employees-metadata';
import { EmployeeApi } from '../../http-client/employee-api';
import {
  ICreateEmployeesData,
  IEmployee,
  IEmployeeMetadata,
  IEmployeeRequest,
  ISelectOption,
} from '../../types';
import RightBottomButton from '../../components/common/right-button';
import Modal from '../../components/modal';
import { PositionApi } from '../../http-client/position-api';
import ProfileForm from '../../components/profile-form';
import AddressForm from '../../components/address-form';
import Select from '../../components/common/select';
import { IPosition } from '../../types/position';

const EmployeesPage: FC = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [positions, setPositions] = useState<IPosition[]>([]);
  const [selectedPosition, selectPosition] = useState<string>('');

  const { errors, control, handleSubmit, setValue } = useForm();

  const onSelectPosition = useCallback(
    (position: string) => {
      setValue('position', position);
      selectPosition(position);
    },
    [setValue]
  );

  const closeModal = () => setOpenModal(false);
  const openModal = () => setOpenModal(true);

  const employeeApi = useMemo(() => new EmployeeApi(), []);
  const positionApi = useMemo(() => new PositionApi(), []);

  const getEmployees = useCallback(async () => {
    const response = await employeeApi.getEmployees();

    setEmployees(response);
  }, [employeeApi]);

  const getPositions = useCallback(async () => {
    const response = await positionApi.getPositions();
    setPositions(response);
  }, [positionApi]);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  useEffect(() => {
    getPositions();
  }, [getPositions]);

  const preparedEmployees = (): IEmployeeMetadata[] => {
    return employees.map((employee) => {
      return {
        ...employee.profile,
        ...employee.address,
        position: employee.position?.name,
        id: employee.id,
      };
    });
  };

  const options: ISelectOption[] = positions.map((position) => ({
    value: position.id,
    label: position.name,
  }));

  const onSubmit = async (data: ICreateEmployeesData) => {
    const employee: IEmployeeRequest = {
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
      positionId: data.position,
    };

    await employeeApi.createEmployee(employee);
    closeModal();
    getEmployees();
  };

  const deleteEmployee = async (id: string) => {
    await employeeApi.deleteEmployees(id);
    await getEmployees();
  };

  const metadata = useEmployeesMetadata(deleteEmployee);

  return (
    <Grid container spacing={3}>
      <Grid item md={12} xs={12}>
        <Typography variant='h3'>Employees</Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        <RightBottomButton onClick={openModal}>Add Employee</RightBottomButton>
      </Grid>
      <Grid item md={12} xs={12}>
        <Table metadata={metadata} data={preparedEmployees()} />
      </Grid>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Typography variant='h4' align='center'>
          Add Employee
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
            <Grid md={3} />
            <Grid item md={7} xs={12}>
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
            <Grid container item md={10} xs={12} justify='flex-end'>
              <RightBottomButton type='submit'>Create</RightBottomButton>
            </Grid>
          </Grid>
        </form>
      </Modal>
    </Grid>
  );
};

export default EmployeesPage;
