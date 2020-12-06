import { BasicApi } from './basic-api';
import {  IRoomLevel} from '../types';
import { getData } from '../utils/get-data';

export class RoomLevelsApi extends BasicApi {
  private roomLevelPath = 'room-level';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public createRoom(roomLevel: Partial<IRoomLevel>): Promise<IRoomLevel> {
    const response = this.https.post(this.roomLevelPath, roomLevel);

    return getData(response);
  }

  public getRoomLevels(): Promise<IRoomLevel[]> {
    const response = this.https.get(this.roomLevelPath);

    return getData(response);
  }

  public deleteRoomLevel(id: string): any {
    const deletePath = `${this.roomLevelPath}/${id}`;
    this.https.delete(deletePath);
  }
}
