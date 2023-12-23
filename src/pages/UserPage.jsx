import { React, useState, useEffect } from "react";
import Navbar from "../components/Nav/Navbar";

const UserPage = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   createUser(setUser);
  // }, []);

  return (
    <div className="page container-fluid">
      <Navbar />
      <main className="container-fluid flex-grow-1 d-grid grid-container">
        hellllooo
      </main>
    </div>
  );
};

export default UserPage;
