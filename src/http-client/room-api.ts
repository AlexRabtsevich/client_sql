import { BasicApi } from './basic-api';
import {IRoom} from '../types';
import { getData } from '../utils/get-data';

export class RoomApi extends BasicApi {
  private roomsPath = 'rooms';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public createRoom(room: Partial<IRoom>): Promise<IRoom> {
    const response = this.https.post(this.roomsPath, room);

    return getData(response);
  }

  public getRooms(): Promise<IRoom[]> {
    const response = this.https.get(this.roomsPath);

    return getData(response);
  }

  public deleteRoom(id: string): any {
    const deletePath = `${this.roomsPath}/${id}`;
    this.https.delete(deletePath);
  }
}
