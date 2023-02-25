import {
  collection,
  DocumentData,
  FieldPath,
  getDocs,
  getFirestore,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import app from "@/lib/firebase";

const db = getFirestore(app);

export async function fetchDocuments(
  path: string,
  condition?: {
    fieldPath: string | FieldPath;
    opStr: WhereFilterOp;
    value: unknown;
  },
): Promise<DocumentData[]> {
  try {
    const data: DocumentData[] = [];
    const q = condition
      ? query(
          collection(db, path),
          where(condition.fieldPath, condition.opStr, condition.value),
        )
      : query(collection(db, path));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    return error.message || error;
  }
}
