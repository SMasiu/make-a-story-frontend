import React, {useContext} from 'react';
import Context from '../../store/context';
import Fragment from '../fragment/fragment';

const NewsList = ({storyId}) => {

    const {state} = useContext(Context);

    return (
        <section>
            {state.newFragments[storyId].content.map( 
                (f, i) => <Fragment fragment={f} key={i}></Fragment> 
            )}
        </section>
    )

}

export default NewsList;