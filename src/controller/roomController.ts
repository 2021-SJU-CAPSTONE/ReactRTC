import { firestore } from "./fbConfig";

export const createRoom = async () => {
  const data = await firestore.collection("Test").doc("test");

  console.log(await data.get());
  console.log();
};
