import { firestore } from "./fbConfig";

export const createRoom = async () => {
  const response = firestore.collection("Test");

  const data = await response.get();
  data.docs.forEach((item) => {
    console.log(item.data());
  });
};
