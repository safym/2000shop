// import components
import { BsEmojiSmileFill } from "react-icons/bs";

//import modules
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

//import icons
import {GrPhone, GrUser, GrContactInfo}  from 'react-icons/gr';

const  Profile = () => {
  let { login } = useParams();

  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {

    fetch("https://ubivaem.space/api/user/" + login)
      .then((res) => res.json())
      .then(
        (result) => {
          setUser(result.message.result[0]);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else {
    if (user.length != 0) {

      return (
            <div className="Content">
              <div className="aboutProfile">
                <BsEmojiSmileFill className="imgProfile" />
                <div className="UserInfo">
                  <h1>{user.Login}</h1>
                  <h2><GrPhone/> {user.PhoneNumber}</h2>
                  <h2><GrUser/> {user.Name}</h2>
                </div>
              </div>
            </div>
          );
    }
  }
};


export default Profile;
