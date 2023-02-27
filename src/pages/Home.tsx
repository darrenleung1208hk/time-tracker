import React from "react";
import Stack from "@mui/material/Stack";
import Entry from "@/components/Entry/Entry";
import PrivateRoute from "@/components/PrivateRoute";
import Layout from "@/layout/Layout";
import { useEntries } from "@/lib/entry/hooks";
import { COLOR } from "@/themes/palette";

export const Home = () => {
  const { data: entries, isLoading } = useEntries();

  if (isLoading) {
    return null;
  }

  return (
    <PrivateRoute>
      <Layout>
        <Stack>
          {entries.map((e) => (
            <Entry
              key={e.id}
              category={"Task"}
              title={e.title}
              color={COLOR.green400}
              duration={1}
            />
          ))}
        </Stack>
      </Layout>
    </PrivateRoute>
  );
};
