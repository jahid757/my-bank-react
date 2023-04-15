import React, { useContext, useEffect } from "react";
import { userPic } from "../../assets/images/images";
import { UserContext } from "../../App";
import { fetchUserData } from "../../Auth/CallAPI";

const ProfileHead = () => {
  const [user, setUser] = useContext(UserContext);
  const { name, mobile, gender, image } = user;
  const loadUserData = async (key) => {
    const userData = await fetchUserData(key);
    setUser(userData);
  };
  useEffect(() => {
    const userKey = localStorage.getItem("key");
    loadUserData(userKey);
  }, []);
  return (
    <div className="profile_details card mb-3">
      <div className="d-flex align-items-center gap-4 ">
        <img
          className="w-30 m-2 border border-primary rounded "
          src={image ? image : userPic}
          alt="user"
        />
        <div>
          <h4>{name}</h4>
          <p className="mb-0">{mobile}</p>
          <p className="mb-0 text-capitalize">{gender}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
