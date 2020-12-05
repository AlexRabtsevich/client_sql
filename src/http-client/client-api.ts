import { BasicApi } from './basic-api';
import { IClient } from '../types';

export class ClientApi extends BasicApi {
  private clientPath = 'clients';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public createClient(client: IClient): Promise<IClient> {
    return this.https.post(this.clientPath, client);
  }
}
