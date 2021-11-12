import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({children, isLogin, restricted, ...rest}) => {
    return(
        <Route
            {...rest}
            render = {
                ({location}) => (
                    isLogin && restricted ? (
                        <Redirect
                            to = {{
                                pathname: '/',
                                state: {form: location}
                            }}
                        />    
                    ) : (
                        children
                    )
                )
            }
        />    
    )
}


export const PrivateRoute = (children, isLogin, ...rest) => {
    return(
        <Route
            {...rest}
            render = {
                ({location}) => (
                    isLogin ? (
                        children
                    ) : (
                        <Redirect
                            to = {{
                                pathname: '/login',
                                state: {form: location}
                            }}
                        /> 
                    )        
                )
            }
        />
    )
}