import {useState} from 'react';

const useGlobalState = () => {
    const [state, setState] = useState({user: {}, stories: [], fragments: {}});

    const userResolver = (payload, command) => {
        if(command === 'clear') {
            return setState({...state, user: {}});
        } else {
            return setState({...state, user: {...state.user, ...payload}});
        }
    }

    const storyResolver = (payload, command) => {
        return setState({...state, stories: [...payload]})
    }

    const fragmentResolver = (payload, command) => {
        const { storyId } = command;
        let fragments = state.fragments;
        if(!fragments[storyId]) {
            fragments[storyId] = { offset: 0, content: [] }
        }

        fragments[storyId] = {
            content: [...fragments[storyId].content, ...payload],
            offset: fragments[storyId].offset + payload.length
        };

        return setState({...state, ...fragments});
    }
    
    
    const resolvers = {
        user: userResolver,
        story: storyResolver,
        fragment: fragmentResolver
    }
    
    const actions = ({type, payload, command}) => {
        return resolvers[type](payload, command);
    }

    return {state, actions};
}

export default useGlobalState;