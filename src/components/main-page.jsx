import React, { useState, useEffect, useCallback } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase/firebase.util";

import HeaderContainer from "./header/header.container";
import NameTabPanel from "./name-tab/NameTabPanel";

const MainPage = () => {
  const [allUser, setAllUser] = useState([]);

  const getAllUser = useCallback(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let changedData = change.doc.data();

          if (change.type === "added") {
            setAllUser((prevData) => [changedData, ...prevData]);
            console.log("Added: ", changedData);
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
    return unsubscribe;
  }, []);

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    getAllUser();
    setCurrentUser(auth.currentUser.displayName);
  }, []);

  return (
    <div>
      <HeaderContainer currentUser={currentUser} />
      <NameTabPanel allUser={allUser} currentUser={currentUser} />
    </div>
  );
};

export default MainPage;
