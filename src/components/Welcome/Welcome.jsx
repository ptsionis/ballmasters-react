import React, { useContext } from "react";
import QuickPlayButton from "../QuickPlayButton/QuickPlayButton";
import Footer from "../Footer/Footer";

import { AppContext } from "../../App";
import { getFirstName } from "../../utils/userUtils";
import "./Welcome.css";

const Welcome = () => {
  const { user } = useContext(AppContext);

  return (
    <section className="home-section welcome">
      {user ? <h3>Welcome, {getFirstName(user.username)}!</h3> : null}
      <QuickPlayButton />
      <Footer />
    </section>
  );
};

export default Welcome;
