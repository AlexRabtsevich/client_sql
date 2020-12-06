import { IProfile } from './profile';
import { IAddress } from './address';
import { ILogin } from './login';

export interface IClient {
  profile: IProfile;
  address: IAddress;
  login: string;
}

export interface ICreateClientData extends IClient {
  password: string;
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
