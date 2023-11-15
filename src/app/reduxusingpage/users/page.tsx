'use client';
import { useGetUsersQuery,useGetUsersByIdQuery } from "@/redux/services/userApi";


import React from 'react'

const Users = () => {
    const {isLoading,error,data,isFetching}=useGetUsersQuery(null);
  return (
    <div className="bg-white h-screen">
        <h1 className="text-center">users</h1><br/>
        {error?(<p>Oh no Srry</p>):
        (isLoading ||isFetching?(<p>Loading</p>):
        (data?(
            <div className="flex flex-col justify-center items-center">
            {data.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
            </div>
        ):(<p>No Datas srry</p>))
        )
  }
    
    </div>
  )
}

export default Users