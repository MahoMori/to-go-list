import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase.util";

export const getDataFromFirebase = async (
  label,
  receivedData,
  setReceivedData
) => {
  // reflect firestore changes to the webpage
  const q = query(collection(db, label));
  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        // get data which will be handled here
        let changedData = change.doc.data();
        // get the id of data
        const changedDataId = change.doc.id;
        // changedData.id = changedDataId;

        if (change.type === "added") {
          changedData.id = changedDataId;
          setReceivedData((prevData) => [...prevData, changedData]);
          console.log("Added: ", changedData, receivedData);
        }

        if (change.type === "modified") {
          setReceivedData((prev) => {
            return prev.map((data) =>
              data.id === changedDataId ? { ...changedData } : data
            );
          });
          console.log("Modified: ", change.doc.data(), receivedData);
        }

        if (change.type === "removed") {
          setReceivedData((prev) => {
            return prev.filter((data) => data.id !== changedDataId);
          });
          console.log("Removed: ", change.doc.data(), receivedData);
        }
      });
    },
    (error) => {
      console.log(error);
    }
  );
  return unsubscribe;
};
