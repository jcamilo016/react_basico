import React, {useContext} from 'react';
import UserContext from "../contexts/UserContext";

function Header() {
    const appUser = useContext(UserContext);
    return (
        <React.Fragment>
            <div>
                <p>{appUser.user}</p>
                <p>{appUser.username}</p>
            </div>
        </React.Fragment>
    );
}

export default Header;