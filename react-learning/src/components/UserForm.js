import React, {useState} from "react";

function Userform() {
    const  [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert (`Hello, ${name}!`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type="text"
                value={name}
                on onChange={(e) => setName(e.target.value)}
                />
            </label>
            <button type="submit">submit</button>
        </form>

    );

}

export default Userform;