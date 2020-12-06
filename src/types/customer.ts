import { IProfile } from './profile';
import { IAddress } from './address';

export interface ICustomer {
  profile: IProfile;
  address: IAddress;
  id: string;
}

export interface ICreateCustomerData extends IProfile, IAddress {}

export interface ICustomerMetadata extends ICreateCustomerData {
  id: string;
}
