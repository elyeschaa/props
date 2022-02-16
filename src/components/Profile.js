import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h3
        onClick={() => props.handlname(props.Fullname)}
        style={{ color: "red" }}
      >
        my name is {props.Fullname}
      </h3>
      <p>my bio {props.Bio}</p>
      <h3>my profession is {props.Profession}</h3>
      <img src="./image/elyes.jpg" />
    </div>
  );
};

export default Profile;
