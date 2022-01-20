import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase/firebase.util";

import HeaderContainer from "./header/header.container";
import NameTabPanel from "./name-tab/NameTabPanel";

// headerでcurrent logged in userのdisplay nameが必要
// nametabpanelで全userのdisplya nameが必要
// →　その中のlisttabpanelでcurrent logged in userのdisplay nameが必要

const MainPage = () => {
  const [allUser, setAllUser] = useState([]);

  const getAllUser = () => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let changedData = change.doc.data();
          // const changedDataId = change.doc.id;
          // changedData.id = changedDataId;

          if (change.type === "added") {
            setAllUser((prevData) => [...prevData, changedData]);
            console.log("Added: ", changedData);
          }

          // if (change.type === "modified") {
          //   setAllUser((prev) => {
          //     return prev.map((data) =>
          //       data.id === changedDataId ? { ...changedData } : data
          //     );
          //   });
          //   console.log("Modified: ", changedData);
          // }

          // if (change.type === "removed") {
          //   setAllUser((prev) => {
          //     return prev.filter((data) => data.id !== changedDataId);
          //   });
          //   console.log("Removed: ", changedData);
          // }
        });
      },
      (error) => {
        console.log(error);
      }
    );
    return unsubscribe;
  };

  const [currentUser, setCurrentUser] = useState();
  const getCurrentUser = onAuthStateChanged(auth, (user) => {
    if (user) {
      allUser.map((u) => {
        if (u.email === user.email) {
          setCurrentUser(u.displayName);
        }
      });
    }
  });

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      <HeaderContainer currentUser={currentUser} />
      <NameTabPanel allUser={allUser.reverse()} currentUser={currentUser} />
    </div>
  );
};

export default MainPage;
