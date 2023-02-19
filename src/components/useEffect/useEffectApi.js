import React, { useEffect, useState } from 'react'
import GithubUsers from './github/githubUsers';
import Loading from './github/loading';

const UseEffectApi = () => {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

    const getUsers = async() => {
        try{
            setLoading(false);
            const response = await fetch('https://api.github.com/users');
            //console.log(await response.json())
            const data = await response.json();
            setUsers(data);
        }
        catch(err){
            setLoading(false);
            console.log('my error is ',err)
        }
 
    }

    useEffect(()=>{
        setTimeout(()=>{getUsers()},3000)   
    },[])

    if(loading){
        return <Loading/>
    }

  return (
    <>
        <h2>List of Github Users</h2>
        <div className="container-fluid mt-5">
            <div className="row text-center">
               <GithubUsers users={users}/>
            </div>
        </div>
    </>
  )
}

export default UseEffectApi