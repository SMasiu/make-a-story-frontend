import React, {useContext} from 'react';
import './vote-fragment.css';
import Axios from 'axios';
import { url } from '../../api.conf';
import Context from '../../store/context';

const VoteFragment = ({fragment}) => {

    const {state: {votes}, actions} = useContext(Context);

    const handleVote = () => {
        Axios.post(`${url}/votes`, {fragmentId: fragment.id}, {withCredentials: true})
            .then( ({data: {fragmentId, updatedFrom}}) => {
                if(updatedFrom === -1) {
                    actions({type: 'vote', payload: [...votes, {fragment: fragmentId}]});
                } else {
                    let index = votes.findIndex( v => v.fragment === updatedFrom);
                    votes[index].fragment = fragmentId;
                    actions({type: 'vote', payload: [...votes]});
                }
            })
            .catch( err => {
                console.log(err);
            })
    }

    return (
        <article className="vote-fragment-wrapper">
            <div>
                <p>
                    {fragment.content}
                </p>
                <footer className="vote-fragment-footer">
                    <p>
                        {fragment.nick} {fragment['pub_date'] && new Date(fragment['pub_date']).toDateString()}
                    </p>
                </footer>
            </div>
            <figure className="vote-star" onClick={handleVote}>
                <img src={votes.findIndex( v => v.fragment === fragment.id ) === -1 ? '../star-blank.svg' : '../star.svg'} alt="star"/>
            </figure>
        </article>
    )
}

export default VoteFragment;