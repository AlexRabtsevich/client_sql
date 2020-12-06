import { BasicApi } from './basic-api';
import { getData } from '../utils/get-data';
import { IPosition } from '../types/position';

export class PositionApi extends BasicApi {
  private positionPath = 'positions';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public getPositions(): Promise<IPosition[]> {
    const response = this.https.get(this.positionPath);

    return getData(response);
  }
}
