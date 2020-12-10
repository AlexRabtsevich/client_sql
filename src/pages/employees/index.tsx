import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useForm } from 'react-hook-form';
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
import { PositionApi } from '../../http-client/position-api';
import { IPosition } from '../../types/position';
import { getEmployeeStyles } from './styles';
import EmployeeModal from './employee-modal';
import { getEmployeeFromData } from './utils';

const EmployeesPage: FC = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [positions, setPositions] = useState<IPosition[]>([]);
  const [selectedPosition, selectPosition] = useState<string>('');
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployee | null>(null);

  const classes = getEmployeeStyles();

  const { errors, control, handleSubmit, setValue } = useForm();

  const onSelectPosition = useCallback(
    (position: string) => {
      setValue('position', position);
      selectPosition(position);
    },
    [setValue]
  );

  const closeModal = () => {
    setOpenModal(false);
    setSelectedEmployee(null);
  };
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

  const preparedEmployee = (employee: IEmployee): IEmployeeMetadata => {
    return {
      ...employee.profile,
      ...employee.address,
      id: employee.id,
      position: employee.position.name,
    };
  };

  const preparedEmployees = (): IEmployeeMetadata[] => {
    return employees.map((employee) => preparedEmployee(employee));
  };

  const options: ISelectOption[] = positions.map((position) => ({
    value: position.id,
    label: position.name,
  }));

  const updateEmployee = (id: string) => {
    const employee = employees.find((e) => e.id === id);
    setSelectedEmployee(employee || null);
    openModal();
  };

  const onCreateEmployeeSubmit = async (data: ICreateEmployeesData) => {
    const employee: IEmployeeRequest = getEmployeeFromData(data);
    await employeeApi.createEmployee(employee);
    closeModal();
    await getEmployees();
  };

  const onUpdateEmployeeSubmit = async (data: ICreateEmployeesData) => {
    const employee: IEmployeeRequest = getEmployeeFromData(data);
    await employeeApi.updateEmployee(employee);
    closeModal();
    await getEmployees();
  };

  const onSubmit = selectedEmployee ? onUpdateEmployeeSubmit : onCreateEmployeeSubmit;

  const deleteEmployee = async (id: string) => {
    await employeeApi.deleteEmployees(id);
    await getEmployees();
  };

  const metadata = useEmployeesMetadata(deleteEmployee, updateEmployee);

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
      <EmployeeModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        errors={errors}
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        selectedPosition={selectedEmployee?.position.id || selectedPosition}
        options={options}
        onSelectPosition={onSelectPosition}
        address={selectedEmployee?.address}
        profile={selectedEmployee?.profile}
      />
    </Grid>
  );
};

export default EmployeesPage;
