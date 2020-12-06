import  React,{FC} from  "react";
import { Route, Redirect } from  "react-router-dom";
import {useClientContext} from "../stores/client-store";
import {Routes} from "../constants";

const  PrivateRoute: FC<{
  component: FC;
  path: string;
  exact: boolean;
  isPrivate:boolean
}> = ({path,component,exact,isPrivate}) => {

  const {state} = useClientContext()

  if(!isPrivate){
    return <Route  path={path}  exact={exact} component={component} />;
  }

  if(isPrivate && state.isAuthorized){
    return <Route  path={path}  exact={exact} component={component} />
  }

   return  <Redirect  to={Routes.Login} />
};
export  default  PrivateRoute;