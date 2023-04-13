import { useEffect, useState } from "react";

export default function useOnline() {
  // State and setter for online status. Initial value is determined by the
  // navigator.onLine property.
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

  // Return the online status to be used in the component.
  return isOnline;
}
