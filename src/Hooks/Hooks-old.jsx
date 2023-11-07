import { useState, useEffect } from "react";

export function HooksOld() {
  const [selectedButton, setSelectedButton] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (selectedButton) {
      setCount((count) => count + 1);
    }
  }, [selectedButton]);

  return (
    <div>
      {/* callback function */}
      <button onClick={() => setSelectedButton(1)}>1</button>
      <button onClick={() => setSelectedButton(2)}>2</button>
      <button onClick={() => setSelectedButton(3)}>3</button>
      {selectedButton ? (
        <p>Button {selectedButton} was clicked</p>
      ) : (
        <p>Select a button!</p>
      )}
      <p>Clicked {count} times</p>
    </div>
  );
}

export function MultiplyOld() {
  const [value, setValue] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (value) {
      setSum(value * 2);
    }
  }, [value]);

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      {value ? (
        <p>
          You entered {value}. Multiplied by 2, that equals {sum}
        </p>
      ) : (
        <p>Please enter a value!</p>
      )}
    </div>
  );
}
