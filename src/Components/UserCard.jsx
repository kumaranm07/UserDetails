import React from 'react';
import '../Components/UserCard.css';
import defaultAvatar from '../profile.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCard = ({ data, content }) => {
    return (
        <div className="container">
            <div className="main-body">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
                    {data.map(user => (
                        <div className="col mb-3" >
                            <div className="card" onClick={() => content(user)}>
                                <img src="https://via.placeholder.com/340x120/FFB6C1/000000" alt="Cover" className="card-img-top" />
                                <div className="card-body text-center">
                                    <img src={user.id > 10 ? user.avatar : defaultAvatar} style={{ width: '100px', marginTop: '-65px' }} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
                                    <h5 className="card-title">{`${user.profile.firstName} ${user.profile.lastName}`}</h5>
                                    <p className="text-secondary mb-1"><span>Job Title:</span> <br />{user.jobTitle}</p>
                                    <p className="text-muted font-size-sm"><span>Bio :</span> <br />{user.Bio.slice(0, 30)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserCard;
