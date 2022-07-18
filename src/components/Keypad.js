// Code Keypad Component Here

import React from "react";

function Keypad() {
  function handleKeypad(e) {
    
    console.log("Entering password...");
  }

  return <input type="password" onChange={handleKeypad} />
}

export default Keypad;
