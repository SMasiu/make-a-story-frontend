import {useState} from 'react';

const useGlobalState = () => {
    const [state, setState] = useState({user: {}, stories: [], fragments: {}, newFragments: {}, votes: []});

    const userResolver = (payload, command) => {
        if(command === 'clear') {
            return setState({...state, user: {}});
        } else {
            return setState({...state, user: {...state.user, ...payload}, votes: [...state.votes]});
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

        return setState({...state, fragments});
    }

    const newFragmentResolver = (payload, command) => {
        const { storyId } = command;
        let fragments = state.newFragments;
        if(!fragments[storyId]) {
            fragments[storyId] = { offset: 0, content: [] }
        }

        fragments[storyId] = {
            content: [...fragments[storyId].content, ...payload],
            offset: fragments[storyId].offset + payload.length
        };

        let con = fragments[storyId].content;
        let ids = [];

        con = con.filter( c => {
            let index = ids.findIndex( i => i === c.id );
            if(index === -1) {
                ids.push(c.id);
                return true;
            }
            return false;
        })

        fragments[storyId].content = con;

        return setState({...state, newFragments: fragments});
    }
    
    const votesResolver = (payload, command) => {
        if(payload) {
            return setState({...state, votes: [...payload]})
        }
    }

    const resolvers = {
        user: userResolver,
        story: storyResolver,
        fragment: fragmentResolver,
        newFragment: newFragmentResolver,
        vote: votesResolver
    }
    
    const actions = ({type, payload, command}) => {
        return resolvers[type](payload, command);
    }

    return {state, actions};
}

export default useGlobalState;