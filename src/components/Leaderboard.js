// Leaderboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './Leaderboard.module.css'; // Ensure this is the path to your CSS module
import UserItem from './UserItem'; // Import the UserItem component

function Leaderboard() {
    const { tenantId } = useParams();
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const defaultProfileImg = 'http://127.0.0.1:8000/storage/profile_images/default-image.png'; // Ensure this URL is correct

    useEffect(() => {
        axios.get(`http://localhost:8000/api/leaderboard/${tenantId}`)
            .then(response => {
                const userData = response.data.find(user => user.id === currentUser?.id);
                setCurrentUser(userData || null);
                setUsers(response.data.filter(user => user.id !== currentUser?.id));
            })
            .catch(error => {
                console.error('There was an error fetching the leaderboard!', error);
            });
    }, [tenantId, currentUser?.id]);

    return (
        <div>
            <h1>Leaderboard for Tenant {tenantId}</h1>
            <table className={styles.leaderboardTable}>
                <thead>
                    <tr>
                        <th>Profile Image</th>
                        <th>Name</th>
                        <th>XP</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UserItem key={user.id} user={user} defaultProfileImg={defaultProfileImg} />
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan="3">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
