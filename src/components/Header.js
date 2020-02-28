import React from 'react';
import UserContext from "../contexts/UserContext";

function Header() {
    return (
        <UserContext.Consumer>
            {
                (contextData) => {
                    return (
                        <div>
                            <p>{contextData.user}</p>
                            <p>{contextData.username}</p>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    );
}

export default Header;