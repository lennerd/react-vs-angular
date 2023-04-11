import { useState } from "react";
import clsx from "clsx";
import "./styles.css";
import useOnline from "./use-online";
import useWhenOnline from "./use-when-online";

export default function App() {
  const [counter, setCounter] = useState(1);
  const log = useWhenOnline((counter) => console.log(counter));
  const isOnline = useOnline();

  return (
    <div className="App">
      <div className={clsx("OnlineBanner", isOnline && "is-online")}>
        {isOnline ? "Online" : "Offline"}
      </div>

      <button
        onClick={() => {
          log(counter);
          setCounter(counter + 1);
        }}
      >
        Counter: {counter}
      </button>
    </div>
  );
}
