import React from "react";
import Header from "../header/Header";
import UserCard from "./UserCard";

function UserProfile() {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Header/>
      <UserCard/>
    </div>
  );
}

export default UserProfile;
