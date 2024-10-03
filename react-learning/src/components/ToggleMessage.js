import React, { useState } from 'react';

function ToggleMessage(){
    const [isShown, setIsShown] = useState(true);

    return (
        <div>
            {isShown ? <p>This is a Toggelabel message!</p>: null}
            <button onClick={() => setIsShown(!isShown)}>
                {isShown ? 'hide' : 'show'} Message
            </button>
        </div>
    );
}

export default ToggleMessage;
