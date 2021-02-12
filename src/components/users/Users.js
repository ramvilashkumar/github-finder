import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';

import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';


import UserItem from './UserItem';
import  "./Users.css";

const Users =()=> {
    const githubContext=useContext(GithubContext);

    const{loading,users}=githubContext;

        if(loading){
            return <Spinner />
        }else{
            return (
                <div className="userStyle">
                    {users.map(user=>(
                        <UserItem key={user.id} user={user}  />
                    
                    ))}
                </div>
            )

        }

        
    
}

// const userStyle={
//     display:'grid',
//     gridTemplateColumns:'repeat(3,1fr)',
//     gridGap: '1rem'
// }



export default Users;
