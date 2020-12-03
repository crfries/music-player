import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

//sets the library state to active on button click
const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <h1>Music</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
