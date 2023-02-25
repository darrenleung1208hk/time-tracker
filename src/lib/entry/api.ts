import { Entry } from "@/lib/entry/types";
import { fetchDocuments } from "@/lib/firestore/utils";

export async function fetchEntries(userId: string): Promise<Entry[]> {
  const res = await fetchDocuments("entries", {
    where: {
      fieldPath: "userId",
      opStr: "==",
      value: userId,
    },
    limit: 25,
  });
  return res.map(({ title, duration }) => ({ title, duration }));
}
