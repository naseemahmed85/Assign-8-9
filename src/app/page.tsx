'use client';

import { useEffect, useState } from 'react';

export default function Countergame() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter((prevCounter) => prevCounter + 1);
    }, []);

    function updateCounter() {
        console.log(counter);
        setCounter((prevCounter) => prevCounter + 1);
        console.log(counter);
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={updateCounter}>Add Counter</button>
        </div>
    );
}
