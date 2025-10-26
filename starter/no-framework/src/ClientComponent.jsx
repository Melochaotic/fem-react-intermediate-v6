"use client";

import { useState } from "react";

export default function ClientComponent() {
  console.log("Rendering Client Component");
  const { counter, setCounter } = useState(0);

  return (
    <fieldset>
      <legend>Client component</legend>
      <p>Counter {counter}</p>
      <button onClick={() => setCounter(counter++)}>Increment</button>
    </fieldset>
  );
}
