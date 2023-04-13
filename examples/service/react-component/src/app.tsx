import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import "./styles.css";

export default function App() {
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  // Add an event listener to update the online status.
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
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

  const [counter, setCounter] = useState(1);

  const logCounter = (counter: number) => {
    if (isOnline) {
      console.log(`Counter: ${counter}`);
    } else {
      stashedCountersRef.current.push(counter);
    }
  };

  const stashedCountersRef = useRef<number[]>([]);

  useEffect(() => {
    if (isOnline && stashedCountersRef.current.length > 0) {
      stashedCountersRef.current.map((counter) => logCounter(counter));
      stashedCountersRef.current.length = 0;
    }
  }, [isOnline]);

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

      <button onClick={handleClick}>Counter: {counter}</button>
    </div>
  );
}
