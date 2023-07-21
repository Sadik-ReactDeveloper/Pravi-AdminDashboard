import React, { useEffect, useState } from "react";
import UserContext from "./Context";

const State = (props) => {
  const [notification, setNotification] = useState([]);
  const [AllAstroList, setAllAstroList] = useState([]);
  const [viewOneAstro, setviewOneAstro] = useState({});
  const data = [{ value: "dummy", age: "32" }];
  return (
    <UserContext.Provider
      value={{ data, setNotification, AllAstroList, viewOneAstro }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
