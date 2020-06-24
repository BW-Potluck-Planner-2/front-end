import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={(props) => 
                //if this  is authenticated          go to component    otherwise     send to login
                localStorage.getItem("token") ? (<Component {...props} />) : (<Redirect to="/" />)

            }
        />
    )

}

export default PrivateRoute
