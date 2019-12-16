import React from 'react';
import './fragment.css';

const Fragment = ({fragment}) => (
    <article className="fragment-wrapper">
        <p>
            {fragment.content}
        </p>
        <footer className="fragment-footer">
            <p>{fragment.nick} {new Date(fragment['pub_date']).toDateString()}</p>
        </footer>
    </article>
)

export default Fragment;