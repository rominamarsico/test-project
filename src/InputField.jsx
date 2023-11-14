import { useState, useEffect } from "react";

export function InputField() {
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
      <p>
        You entered {value}. Multiplied by 2, that equals {sum}
      </p>
    </div>
  );
}
