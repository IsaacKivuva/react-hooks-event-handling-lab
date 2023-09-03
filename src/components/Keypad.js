// Code Keypad Component Here
import React from "react";

function Keypad() {
    function input(event) {
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" placeholder="password" onChange={input} />
        </div>
    )
}

export default Keypad;