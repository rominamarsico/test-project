import { useState } from "react";

export function Currency() {
  const [dollar, setDollar] = useState("");
  const [euro, setEuro] = useState("");

  function convertToEuro(value) {
    setEuro(value / 1.08);
    setDollar(value);
  }

  function convertToDollar(value) {
    setEuro(value);
    setDollar(value * 1.08);
  }

  return (
    <>
      <h2>Currency</h2>
      <input onChange={(e) => convertToDollar(e.target.value)} value={euro} />
      <span> € = </span>
      <input onChange={(e) => convertToEuro(e.target.value)} value={dollar} />
      <span> $</span>
    </>
  );
}
