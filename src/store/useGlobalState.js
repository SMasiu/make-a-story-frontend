import {useState} from 'react';

const useGlobalState = () => {
    const [state, setState] = useState({user: {}});

    const userResolver = (payload, command) => {
        if(command === 'clear') {
            return setState({user: {}});
        } else {
            return setState({user: {...state.user, ...payload}});
        }
    }
    
    const resolvers = {
        user: userResolver
    }
    
    const actions = ({type, payload, command}) => {
        return resolvers[type](payload, command);
    }

    return {state, actions};
}

export default useGlobalState;