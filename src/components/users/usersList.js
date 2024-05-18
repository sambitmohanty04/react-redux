import React from 'react'

const UsersList = () => {
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
                            <tr>
                                <td>1</td>
                                <td>Image</td>
                                <td>Otto</td>
                                <td>gundu@gmail.com</td>
                                <td>0000000000</td>
                                <td>Male</td>
                                <td>
                                    <button type="button" class="btn btn-success btn-sm me-2"><i class="bi bi-eye-fill"></i></button>
                                    <button type="button" class="btn btn-info btn-sm me-2"><i class="bi bi-pencil"></i></button>
                                    <button type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default UsersList