import React, { useState } from "react";

function ToggleMessage() {
    const [isVisible, setIsVisible] = useState(true);

    const handleToggle = () => {
        setIsVisible(prev => !prev); // invert boolean
    };

    return (
        <div>
            <button onClick={handleToggle}>
                {isVisible ? "Hide" : "Show"} Message
            </button>

            {isVisible && <p>Hello Nagarjun! 👋</p>}
        </div>
    );
}

export default ToggleMessage;
