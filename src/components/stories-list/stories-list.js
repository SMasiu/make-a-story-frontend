import React, {useContext} from 'react';
import './stories-list.css';
import Context from '../../store/context';
import Story from '../story/story';

const StoriesList = () => {

    const {state} = useContext(Context);

    return (
        <section className="stories-list-wrapper">
            { state.stories ? state.stories.map( (s,i) => <Story key={i} story={s} number={i}/> ) : <></> }
        </section>
    )
}

export default StoriesList;