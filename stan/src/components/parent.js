import React from 'react';
import Child from './Child';

function parent() {
    const message = "Hello from parent components!"
    
    return (
        <div>
            <h1>This is the parent component</h1>
            <Child message={message} /> {/* pass message as a prop */}
        </div>
    );
}

export default parent;