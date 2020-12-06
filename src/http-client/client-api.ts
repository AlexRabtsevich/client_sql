import { BasicApi } from './basic-api';
import { IClient, ICreateClientData } from '../types';
import { getData } from '../utils/get-data';

export class ClientApi extends BasicApi {
  private clientPath = 'clients';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public createClient(client: ICreateClientData): Promise<IClient> {
    const response = this.https.post(this.clientPath, client);

    return getData(response);
  }

  public getClient(login: string, password: string): Promise<IClient> {
    const response = this.https.get(this.clientPath, { params: { login, password } });

    return getData(response);
  }
}
