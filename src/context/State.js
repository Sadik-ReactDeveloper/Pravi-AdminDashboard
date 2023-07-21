import React, { useEffect, useState } from "react";
import UserContext from "./Context";

const State = props => {
  const [notification, setNotification] = useState([]);
  const [AllAstroList, setAllAstroList] = useState([]);
  const [viewOneAstro, setviewOneAstro] = useState({});

  return (
    <UserContext.Provider
      value={{ notification, setNotification, AllAstroList, viewOneAstro }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
