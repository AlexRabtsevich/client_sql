import { BasicApi } from './basic-api';
import {ICustomer} from '../types';
import { getData } from '../utils/get-data';

export class CustomerApi extends BasicApi {
  private customersPath = 'customers';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public createCustomer(customer: Partial<ICustomer>): Promise<ICustomer> {
    const response = this.https.post(this.customersPath, customer);

    return getData(response);
  }

  public getCustomers(): Promise<ICustomer[]> {
    const response = this.https.get(this.customersPath);

    return getData(response);
  }

  public deleteCustomer(id: string): any {
    const deletePath = `${this.customersPath}/${id}`;
    this.https.delete(deletePath);
  }
}
