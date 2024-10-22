import {Login} from './Login'
import {ProfileProps} from './Profile'

type PrivateProps = {
    isLoggedIn: boolean;
    Component: React.ComponentType<ProfileProps>;
}

export const Private = ({isLoggedIn, Component}: PrivateProps)=> {
    if(isLoggedIn){
        // passing a component as prop
        return <Component name='nicolas'/>
    } else {
        return <Login />
    }
}


