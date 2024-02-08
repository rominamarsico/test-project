import { useState } from "react";

export function Filter() {
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const [search, setSearch] = useState("");

  const result = months.filter((month) => month.includes(search));

  return (
    <>
      <h2>Search</h2>
      <div>search is case sensitive!</div>
      <input onChange={(e) => setSearch(e.target.value)} />
      <p>{result.join(", ")}</p>
    </>
  );
}
