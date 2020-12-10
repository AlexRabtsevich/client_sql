export interface IRoomLevel {
  id: string;
  price: number;
  name: string;
}

export interface IRoomLevelFormData {
  price: number;
  name: string;
}

export interface IRoom {
  number: number;
  isBooked: boolean;
  id: string;
  level: IRoomLevel;
}

export interface IRoomFormData {
  number: number;
  levelId: string;
}

export interface IRoomMetaData {
  number: number;
  isBooked: boolean;
  id: string;
  roomLevelId: string;
  price: number;
  name: string;
}

export interface IUpdateRoomData {
  id: string;
  levelId: string;
}

export interface IUpdateFormData extends IRoomFormData {
  id: string;
}
