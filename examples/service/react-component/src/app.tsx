import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import "./styles.css";
import toggleOnline from "./toggle-online";

export default function App() {
  // State to track whether the user is online or offline.
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  // Add an event listener to update the online status.
  useEffect(() => {
    const handleOnline = () => {
      console.log("-- Went online --");

      setIsOnline(true);
    };
    const handleOffline = () => {
      console.log("-- Went offline --");

      setIsOnline(false);
    };

    // Add event listeners.
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Remove event listeners on cleanup.
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Simple counter state for the sake of the example.
  const [counter, setCounter] = useState(1);

  // Log the counter to the console.
  const logCounter = (counter: number) => {
    console.log(`Counter: ${counter}`);
  };

  // Keep track of the counters that were logged while the user was offline.
  const stashedCountersRef = useRef<number[]>([]);

  // When the user comes back online, log the counters that were stashed.
  // See the dependency array below to see how this effect knows about the
  // `isOnline` state.
  useEffect(() => {
    if (isOnline && stashedCountersRef.current.length > 0) {
      stashedCountersRef.current.map((counter) => logCounter(counter));
      stashedCountersRef.current.length = 0;
    }
  }, [isOnline]);

  // Handle clicks on the counter button. Log the counter to the console if
  // the user is online. Otherwise, buffer the counter.
  const handleClick = () => {
    if (isOnline) {
      logCounter(counter);
    } else {
      stashedCountersRef.current.push(counter);
    }

    // Increment the counter.
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <div
        className={
          // Use clsx to conditionally add the "is-online" class.
          clsx("OnlineBanner", isOnline && "is-online")
        }
      >
        {isOnline ? "🟢 Online" : "🔴 Offline"}
      </div>
      <div>
        <button onClick={handleClick}>Counter: {counter}</button>{" "}
        <button onClick={() => toggleOnline()}>
          {isOnline ? "Go offline" : "Go online"}
        </button>
      </div>
    </div>
  );
}
