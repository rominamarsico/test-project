export function Map() {
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

  return (
    <>
      <h2>Array</h2>
      <p>{months}</p>

      <h2>.join()</h2>
      <p>{months.join(", ")}</p>

      <h2>.map()</h2>
      {months.map((month) => {
        return <div key={month}>{month}</div>;
      })}
    </>
  );
}
