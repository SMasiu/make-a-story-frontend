import React from 'react';

const List = ({items}) => (
    <ul>
        {items.map((i,idx) => <li key={idx}>{i}</li>)}
    </ul>
)

export default List;