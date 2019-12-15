import React, {useContext} from 'react';
import Context from '../../store/context';
import Fragment from '../fragment/fragment';
import './fragment-list.css';

const FragmentList = ({storyId}) => {

    const {state} = useContext(Context);

    return (
        <section className="fragment-list-wrapper">
            {state.fragments[storyId] ? state.fragments[storyId].content.map( 
                (f, i) => <Fragment key={i} fragment={f} />
            ) : <></>}
        </section>
    )
}

export default FragmentList;