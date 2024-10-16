import React, {FC} from 'react'
import {AdminfoList} from './../types'

interface AdminInfoProps {
    admin: AdminfoList
}

const AdminInfo: FC<AdminInfoProps> = ({admin}) => (
    <div>
        <h2>Admin Information:</h2>
        <ul>
            <li>id: {admin.id}</li>
            <li>username: {admin.username}</li>
            <li>role: {admin.role}</li>
            <li>email: {admin.email}</li>
            <li>Status: {admin.lastLogin.toLocaleDateString()}</li>
        </ul>

    </div>
)

export default AdminInfo