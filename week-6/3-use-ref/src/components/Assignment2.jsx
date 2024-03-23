import React, { useState, useCallback,useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [forceRender,setforceRender] = useState(0);

    var ptag = useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        setforceRender(Math.random());
    };
    ptag.current=ptag.current+1;
    return (
        <div>
            <p>This component has rendered {ptag.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};
