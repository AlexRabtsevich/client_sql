import { IProfile } from './profile';
import { IAddress } from './address';
import { IPosition } from './position';

export interface IEmployee {
  profile: IProfile;
  address: IAddress;
  id: string;
  position: IPosition;
}
export interface IEmployeeRequest {
  profile: IProfile;
  address: IAddress;
  positionId: string;
}

export interface IEmployeeMetadata extends IProfile, IAddress {
  id: string;
  position: string;
}

export interface ICreateEmployeesData extends IProfile, IAddress {
  position: string;
}
