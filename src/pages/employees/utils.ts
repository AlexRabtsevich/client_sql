import {ICreateEmployeesData, IEmployeeRequest} from "../../types";

export const getEmployeeFromData = (data:ICreateEmployeesData):IEmployeeRequest=>{
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
    positionId: data.position,
  };
}