import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { fetchEntries } from "@/lib/entry/api";
import { Entry } from "@/lib/entry/types";

export const useEntries = () => {
  const { user } = useAuth();
  const [data, setData] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const isError = Boolean(error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const res = await fetchEntries(user?.uid);
          setData(res);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [user]);

  return {
    data,
    error,
    isLoading,
    isError,
  };
};
