import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import styles from './ProfilePage.module.css';
const ProfilePage = () => {
    const user = useSelector((state) => state.user.user);

    return (
        <Layout>
            <div className={styles.cardWrapper}>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="/images/user.png" className="card-img-top" alt="user avatar" />
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{user?.name}</li>
                        <li className="list-group-item">{user?.email}</li>
                        {
                            user?.isAdmin && <li className="list-group-item">Your role is Admin</li>
                        }
                        {
                            user?.isDoctor && <li className="list-group-item">Your role is Doctor</li>
                        }
                        {
                            user && !user.isDoctor && !user.isAdmin && <li className="list-group-item">Your role is User</li>
                        }
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default ProfilePage
