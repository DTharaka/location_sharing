import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        { 
            id: 'u1', 
            name: 'Tharaka Dilruk', 
            image: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png', 
            places: 3
        }
    ];

    return (
        <UsersList items={USERS}/>
    );
};

export default Users;