import { useState } from "react";
import { useBlocker } from "react-router";

const State = () => {
  const [text, setText] = useState("");
  const { state, proceed, reset } = useBlocker(true);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>text is "{text}"</p>
      <p>state is "{state}"</p>
      <div hidden={state !== "blocked"}>
        <p>navigation is blocked</p>
        <button onClick={proceed}>continue</button>
        <button onClick={reset}>cancel</button>
      </div>
    </div>
  );
};

export default State;
