import React, {useState} from 'react';

const Contact = () => {
    const [cursor, setCursor] = useState({
        x: 0,
        y: 0
    });

    return (
        <div onMouseMove={(event) => {setCursor({x: event.clientX, y: event.clientY})}}>
            <h1>Contact</h1>
            <div>
                <p>{`Mouse position: X= ${cursor.x} Y=${cursor.y}`}</p>
            </div>
        </div>
    );
};

export default Contact;
