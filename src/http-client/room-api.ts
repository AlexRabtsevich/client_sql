import { BasicApi } from './basic-api';
import { IRoom, IRoomFormData, IUpdateRoomData } from '../types';
import { getData } from '../utils/get-data';

export class RoomApi extends BasicApi {
  private roomsPath = 'rooms';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public createRoom(room: IRoomFormData): Promise<IRoom> {
    const response = this.https.post(this.roomsPath, room);

    return getData(response);
  }

  public getRooms(number?: number, levelId?: string): Promise<IRoom[]> {
    const response = this.https.get(this.roomsPath, {
      params: {
        number,
        levelId,
      },
    });

    return getData(response);
  }

  public deleteRoom(id: string): any {
    const deletePath = `${this.roomsPath}/${id}`;
    this.https.delete(deletePath);
  }

  public updateRoom(data: IUpdateRoomData): Promise<IRoom> {
    const response = this.https.put(this.roomsPath, data);
    return getData(response);
  }
}
