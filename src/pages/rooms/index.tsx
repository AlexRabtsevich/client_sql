import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Grid } from '@material-ui/core';

import { ICustomer, IRoom, IRoomLevel } from '../../types';
import { RoomApi } from '../../http-client/room-api';
import { RoomLevelsApi } from '../../http-client/room-levels-api';
import { CustomerApi } from '../../http-client/customer-api';

const RoomsPage: FC = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [roomLevels, setRoomLevel] = useState<IRoomLevel[]>([]);
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  const roomApi = useMemo(() => new RoomApi(), []);
  const roomLevelApi = useMemo(() => new RoomLevelsApi(), []);
  const customerApi = useMemo(() => new CustomerApi(), []);

  const getRooms = useCallback(async () => {
    const response = await roomApi.getRooms();
    setRooms(response);
  }, [roomApi]);

  const getRoomsLevels = useCallback(async () => {
    const response = await roomLevelApi.getRoomLevels();
    setRoomLevel(response);
  }, [roomLevelApi]);

  const getCustomers = useCallback(async () => {
    const response = await customerApi.getCustomers();
    setCustomers(response);
  }, [customerApi]);

  useEffect(() => {
    getRooms();
    getRoomsLevels();
    getCustomers();
  }, [getCustomers, getRooms, getRoomsLevels]);

  return (
    <Grid container>
      <Grid md={12} xs={12}>
        <Button variant='contained' color='primary'>
          Add room
        </Button>
        <Button variant='contained' color='primary'>
          Add room level
        </Button>
      </Grid>
    </Grid>
  );
};

export default RoomsPage;
