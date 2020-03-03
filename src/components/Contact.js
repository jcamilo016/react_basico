import React, {useEffect, useState} from 'react';
import UserContext from "../contexts/UserContext";
import {Redirect} from "react-router-dom";
import UseCount from "../hooks/UseCount";

const Contact = () => {
    const [cursor, setCursor] = useState({
        x: 0,
        y: 0
    });

    const [count, setCount] = UseCount(0);

    //Esto reemplaza los métodos ComponentDidUpdate
    //ComponentDidMount
    useEffect(() => {
        console.log("Use Effect");
        return () =>{
            //ComponentWillUnmount
            console.log("Unmount Component");
        }
    },[count % 10 ===0]);

    return (
        <UserContext.Consumer>
            {
                ({login}) => {
                    if (login) {
                        return (
                            <React.Fragment>
                                <div onMouseMove={(event) => {
                                    setCursor({x: event.clientX, y: event.clientY})
                                }}>
                                    <h1>Contact</h1>
                                    <div>
                                        <p>{`Mouse position: X= ${cursor.x} Y=${cursor.y}`}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>{`Contador:  ${count}`}</p>
                                </div>
                                <button onClick={() => setCount(1)}>Incrementar</button>
                                <button onClick={() => setCount(-1)}>Decrementar</button>
                            </React.Fragment>
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
