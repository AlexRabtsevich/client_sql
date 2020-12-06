
export interface IRoomLevel{
  id:string;
  price:number;
  name:string;
}

export interface IRoom{
  number:number;
  isBooked:boolean
  id:string
  level:IRoomLevel;
}