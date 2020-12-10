import { ICreateCustomerData, ICustomer } from '../../types';

export const getCustomerFromData = (data: ICreateCustomerData): Partial<ICustomer> => {
  return {
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
  };
};
