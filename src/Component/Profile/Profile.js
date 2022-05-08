import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
    const [User,setuser]=useContext(UserContext);
    console.log(User)
    return (
        <div>
        <h1>This is profile :{User?.email} </h1>
        </div>
    );
};

export default Profile;