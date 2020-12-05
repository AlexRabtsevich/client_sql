import { IProfile } from './profile';
import { IAddress } from './address';
import { ILogin } from './login';

export interface IClient extends ILogin {
  profile: IProfile;
  address: IAddress;
}

export interface IClientFormData extends IProfile, IAddress, ILogin {
  confirmPassword: string;
}
