import React, {useEffect, useState} from 'react'
import axios from 'axios';

const UsersList = () => {

  const [users, setUsers] = useState(['']);

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  useEffect (() => {
    const fetchUsers = async() => {
        try {
            const response =  await axios.get(apiUrl);
            setUsers(response.data);
        } catch {
            console.log('error in fetching data')
        }
    };
    fetchUsers();
  }, [])



  return (
    <>
        <div className='p-5'>
            <div className='usersList'>
                <div className='row'>
                    <div className='col-md-6'><h3 className='text-primary'>All Users</h3></div>
                    <div className='col-md-6 text-end'>
                        <button type="button" class="btn btn-outline-primary btn-sm w-25 fw-semibold">Create New User</button>
                    </div>
                </div>
                <div className='table my-5'>
                    <table class="table table-success table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Srl No</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index)=>(
                                <tr>
                                    <td key={user.id}>{index + 1}</td>
                                    <td>Image</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.gender || 'N/A'}</td>
                                    <td>
                                        <button type="button" class="btn btn-success btn-sm me-2"><i class="bi bi-eye-fill"></i></button>
                                        <button type="button" class="btn btn-info btn-sm me-2"><i class="bi bi-pencil"></i></button>
                                        <button type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default UsersList