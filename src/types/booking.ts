import { IRoom } from './room';
import { ICustomer } from './customer';
import { IClient } from './client';

export interface IBooking {
  room: IRoom;
  customer: ICustomer;
  client: IClient;
  id: string;
  bookedDate: string;
  checkOutDate: string | null;
}

export interface IBookingRequest {
  roomId: string;
  customerId: string;
  clientId: string;
}

export interface IUpdateBookingDate {
  id: string;
  roomId: string;
}
