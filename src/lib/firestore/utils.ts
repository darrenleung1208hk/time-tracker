import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import app from "../firebase";

const db = getFirestore(app);

export async function fetchDocuments(path: string): Promise<DocumentData[]> {
  const data: DocumentData[] = [];
  const querySnapshot = await getDocs(collection(db, path));
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}
