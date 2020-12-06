import { IClient } from '../types';

const PROFILE = 'PROFILE';

export default class AccountService {
  private readonly _client: IClient | null;

  constructor() {
    this._client = this.getClientFromLocalStorage();
  }

  public getClient(): IClient | null {
    return this._client;
  }

  public setClient(client: IClient): void {
    this.setClientToLocalStorage(client);
  }

  public logOutClient(): void {
    localStorage.clear();
  }

  private getClientFromLocalStorage(): IClient | null {
    const client = localStorage.getItem(PROFILE);

    if (client) {
      return this.parseClient(client);
    }

    return null;
  }

  private setClientToLocalStorage(client: IClient): void {
    localStorage.setItem(PROFILE, this.stringifyClient(client));
  }

  private stringifyClient(client: IClient): string {
    return JSON.stringify(client);
  }

  private parseClient(client: string): IClient {
    return JSON.parse(client);
  }
}
