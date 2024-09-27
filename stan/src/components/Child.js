import React from 'react';

function Child (props) {
    return (
        <div>
            <h2>
                This is child component
            </h2>
            <p>{props.message}</p> {/* Acces the prop */}
        </div>
    );
}

export default Child;
