import { useCallback, useEffect, useRef } from "react";
import useOnline from "./use-online";
import useStableCallback from "./use-stable-callback";

export default function useWhenOnline<TArgs extends any[]>(
  callback: (...args: TArgs) => void
) {
  // Wrap the callback to ensure it is stable between renders.
  callback = useStableCallback(callback);

  // Get the online status.
  const isOnline = useOnline();
  // Ref to store the calls that were made while offline.
  const stashedCallsRef = useRef<TArgs[]>([]);

  // When the online status changes, if we are now online, call the stashed
  // calls and clear them afterward.
  useEffect(() => {
    if (isOnline && stashedCallsRef.current.length > 0) {
      stashedCallsRef.current.map((args) => callback(...args));
      stashedCallsRef.current.length = 0;
    }
  }, [isOnline, callback]);

  // Return a function that calls the callback if online, or stashes the call if
  // offline.
  return useCallback(
    (...args: TArgs) => {
      if (isOnline) {
        callback(...args);
      } else {
        stashedCallsRef.current.push(args);
      }
    },
    [isOnline, callback]
  );
}
