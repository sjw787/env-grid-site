import React from 'react';

export default function SampleDisplay(props) {
    // Supposing your item shape is something like {name: 'foo'}
    const { item, index, itemsLength } = props;
    return <div>Item {index} of {itemsLength}: {item.name}</div>;
}
