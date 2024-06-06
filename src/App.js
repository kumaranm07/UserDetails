import './App.css';
import React, { useEffect, useState } from 'react';
import UserCard from './Components/UserCard';
import axios from 'axios';
import defaultAvatar from './profile.png'
import Loader from './Components/Loader';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        setError('There was an error fetching the user data!');
        console.error(error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  console.log(user.avatar);

  return (
    <div className="App">
      <div className='card-container'>
        {error ? <p>{error}</p> : <UserCard data={users} content={user => setUser(user)} />}
      </div>
      <div className='content-container'>
        {loading ? <Loader /> : (
          <>
            <div className='header-container'>
              <img src={user.id > 10 ? user.avatar : defaultAvatar} alt="John" />
              <h1>{user.profile ? user.profile.username : ''}</h1><br></br>
            </div>
            <div className='footer-container'>
              <table>
                <tr>
                  <th>Id</th>
                  <td>{user.id}</td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>{user.profile ? user.profile.firstName : ''}</td>
                </tr>
                <tr>
                  <th>Job Title</th>
                  <td>{user.jobTitle}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.profile ? user.profile.email : ''}</td>
                </tr>
                <tr>
                  <th>Bio</th>
                  <td>{user.Bio}</td>
                </tr>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
