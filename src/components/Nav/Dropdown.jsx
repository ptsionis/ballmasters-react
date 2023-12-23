import React, { useContext } from "react";
import { AppContext } from "../../App";

import LogoutButton from "../LogoutButton/LogoutButton";

const Dropdown = () => {
  const { setCurrentPage } = useContext(AppContext);

  return (
    <div>
      <div role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img
          className="rounded-circle"
          src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
          width={50}
          alt="Avatar Dropdown"
        />
      </div>
      <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end text-end">
        <li>
          <button
            className="dropdown-item"
            onClick={() => {
              setCurrentPage("profile");
            }}
          >
            Profile
          </button>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/submit-pending">
            Submit Question
          </a>
        </li>
        <li className="mt-3 mx-2 text-center">
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
