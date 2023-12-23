import React, { useContext } from "react";

import { AppContext } from "../../App";

const Welcome = () => {
  const { user } = useContext(AppContext);

  return (
    <section>
      <h1>BallMasters</h1>
      <div>{user ? <h3>Welcome {user.username}</h3> : null}</div>
    </section>
  );
};

export default Welcome;
