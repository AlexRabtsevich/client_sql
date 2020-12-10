import { BasicApi } from './basic-api';
import { IBooking, IBookingRequest, IUpdateBookingDate } from '../types';
import { getData } from '../utils/get-data';

export class BookingApi extends BasicApi {
  private bookingPath = 'bookings';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public createBooking(room: IBookingRequest): Promise<IBooking> {
    const response = this.https.post(this.bookingPath, room);

    return getData(response);
  }

  public getBookings(): Promise<IBooking[]> {
    const response = this.https.get(this.bookingPath);

    return getData(response);
  }

  public deleteBooking(id: string): any {
    const deletePath = `${this.bookingPath}/${id}`;
    this.https.delete(deletePath);
  }

  public checkOutBooking(id: string): Promise<IBooking> {
    const response = this.https.put(this.bookingPath, { id });
    return getData(response);
  }
}
