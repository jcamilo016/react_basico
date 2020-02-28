import React from 'react';
import UserContext from "../contexts/UserContext";

const Toolbar = () => {

    return (
        <div>
            <UserContext.Consumer>
                {
                    ({login, user, username, updateContext}) => {
                        if (login) {
                            return (
                                <div>
                                    <p>{username} - {user}</p>
                                    <button onClick={() => updateContext({
                                        login: false,
                                        user,
                                        username,
                                        updateContext
                                    })}>Log off</button>
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <button onClick={() => updateContext({
                                        login: true,
                                        user,
                                        username,
                                        updateContext
                                    })}>Log In</button>
                                </div>
                            )
                        }
                    }
                }
            </UserContext.Consumer>
        </div>
    )
};

export default Toolbar;