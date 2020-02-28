import React, {useState} from 'react';
import UserContext from "../contexts/UserContext";
import Redirect from "react-router-dom/es/Redirect";

const Contact = () => {
    const [cursor, setCursor] = useState({
        x: 0,
        y: 0
    });

    return (
        <UserContext.Consumer>
            {
                ({login}) => {
                    if (login) {
                        return (
                            <div onMouseMove={(event) => {
                                setCursor({x: event.clientX, y: event.clientY})
                            }}>
                                <h1>Contact</h1>
                                <div>
                                    <p>{`Mouse position: X= ${cursor.x} Y=${cursor.y}`}</p>
                                </div>
                            </div>
                        );
                    } else {
                        return (<Redirect from="/contacts" to="/"/>);
                    }
                }
            }
        </UserContext.Consumer>
    );
};

export default Contact;
