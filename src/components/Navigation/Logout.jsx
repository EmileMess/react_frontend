import React, { useState, useEffect, Fragment } from 'react';

const Logout = () => {

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
        window.location.replace('/Signin');
    }
    else {
        fetch('https://aigui-backend.azurewebsites.net/users/auth/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.clear();
                window.location.replace('/Signin');
            });
    }
  }, []);

  return (
    <div>
        Logging out...
    </div>
  );
};

export default Logout;