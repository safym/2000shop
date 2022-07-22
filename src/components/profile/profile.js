// import components
import img_user from "../../img/icons/user.svg"
import { useState } from "react";

const Profile = (props) => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsText, setNewsText] = useState("");

  if (!props.auth) {
    return (
      <h1 className="infoMessage" >Sign in to see your profile!</h1>
    )
  }

  return (

      <div className="AboutProfile">
        <img src={img_user} alt="This is logo" />
        <div className="UserInfo">
          <h1>{localStorage.login}</h1>
          <p>My name is {localStorage.login}! Hello!🍇</p>
        </div>
      </div>
  );
};

export default Profile;
