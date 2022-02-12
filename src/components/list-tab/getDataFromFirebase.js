import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase.util";

export const getDataFromFirebase = async (label, data, setData) => {
  // reflect firestore changes to the webpage
  const q = query(collection(db, label));
  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let changedData = change.doc.data();
        const changedDataId = change.doc.id;
        changedData.id = changedDataId;

        if (change.type === "added") {
          setData((prevData) => [...prevData, changedData]);
          console.log("Added: ", changedData, data);
        }

        if (change.type === "modified") {
          setData((prev) => {
            return prev.map((data) =>
              data.id === changedDataId ? { ...changedData } : data
            );
          });
          console.log("Modified: ", change.doc.data(), data);
        }

        if (change.type === "removed") {
          setData((prev) => {
            return prev.filter((data) => data.id !== changedDataId);
          });
          console.log("Removed: ", change.doc.data(), data);
        }
      });
    },
    (error) => {
      console.log(error);
    }
  );
  return unsubscribe;
};
