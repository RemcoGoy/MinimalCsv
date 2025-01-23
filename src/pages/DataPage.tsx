import React from "react";
import { useDataStore } from "@/store/dataStore";

export default function DataPage() {
  const { data } = useDataStore();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="h-full w-full border border-white">
        <div className="flex flex-col gap-2">
          {data.map((row, i) => (
            <div key={i}>{row.join(",")}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
