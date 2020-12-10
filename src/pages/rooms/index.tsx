import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Grid } from '@material-ui/core';

import { ICustomer, IRoom, IRoomLevel, IRoomMetaData, ISelectOption } from '../../types';
import { RoomApi } from '../../http-client/room-api';
import { RoomLevelsApi } from '../../http-client/room-levels-api';
import { CustomerApi } from '../../http-client/customer-api';
import Filters from './filters';
import AddUpdateRoomModal from './add-update-room-modal';
import RoomLevelModal from './room-level-modal';
import useRoomsMetadata from './use-rooms-metadata';
import { Table } from '../../components/table';
import BookRoomModal from './book-room-modal';
import { BookingApi } from '../../http-client/booking-api';

const RoomsPage: FC = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [roomLevels, setRoomLevel] = useState<IRoomLevel[]>([]);
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [isOpenAddRoomModal, setOpenAddRoomModal] = useState<boolean>(false);
  const [isOpenAddLevelRoomModal, setOpenAddLevelRoomModal] = useState<boolean>(false);
  const [isOpenBookRoomModal, setOpenBookRoomModal] = useState<boolean>(false);
  const [selectedRoom, selectRoom] = useState<IRoom | null>(null);

  const closeAddRoomModal = () => {
    selectRoom(null);
    setOpenAddRoomModal(false);
  };

  const closeBookRoomModal = () => {
    selectRoom(null);
    setOpenBookRoomModal(false);
  };

  const roomApi = useMemo(() => new RoomApi(), []);
  const roomLevelApi = useMemo(() => new RoomLevelsApi(), []);
  const customerApi = useMemo(() => new CustomerApi(), []);
  const bookingApi = useMemo(() => new BookingApi(), []);

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

  const options: ISelectOption[] = roomLevels.map((level) => ({
    label: level.name,
    value: level.id,
  }));

  const selectRoomFormRooms = (id: string) => {
    const room = rooms.find((r) => r.id === id);
    selectRoom(room || null);
  };

  const deleteRoom = async (id: string) => {
    await roomApi.deleteRoom(id);
    await getRooms();
  };

  const updateRoom = async (id: string) => {
    selectRoomFormRooms(id);
    setOpenAddRoomModal(true);
  };

  const bookRoom = async (id: string) => {
    selectRoomFormRooms(id);
    setOpenBookRoomModal(true);
  };

  const preparedRooms = () =>
    rooms.map((room) => ({
      number: room.number,
      isBooked: room.isBooked,
      id: room.id,
      roomLevelId: room.level?.id,
      price: room.level?.price,
      name: room.level?.name,
    }));

  const checkOutRoom = async (id: string) => {
    await bookingApi.checkOutBooking(id);
    getRooms();
  };

  const metadata = useRoomsMetadata(deleteRoom, updateRoom, bookRoom, checkOutRoom);

  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        <Filters setRooms={setRooms} roomLevels={roomLevels} options={options} />
      </Grid>
      <Grid item md={12} xs={12} container style={{ gap: '2rem', padding: '1rem 0' }}>
        <Button variant='contained' color='primary' onClick={() => setOpenAddRoomModal(true)}>
          Add room
        </Button>
        <Button variant='contained' color='primary' onClick={() => setOpenAddLevelRoomModal(true)}>
          Add room level
        </Button>
      </Grid>
      <Grid item md={12} xs={12}>
        <Table metadata={metadata} data={preparedRooms()} />
      </Grid>
      <AddUpdateRoomModal
        isOpenModal={isOpenAddRoomModal}
        closeModal={closeAddRoomModal}
        options={options}
        getRooms={getRooms}
        selectedRoom={selectedRoom}
      />
      <RoomLevelModal
        isOpenModal={isOpenAddLevelRoomModal}
        closeModal={() => setOpenAddLevelRoomModal(false)}
        getRoomsLevels={getRoomsLevels}
      />
      <BookRoomModal
        isOpenModal={isOpenBookRoomModal}
        closeModal={closeBookRoomModal}
        customers={customers}
        roomId={selectedRoom?.id}
        getRooms={getRooms}
      />
    </Grid>
  );
};

export default RoomsPage;
