import {FC} from "react";

export interface IRouteWithComponent<T> {
  path: T;
  component: FC;
  isPrivate:boolean;
}