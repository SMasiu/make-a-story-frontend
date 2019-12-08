import React from 'react';

const List = ({items}) => (
    <ul>
        {items.map(i => <li>{i}</li>)}
    </ul>
)

export default List;