import { useState } from "react";
import clsx from "clsx";
import "./styles.css";
import useOnline from "./use-online";
import useWhenOnline from "./use-when-online";

export default function App() {
  // Simple counter state for the sake of the example.
  const [counter, setCounter] = useState(1);

  // Log the counter to the console when the user is online. Buffer the logs
  // if the user is offline.
  const log = useWhenOnline((counter) => console.log(counter));

  // Get the online status.
  const isOnline = useOnline();

  return (
    <div className="App">
      <div
        className={
          // Use clsx to conditionally add the "is-online" class.
          clsx("OnlineBanner", isOnline && "is-online")
        }
      >
        {isOnline ? "Online" : "Offline"}
      </div>

      <button
        onClick={() => {
          // Log the counter to the console.
          log(counter);

          // Increment the counter.
          setCounter(counter + 1);
        }}
      >
        Counter: {counter}
      </button>
    </div>
  );
}
