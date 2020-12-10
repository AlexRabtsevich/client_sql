import { IProfile } from './profile';
import { IAddress } from './address';
import { ILogin } from './login';

export interface IClient {
  id: string;
  profile: IProfile;
  address: IAddress;
  login: string;
}

export interface ICreateClientData {
  password: string;
  profile: IProfile;
  address: IAddress;
  login: string;
}

export interface IClientStore {
  login: string | null;
  profile: IProfile | null;
  address: IAddress | null;
  isAuthorized: boolean;
}

export interface IClientFormData extends IProfile, IAddress, ILogin {
  confirmPassword: string;
}
