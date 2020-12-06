import { BasicApi } from './basic-api';
import { IEmployee, IEmployeeRequest } from '../types';
import { getData } from '../utils/get-data';

export class EmployeeApi extends BasicApi {
  private employeePath = 'employees';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public createEmployee(employee: IEmployeeRequest): Promise<IEmployee> {
    const response = this.https.post(this.employeePath, employee);

    return getData(response);
  }

  public getEmployees(): Promise<IEmployee[]> {
    const response = this.https.get(this.employeePath);

    return getData(response);
  }

  public deleteEmployees(id: string): any {
    const deletePath = `${this.employeePath}/${id}`;
    this.https.delete(deletePath);
  }
}
