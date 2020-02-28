import React from 'react';
import UserContext from "../contexts/UserContext";

const Home = () => {
    let isLogin = 'Log In';

    return (
        <UserContext.Consumer>
            {
                ({login, user, username, updateContext}) => {
                    if (login) {
                        isLogin = 'Log Off';
                    } else {
                        isLogin = 'Log In';
                    }
                    return (
                        <div>
                            <div>
                                <label htmlFor="fname">Username</label>
                                <input type="text" id="fname" name="fname" onChange={(e) => updateContext({
                                    login,
                                    username: e.target.value,
                                    user,
                                    updateContext
                                })}/>
                            </div>
                            <div>
                                <label htmlFor="lname">Name</label>
                                <input type="text" id="lname" name="lname" onChange={(e) => updateContext({
                                    login,
                                    username,
                                    user: e.target.value,
                                    updateContext
                                })}/>
                            </div>
                            <div>
                                <input type="submit" value={isLogin} onClick={() => updateContext({
                                    login: !login,
                                    username,
                                    user,
                                    updateContext
                                })
                                }/>
                            </div>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    );
};

export default Home;
