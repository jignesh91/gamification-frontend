// UserItem.js
import React from 'react';
import styles from './Leaderboard.module.css'; // Ensure this is the path to your CSS module

function UserItem({ user, defaultProfileImg }) {
    return (
        <tr className={styles.userItem}>
            <td>
                <img 
                    src={user.profile_image ? `http://127.0.0.1:8000/storage/${user.profile_image}` : defaultProfileImg} 
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = defaultProfileImg;
                    }}
                    alt={`${user.name}'s profile`} 
                    className={styles.profileImg}
                />
            </td>
            <td>{user.name}</td>
            <td>{user.experiences_sum_points}</td>
        </tr>
    );
}

export default UserItem;
